// ===================================================
// Owner Routes (/api/owner)
// ===================================================
// Owner dashboard metrics, listed turfs, and bookings for owner's turfs.

const express = require('express');
const router = express.Router();
const Turf = require('../models/Turf');
const Booking = require('../models/Booking');
const { protect } = require('../middleware/authMiddleware');
const { isOwner } = require('../middleware/roleMiddleware');

// @route   GET /api/owner/turfs
// @desc    Get all turfs owned by the logged-in owner
// @access  Private (Owner)
router.get('/turfs', protect, isOwner, async (req, res) => {
  try {
    const turfs = await Turf.find({ ownerId: req.user._id }).sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: turfs.length,
      data: turfs
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong. Please try again.'
    });
  }
});

// @route   GET /api/owner/bookings
// @desc    Get all bookings for turfs owned by this owner
// @access  Private (Owner)
router.get('/bookings', protect, isOwner, async (req, res) => {
  try {
    // Find all turfs belonging to this owner
    const myTurfs = await Turf.find({ ownerId: req.user._id }).select('_id');
    const myTurfIds = myTurfs.map((t) => t._id);

    // Find all bookings for these turfs
    const bookings = await Booking.find({ turfId: { $in: myTurfIds } })
      .populate('turfId', 'name sport city area address')
      .populate('userId', 'name email phone')
      .sort({ date: -1, startTime: -1 });

    // Mark past bookings as COMPLETED
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
    console.error('Owner Bookings Error:', error.message);
    res.status(500).json({
      success: false,
      message: 'Something went wrong. Please try again.'
    });
  }
});

module.exports = router;
