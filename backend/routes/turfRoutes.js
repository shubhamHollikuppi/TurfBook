// ===================================================
// Turf Routes (/api/turfs)
// ===================================================
// Browse, search, filter, and manage sports turfs.

const express = require('express');
const router = express.Router();
const Turf = require('../models/Turf');
const Booking = require('../models/Booking');
const { protect } = require('../middleware/authMiddleware');
const { isOwner } = require('../middleware/roleMiddleware');

// @route   GET /api/turfs
// @desc    Get all turfs with optional search & filters
// @access  Public
router.get('/', async (req, res) => {
  try {
    const { search, sport, city, maxPrice } = req.query;
    let query = {};

    // Search by name, city, area, or address
    if (search && search.trim()) {
      const regex = new RegExp(search.trim(), 'i');
      query.$or = [
        { name: regex },
        { city: regex },
        { area: regex },
        { address: regex }
      ];
    }

    // Filter by sport
    if (sport && sport.trim() && sport !== 'All') {
      query.sport = sport.trim();
    }

    // Filter by city
    if (city && city.trim() && city !== 'All') {
      query.city = new RegExp('^' + city.trim() + '$', 'i');
    }

    // Filter by max price per hour
    if (maxPrice && !isNaN(Number(maxPrice))) {
      query.pricePerHour = { $lte: Number(maxPrice) };
    }

    const turfs = await Turf.find(query).sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: turfs.length,
      data: turfs
    });
  } catch (error) {
    console.error('Get Turfs Error:', error.message);
    res.status(500).json({
      success: false,
      message: 'Something went wrong. Please try again.'
    });
  }
});

// @route   GET /api/turfs/:id
// @desc    Get single turf details by ID
// @access  Public
router.get('/:id', async (req, res) => {
  try {
    const turf = await Turf.findById(req.params.id).populate('ownerId', 'name email phone');
    if (!turf) {
      return res.status(404).json({
        success: false,
        message: 'Turf not found.'
      });
    }

    res.status(200).json({
      success: true,
      data: turf
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong. Please try again.'
    });
  }
});

// @route   POST /api/turfs
// @desc    Add a new turf (Owner only)
// @access  Private (Owner)
router.post('/', protect, isOwner, async (req, res) => {
  try {
    const {
      name,
      sport,
      city,
      area,
      address,
      description,
      pricePerHour,
      image,
      facilities
    } = req.body;

    if (!name || !sport || !city || !area || !address || !description || !pricePerHour) {
      return res.status(400).json({
        success: false,
        message: 'Please fill in all required turf details.'
      });
    }

    const turf = await Turf.create({
      name: name.trim(),
      sport: sport.trim(),
      city: city.trim(),
      area: area.trim(),
      address: address.trim(),
      description: description.trim(),
      pricePerHour: Number(pricePerHour),
      image: image && image.trim() ? image.trim() : 'https://images.unsplash.com/photo-1529900748604-07564a03e7a6?auto=format&fit=crop&w=800&q=80',
      facilities: Array.isArray(facilities) ? facilities : [],
      ownerId: req.user._id
    });

    res.status(201).json({
      success: true,
      message: 'Turf added successfully.',
      data: turf
    });
  } catch (error) {
    console.error('Add Turf Error:', error.message);
    res.status(500).json({
      success: false,
      message: 'Something went wrong. Please try again.'
    });
  }
});

// @route   PUT /api/turfs/:id
// @desc    Update an existing turf (Owner only, must own the turf)
// @access  Private (Owner)
router.put('/:id', protect, isOwner, async (req, res) => {
  try {
    const turf = await Turf.findById(req.params.id);

    if (!turf) {
      return res.status(404).json({
        success: false,
        message: 'Turf not found.'
      });
    }

    // Owner ownership check
    if (turf.ownerId.toString() !== req.user._id.toString()) {
      return res.status(403).json({
        success: false,
        message: "You don't have permission to modify this turf."
      });
    }

    const {
      name,
      sport,
      city,
      area,
      address,
      description,
      pricePerHour,
      image,
      facilities
    } = req.body;

    if (name) turf.name = name.trim();
    if (sport) turf.sport = sport.trim();
    if (city) turf.city = city.trim();
    if (area) turf.area = area.trim();
    if (address) turf.address = address.trim();
    if (description) turf.description = description.trim();
    if (pricePerHour) turf.pricePerHour = Number(pricePerHour);
    if (image) turf.image = image.trim();
    if (facilities && Array.isArray(facilities)) turf.facilities = facilities;

    await turf.save();

    res.status(200).json({
      success: true,
      message: 'Turf updated successfully.',
      data: turf
    });
  } catch (error) {
    console.error('Update Turf Error:', error.message);
    res.status(500).json({
      success: false,
      message: 'Something went wrong. Please try again.'
    });
  }
});

// @route   DELETE /api/turfs/:id
// @desc    Delete a turf (Owner only, must own the turf)
// @access  Private (Owner)
router.delete('/:id', protect, isOwner, async (req, res) => {
  try {
    const turf = await Turf.findById(req.params.id);

    if (!turf) {
      return res.status(404).json({
        success: false,
        message: 'Turf not found.'
      });
    }

    // Owner ownership check
    if (turf.ownerId.toString() !== req.user._id.toString()) {
      return res.status(403).json({
        success: false,
        message: "You don't have permission to delete this turf."
      });
    }

    // Clean up associated bookings
    await Booking.deleteMany({ turfId: turf._id });

    // Delete the turf document
    await turf.deleteOne();

    res.status(200).json({
      success: true,
      message: 'Turf deleted successfully.'
    });
  } catch (error) {
    console.error('Delete Turf Error:', error.message);
    res.status(500).json({
      success: false,
      message: 'Something went wrong. Please try again.'
    });
  }
});

module.exports = router;
