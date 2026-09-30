// ===================================================
// Database Seed Script (seed.js)
// ===================================================
// Populates demo accounts (player & owner) and realistic sample turfs.

const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('./models/User');
const Turf = require('./models/Turf');
const Booking = require('./models/Booking');

dotenv.config();

const sampleTurfs = [
  {
    name: 'Kolhapur Sports Arena',
    sport: 'Football',
    city: 'Kolhapur',
    area: 'Rajarampuri',
    address: 'Plot 42, 3rd Lane, Rajarampuri, Kolhapur, Maharashtra 416008',
    description: 'Premium FIFA-standard artificial grass turf equipped with international floodlights, spectator gallery, and locker rooms. Ideal for 5-a-side and 7-a-side football matches.',
    pricePerHour: 800,
    image: 'https://images.unsplash.com/photo-1529900748604-07564a03e7a6?auto=format&fit=crop&w=800&q=80',
    facilities: ['Parking', 'Flood Lights', 'Changing Room', 'Drinking Water']
  },
  {
    name: 'City Box Cricket',
    sport: 'Cricket',
    city: 'Kolhapur',
    area: 'Shahupuri',
    address: 'Near Railway Station, Shahupuri, Kolhapur, Maharashtra 416001',
    description: 'High-octane box cricket arena with heavy shock-absorbing turf and safety ceiling netting. Perfect for corporate tournaments, college matches, and friendly weekend games.',
    pricePerHour: 1000,
    image: 'https://images.unsplash.com/photo-1531415074868-036b1c5c53ec?auto=format&fit=crop&w=800&q=80',
    facilities: ['Parking', 'Flood Lights', 'Drinking Water']
  },
  {
    name: 'Smash Badminton Court',
    sport: 'Badminton',
    city: 'Kolhapur',
    area: 'Tarabai Park',
    address: 'Opposite Residency Club, Tarabai Park, Kolhapur, Maharashtra 416003',
    description: 'Indoor synthetic BWF standard wooden-base courts with anti-glare LED lighting, air circulation, and certified Yonex equipment rentals on-site.',
    pricePerHour: 500,
    image: 'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&w=800&q=80',
    facilities: ['Parking', 'Changing Room', 'Drinking Water']
  },
  {
    name: 'Champions Football Turf',
    sport: 'Football',
    city: 'Kolhapur',
    area: 'Rankala',
    address: 'Rankala Lake Ring Road, Near Chowpatty, Kolhapur, Maharashtra 416012',
    description: 'Lakeside artificial turf enjoying pleasant breezes and scenic views. Features professional goalposts, boundary netting, and spectator seating.',
    pricePerHour: 700,
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=800&q=80',
    facilities: ['Flood Lights', 'Changing Room', 'Drinking Water']
  },
  {
    name: 'Sports Zone Arena',
    sport: 'Basketball',
    city: 'Kolhapur',
    area: 'Udyam Nagar',
    address: 'Sector 14, Main Industrial Road, Udyam Nagar, Kolhapur, Maharashtra 416008',
    description: 'High-grip acrylic outdoor basketball court with tempered glass backboards, perimeter chain link fence, and professional evening lighting.',
    pricePerHour: 900,
    image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=800&q=80',
    facilities: ['Parking', 'Flood Lights', 'Drinking Water']
  },
  {
    name: 'Pro Kickers Turf',
    sport: 'Football',
    city: 'Kolhapur',
    area: 'Nagala Park',
    address: 'Near Collector Office, Nagala Park, Kolhapur, Maharashtra 416003',
    description: 'Centrally located multi-sport turf tailored for football and training drills with pristine turf fibers, ample parking, and shower facilities.',
    pricePerHour: 850,
    image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=800&q=80',
    facilities: ['Parking', 'Flood Lights', 'Changing Room', 'Drinking Water']
  }
];

const seedData = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to MongoDB for seeding...');

    // Clear existing collections
    await User.deleteMany({});
    await Turf.deleteMany({});
    await Booking.deleteMany({});
    console.log('Cleared existing records.');

    // Create Demo Player
    const player = await User.create({
      name: 'Rahul Patil',
      email: 'player@turfbook.com',
      phone: '9876543210',
      password: 'Player@123',
      role: 'player'
    });
    console.log('Created Demo Player: player@turfbook.com / Player@123');

    // Create Demo Owner
    const owner = await User.create({
      name: 'Suresh Deshmukh',
      email: 'owner@turfbook.com',
      phone: '9123456780',
      password: 'Owner@123',
      role: 'owner'
    });
    console.log('Created Demo Owner: owner@turfbook.com / Owner@123');

    // Link turfs to owner and insert
    const turfsToInsert = sampleTurfs.map((t) => ({ ...t, ownerId: owner._id }));
    const insertedTurfs = await Turf.insertMany(turfsToInsert);
    console.log(`Inserted ${insertedTurfs.length} sample sports turfs.`);

    // Create a demo upcoming booking for demonstration
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const dateStr = tomorrow.toISOString().split('T')[0];

    await Booking.create({
      userId: player._id,
      turfId: insertedTurfs[0]._id,
      date: dateStr,
      startTime: '18:00',
      endTime: '19:00',
      price: insertedTurfs[0].pricePerHour,
      status: 'CONFIRMED',
      bookingId: 'TB482913'
    });
    console.log('Created demo upcoming booking: TB482913 for tomorrow (18:00 - 19:00).');

    console.log('==========================================');
    console.log(' Database Seeded Successfully!');
    console.log('==========================================');
    process.exit(0);
  } catch (error) {
    console.error('Seeding Failed:', error);
    process.exit(1);
  }
};

seedData();
