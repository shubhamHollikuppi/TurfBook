// ===================================================
// Booking Routes (/api/bookings)
// ===================================================
// Check availability, create bookings, duplicate prevention, and cancellations.

const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');
const Turf = require('../models/Turf');
const { protect } = require('../middleware/authMiddleware');
const { isPlayer } = require('../middleware/roleMiddleware');

// Helper: Generate unique human-readable Booking ID (e.g., TB482913)
const generateBookingId = () => {
  const randomSixDigits = Math.floor(100000 + Math.random() * 900000);
  return 'TB' + randomSixDigits;
};

// @route   GET /api/bookings/availability
// @desc    Get booked slots for a specific turf and date
// @access  Public
router.get('/availability', async (req, res) => {
  try {
    const { turfId, date } = req.query;

    if (!turfId || !date) {
      return res.status(400).json({
        success: false,
        message: 'Turf ID and date are required.'
      });
    }

    // Find all confirmed bookings for this turf on the given date
    const bookedSlots = await Booking.find({
      turfId,
      date,
      status: 'CONFIRMED'
    }).select('startTime endTime -_id');

    const bookedStartTimes = bookedSlots.map((b) => b.startTime);

    res.status(200).json({
      success: true,
      data: {
        date,
        bookedSlots: bookedStartTimes
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong. Please try again.'
    });
  }
});

// @route   POST /api/bookings
// @desc    Create a new booking (Player only)
// @access  Private (Player)
router.post('/', protect, isPlayer, async (req, res) => {
  try {
    const { turfId, date, startTime, endTime } = req.body;

    if (!turfId || !date || !startTime || !endTime) {
      return res.status(400).json({
        success: false,
        message: 'Please provide turf, date, and time slot.'
      });
    }

    // Check that selected slot is in the future
    const selectedDateTime = new Date(`${date}T${startTime}:00`);
    const now = new Date();
    if (selectedDateTime < now) {
      return res.status(400).json({
        success: false,
        message: 'Cannot book slots in the past. Please select an upcoming slot.'
      });
    }

    // Verify turf exists
    const turf = await Turf.findById(turfId);
    if (!turf) {
      return res.status(404).json({
        success: false,
        message: 'Turf not found.'
      });
    }

    // ===============================================
    // DUPLICATE BOOKING PREVENTION
    // ===============================================
    // Check if an existing confirmed booking already exists for:
    // Same turf + Same date + Same startTime + Status = CONFIRMED
    const existingBooking = await Booking.findOne({
      turfId,
      date,
      startTime,
      status: 'CONFIRMED'
    });

    if (existingBooking) {
      return res.status(400).json({
        success: false,
        message: 'This slot is already booked. Please choose another slot.'
      });
    }

    // Generate unique booking ID
    let bookingId = generateBookingId();
    while (await Booking.findOne({ bookingId })) {
      bookingId = generateBookingId();
    }

    // Create confirmed booking
    const booking = await Booking.create({
      userId: req.user._id,
      turfId,
      date,
      startTime,
      endTime,
      price: turf.pricePerHour,
      status: 'CONFIRMED',
      bookingId
    });

    await booking.populate('turfId', 'name sport city area address image');

    res.status(201).json({
      success: true,
      message: 'Booking confirmed successfully.',
      data: booking
    });
  } catch (error) {
    console.error('Booking Creation Error:', error.message);
    res.status(500).json({
      success: false,
      message: 'Something went wrong. Please try again.'
    });
  }
});

// @route   GET /api/bookings/my
// @desc    Get logged-in player's bookings
// @access  Private (Player)
router.get('/my', protect, isPlayer, async (req, res) => {
  try {
    const bookings = await Booking.find({ userId: req.user._id })
      .populate('turfId', 'name sport city area address image pricePerHour')
      .sort({ date: -1, startTime: -1 });

    // Update status to COMPLETED if slot has passed
    const now = new Date();
    for (let b of bookings) {
      if (b.status === 'CONFIRMED') {
        const slotEnd = new Date(`${b.date}T${b.endTime}:00`);
        if (slotEnd < now) {
          b.status = 'COMPLETED';
          await b.save();
        }
      }
    }

    res.status(200).json({
      success: true,
      count: bookings.length,
      data: bookings
    });
  } catch (error) {
    console.error('Get My Bookings Error:', error.message);
    res.status(500).json({
      success: false,
      message: 'Something went wrong. Please try again.'
    });
  }
});

// @route   PUT /api/bookings/:id/cancel
// @desc    Cancel an upcoming booking (Player only)
// @access  Private (Player)
router.put('/:id/cancel', protect, isPlayer, async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);

    if (!booking) {
      return res.status(404).json({
        success: false,
        message: 'Booking not found.'
      });
    }

    // Verify player owns this booking
    if (booking.userId.toString() !== req.user._id.toString()) {
      return res.status(403).json({
        success: false,
        message: "You don't have permission to cancel this booking."
      });
    }

    if (booking.status === 'CANCELLED') {
      return res.status(400).json({
        success: false,
        message: 'Booking is already cancelled.'
      });
    }

    if (booking.status === 'COMPLETED') {
      return res.status(400).json({
        success: false,
        message: 'Cannot cancel a completed booking.'
      });
    }

    // Mark as CANCELLED (do NOT delete the record)
    booking.status = 'CANCELLED';
    await booking.save();

    res.status(200).json({
      success: true,
      message: 'Booking cancelled successfully.',
      data: booking
    });
  } catch (error) {
    console.error('Cancel Booking Error:', error.message);
    res.status(500).json({
      success: false,
      message: 'Something went wrong. Please try again.'
    });
  }
});

module.exports = router;
