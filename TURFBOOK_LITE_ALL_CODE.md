# 🏟️ TURFBOOK LITE — COMPLETE CODEBASE IN ONE SINGLE FILE

> **Find Your Turf. Book Your Game.**
> Generated: 2026-09-17 13:05:21
> Total Files Bundled: 44

---

## 📑 Table of Contents

- [README.md](#file-readme-md)
- [package.json](#file-package-json)
- [server.js](#file-server-js)
- [seed.js](#file-seed-js)
- [.env](#file--env)
- [.gitignore](#file--gitignore)
- [backend/.env](#file-backend--env)
- [backend/package.json](#file-backend-package-json)
- [backend/server.js](#file-backend-server-js)
- [backend/seed.js](#file-backend-seed-js)
- [backend/config/db.js](#file-backend-config-db-js)
- [backend/models/User.js](#file-backend-models-user-js)
- [backend/models/Turf.js](#file-backend-models-turf-js)
- [backend/models/Booking.js](#file-backend-models-booking-js)
- [backend/middleware/authMiddleware.js](#file-backend-middleware-authmiddleware-js)
- [backend/middleware/roleMiddleware.js](#file-backend-middleware-rolemiddleware-js)
- [backend/routes/authRoutes.js](#file-backend-routes-authroutes-js)
- [backend/routes/turfRoutes.js](#file-backend-routes-turfroutes-js)
- [backend/routes/bookingRoutes.js](#file-backend-routes-bookingroutes-js)
- [backend/routes/ownerRoutes.js](#file-backend-routes-ownerroutes-js)
- [frontend/index.html](#file-frontend-index-html)
- [frontend/login.html](#file-frontend-login-html)
- [frontend/register.html](#file-frontend-register-html)
- [frontend/turfs.html](#file-frontend-turfs-html)
- [frontend/turf-details.html](#file-frontend-turf-details-html)
- [frontend/booking.html](#file-frontend-booking-html)
- [frontend/my-bookings.html](#file-frontend-my-bookings-html)
- [frontend/owner-dashboard.html](#file-frontend-owner-dashboard-html)
- [frontend/add-turf.html](#file-frontend-add-turf-html)
- [frontend/edit-turf.html](#file-frontend-edit-turf-html)
- [frontend/css/style.css](#file-frontend-css-style-css)
- [frontend/css/auth.css](#file-frontend-css-auth-css)
- [frontend/css/turf.css](#file-frontend-css-turf-css)
- [frontend/css/booking.css](#file-frontend-css-booking-css)
- [frontend/css/owner.css](#file-frontend-css-owner-css)
- [frontend/css/responsive.css](#file-frontend-css-responsive-css)
- [frontend/js/api.js](#file-frontend-js-api-js)
- [frontend/js/auth.js](#file-frontend-js-auth-js)
- [frontend/js/main.js](#file-frontend-js-main-js)
- [frontend/js/turfs.js](#file-frontend-js-turfs-js)
- [frontend/js/turf-details.js](#file-frontend-js-turf-details-js)
- [frontend/js/booking.js](#file-frontend-js-booking-js)
- [frontend/js/my-bookings.js](#file-frontend-js-my-bookings-js)
- [frontend/js/owner.js](#file-frontend-js-owner-js)

---


<a id="file-readme-md"></a>
## 📄 `README.md`

```markdown
# TurfBook Lite 🏟️

> **Find Your Turf. Book Your Game.**

TurfBook Lite is a complete, human-readable, full-stack web application for sports turf discovery and hourly slot reservations. Designed specifically as an exemplary college full-stack project, it strikes the balance between clean architecture, modern user experience, and simple code that is easy to explain during a college viva.

---

## 🌟 Key Highlights

- **Zero Over-Engineering**: Built strictly with semantic HTML5, CSS3, Vanilla JavaScript, Node.js, Express.js, and MongoDB. No heavy frontend frameworks or unnecessary microservices.
- **Two Distinct User Roles**:
  - **Player**: Browse, search, filter turfs, inspect amenities, pick dates, view real-time hourly slot availability, book turfs, view reservations, and cancel upcoming bookings.
  - **Turf Owner**: Dedicated dashboard, add new turfs, edit turf details, delete turfs, and monitor player bookings.
- **Strict Duplicate Booking Prevention**: Backend database check prevents double-booking the exact same slot on the same date.
- **Human-Readable Architecture**: Modular separation across routes, controllers, middleware, and frontend scripts.

---

## 🛠️ Technology Stack

| Layer | Technology |
|---|---|
| **Frontend** | HTML5, CSS3 (CSS Variables, Flexbox, Grid), Vanilla JavaScript (ES6+), Fetch API |
| **Typography** | Inter (Google Fonts) |
| **Color System** | Emerald Green (`#16A34A`), Slate Dark (`#111827`), Light Slate Background (`#F8FAFC`) |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB, Mongoose ODM |
| **Authentication** | JSON Web Tokens (JWT), bcryptjs (Salt + Hash) |

---

## 📂 Project Structure

```text
turfbook-lite/
│
├── frontend/
│   ├── index.html            # Landing homepage with hero, sports, featured turfs, how-it-works
│   ├── login.html            # Player and owner login form
│   ├── register.html         # User registration with role selection
│   ├── turfs.html            # Turf listing with search & filters (Sport, City, Max Price)
│   ├── turf-details.html     # Turf info, facilities, date picker & hourly slot selector
│   ├── booking.html          # Booking summary review & confirmation with unique ID
│   ├── my-bookings.html      # Player bookings categorized into Upcoming, Completed, Cancelled
│   ├── owner-dashboard.html  # Owner dashboard: turf stats, listed turfs & bookings table
│   ├── add-turf.html         # Owner form to list a new turf facility
│   ├── edit-turf.html        # Owner form to update turf details & pricing
│   │
│   ├── css/
│   │   ├── style.css         # Global tokens, buttons, navbar, footer, badges, modal
│   │   ├── auth.css          # Auth card and form controls
│   │   ├── turf.css          # Filter bar, turf cards grid, details page layout
│   │   ├── booking.css       # Booking review card, success card, my-bookings cards
│   │   ├── owner.css         # Owner metrics, turf lists, and add/edit forms
│   │   └── responsive.css    # Mobile navigation hamburger, responsive stacking
│   │
│   └── js/
│       ├── api.js            # Central Fetch API wrapper + localStorage JWT handling
│       ├── auth.js           # Login, register, logout, and access guard
│       ├── main.js           # Dynamic navigation state & reusable confirmation modal
│       ├── turfs.js          # Turf browsing, keyword search, and multi-filters
│       ├── turf-details.js   # Hourly slot generator (06:00-22:00) & availability checker
│       ├── booking.js        # Reservation execution and success view
│       ├── my-bookings.js    # Player booking history & cancellation handler
│       └── owner.js          # Owner metrics, turf CRUD & booking viewers
│
├── backend/
│   ├── server.js             # Express app entry point & static frontend server
│   ├── package.json          # Node dependencies & npm scripts
│   ├── .env                  # Environment variables (PORT, MONGO_URI, JWT_SECRET)
│   ├── seed.js               # Database seeding script (demo users & 6 realistic turfs)
│   │
│   ├── config/
│   │   └── db.js             # Mongoose connection manager
│   │
│   ├── models/
│   │   ├── User.js           # User schema with bcrypt password hashing
│   │   ├── Turf.js           # Turf schema with sport, price, facilities, and owner ref
│   │   └── Booking.js        # Reservation schema with status and unique bookingId
│   │
│   ├── routes/
│   │   ├── authRoutes.js     # /api/auth (register, login, me)
│   │   ├── turfRoutes.js     # /api/turfs (GET, POST, PUT, DELETE)
│   │   ├── bookingRoutes.js  # /api/bookings (availability, create, my, cancel)
│   │   └── ownerRoutes.js    # /api/owner (owner's turfs & owner's bookings)
│   │
│   └── middleware/
│       ├── authMiddleware.js # Protects routes using JWT verification
│       └── roleMiddleware.js # Enforces Player vs. Owner role access
│
├── .gitignore
└── README.md
```

---

## 🗄️ Database Models

### 1. User Model (`models/User.js`)
- `name`: Full user name (String)
- `email`: Unique email address (String)
- `phone`: Contact mobile number (String)
- `password`: Hashed with `bcryptjs` before save
- `role`: Enum `['player', 'owner']` (default: `'player'`)
- `createdAt`: Registration timestamp

### 2. Turf Model (`models/Turf.js`)
- `name`: Facility title (e.g. Kolhapur Sports Arena)
- `sport`: Enum `['Football', 'Cricket', 'Badminton', 'Basketball']`
- `city`: City name (e.g. Kolhapur)
- `area`: Locality / Area (e.g. Rajarampuri)
- `address`: Detailed street address
- `description`: Detailed facility writeup
- `pricePerHour`: Hourly rental rate (Number)
- `image`: Image URL (with reliable sports fallback)
- `facilities`: Array of amenities (e.g. Parking, Flood Lights, Changing Room, Drinking Water)
- `ownerId`: ObjectId referencing the `User` who created it
- `createdAt`: Creation timestamp

### 3. Booking Model (`models/Booking.js`)
- `userId`: ObjectId referencing the `User` (Player)
- `turfId`: ObjectId referencing the `Turf`
- `date`: Date of match (YYYY-MM-DD)
- `startTime`: Slot start (e.g. `18:00`)
- `endTime`: Slot end (e.g. `19:00`)
- `price`: Final hourly rate at time of booking
- `status`: Enum `['CONFIRMED', 'CANCELLED', 'COMPLETED']`
- `bookingId`: Unique reference code (e.g. `TB482913`)
- `createdAt`: Booking placement timestamp

---

## 📡 REST API Reference

### Authentication (`/api/auth`)
- `POST /api/auth/register` — Register new player or owner
- `POST /api/auth/login` — Login with email & password, returns JWT
- `GET /api/auth/me` — Retrieve currently logged-in user profile (JWT protected)

### Turfs (`/api/turfs`)
- `GET /api/turfs` — Browse turfs (Supports query params: `search`, `sport`, `city`, `maxPrice`)
- `GET /api/turfs/:id` — View details of a specific turf
- `POST /api/turfs` — Create a new turf (Owner only)
- `PUT /api/turfs/:id` — Update turf details (Owner only, ownership verified)
- `DELETE /api/turfs/:id` — Delete a turf and its bookings (Owner only, ownership verified)

### Bookings (`/api/bookings`)
- `GET /api/bookings/availability` — Check booked slots for a turf on a specific date (`?turfId=...&date=...`)
- `POST /api/bookings` — Reserve a slot (Player only; checks duplicate booking)
- `GET /api/bookings/my` — Get logged-in player's reservations (auto-marks past as COMPLETED)
- `PUT /api/bookings/:id/cancel` — Cancel an upcoming booking (Player only)

### Owner (`/api/owner`)
- `GET /api/owner/turfs` — View all turfs owned by current owner
- `GET /api/owner/bookings` — View all bookings across owner's turfs

---

## 🚀 Quickstart & Setup Guide

### Prerequisites
- [Node.js](https://nodejs.org/) (v16+)
- [MongoDB](https://www.mongodb.com/) running locally on port 27017 (or MongoDB Atlas connection string)

### 1. Installation
Open a terminal in the `backend/` directory:
```bash
cd backend
npm install
```

### 2. Environment Variables
Check or edit `backend/.env`:
```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/turfbook_lite
JWT_SECRET=turfbook_lite_jwt_super_secret_key_2026
```

### 3. Seed Database
Populate demo accounts, 6 realistic sports turfs, and sample reservations:
```bash
npm run seed
```

### 4. Run the Application
Start the server with nodemon auto-reload:
```bash
npm run dev
```
*(Or run `npm start` for standard production node)*

Visit in your web browser:
```text
http://localhost:5000
```

---

## 👥 Demo Accounts

| Role | Email | Password |
|---|---|---|
| **Player** | `player@turfbook.com` | `Player@123` |
| **Turf Owner** | `owner@turfbook.com` | `Owner@123` |

---

## 🎓 College Viva Walkthrough

1. **How is Duplicate Booking prevented?**  
   In `bookingRoutes.js`, prior to creating a booking record, Mongoose queries the `Booking` collection with `{ turfId, date, startTime, status: 'CONFIRMED' }`. If a record exists, HTTP 400 is returned with a friendly message: `"This slot is already booked. Please choose another slot."`
2. **How does Authentication work?**  
   The user logs in at `POST /api/auth/login`. The server verifies password hash with `bcrypt.compare`. If valid, a JWT token signed with `JWT_SECRET` is returned. The frontend stores it in `localStorage` and automatically attaches `Authorization: Bearer <token>` in `api.js`.
3. **How does Slot Availability work?**  
   Operating hours are 06:00 AM to 10:00 PM (16 hourly slots). When a date is selected, `GET /api/bookings/availability` fetches all confirmed bookings for that day. The frontend visualizes slots: Available slots are clickable, booked slots are greyed out with a `"Booked"` label, and past hours today are disabled.
4. **How are Turf Owners isolated?**  
   Every turf has an `ownerId`. During `PUT` or `DELETE`, the backend confirms `turf.ownerId.toString() === req.user._id.toString()`. Owner B cannot edit or delete Owner A's turf.

---

## 📄 License
MIT License. Built for learning and academic demonstration.
```

---


<a id="file-package-json"></a>
## 📄 `package.json`

```json
{
  "name": "turfbook-lite",
  "version": "1.0.0",
  "description": "TurfBook Lite — Sports Turf Discovery & Booking Platform",
  "main": "server.js",
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js",
    "seed": "node seed.js"
  },
  "keywords": ["turf", "sports", "booking", "fullstack", "express", "mongodb"],
  "author": "TurfBook Team",
  "license": "ISC",
  "dependencies": {
    "bcryptjs": "^2.4.3",
    "cors": "^2.8.6",
    "dotenv": "^16.6.1",
    "express": "^4.22.2",
    "jsonwebtoken": "^9.0.3",
    "mongoose": "^8.24.4"
  },
  "devDependencies": {
    "nodemon": "^3.1.14"
  }
}
```

---


<a id="file-server-js"></a>
## 📄 `server.js`

```javascript
// ===================================================
// TurfBook Lite - Root Server Entry Point
// ===================================================
// Allows starting the server directly from the root project folder
// (e.g. running 'npm start', 'npm run dev', or 'node server.js').

require('./backend/server.js');
```

---


<a id="file-seed-js"></a>
## 📄 `seed.js`

```javascript
// ===================================================
// TurfBook Lite - Root Seed Entry Point
// ===================================================
// Allows seeding database directly from root (npm run seed or node seed.js).

require('./backend/seed.js');
```

---


<a id="file--env"></a>
## 📄 `.env`

```json
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/turfbook_lite
JWT_SECRET=turfbook_lite_jwt_super_secret_key_2026
```

---


<a id="file--gitignore"></a>
## 📄 `.gitignore`

```text
node_modules/
.env
.DS_Store
*.log
```

---


<a id="file-backend--env"></a>
## 📄 `backend/.env`

```json
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/turfbook_lite
JWT_SECRET=turfbook_lite_jwt_super_secret_key_2026
```

---


<a id="file-backend-package-json"></a>
## 📄 `backend/package.json`

```json
{
  "name": "turfbook-lite-backend",
  "version": "1.0.0",
  "description": "Backend API for TurfBook Lite sports turf discovery and booking platform",
  "main": "server.js",
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js",
    "seed": "node seed.js"
  },
  "keywords": [
    "turf",
    "booking",
    "sports",
    "express",
    "mongodb"
  ],
  "author": "TurfBook Team",
  "license": "ISC",
  "dependencies": {
    "bcryptjs": "^2.4.3",
    "cors": "^2.8.5",
    "dotenv": "^16.4.7",
    "express": "^4.21.2",
    "jsonwebtoken": "^9.0.2",
    "mongoose": "^8.9.5"
  },
  "devDependencies": {
    "nodemon": "^3.1.9"
  }
}
```

---


<a id="file-backend-server-js"></a>
## 📄 `backend/server.js`

```javascript
// ===================================================
// TurfBook Lite - Main Express Server
// ===================================================
// Serves REST APIs and statically hosts the frontend application.

const express = require('express');
const cors = require('cors');
const path = require('path');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

// Route Handlers
const authRoutes = require('./routes/authRoutes');
const turfRoutes = require('./routes/turfRoutes');
const bookingRoutes = require('./routes/bookingRoutes');
const ownerRoutes = require('./routes/ownerRoutes');

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

// Core Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve frontend static files
app.use(express.static(path.join(__dirname, '../frontend')));

// Mount API Endpoints
app.use('/api/auth', authRoutes);
app.use('/api/turfs', turfRoutes);
app.use('/api/bookings', bookingRoutes);
app.use('/api/owner', ownerRoutes);

// Health Check Route
app.get('/api/health', (req, res) => {
  res.status(200).json({
    success: true,
    status: 'online',
    message: 'TurfBook Lite API is running smoothly',
    timestamp: new Date().toISOString()
  });
});

// 404 handler for undefined API routes
app.use('/api/*', (req, res) => {
  res.status(404).json({
    success: false,
    message: 'API endpoint not found'
  });
});

// Central error handler
app.use((err, req, res, next) => {
  console.error('[SERVER ERROR]', err.stack || err.message);
  res.status(500).json({
    success: false,
    message: 'Something went wrong. Please try again.'
  });
});

// Start Server
app.listen(PORT, () => {
  console.log('===============================================');
  console.log(` TurfBook Lite Server Running on Port ${PORT}`);
  console.log(` Web App:  http://localhost:${PORT}`);
  console.log(` Health:   http://localhost:${PORT}/api/health`);
  console.log('===============================================');
});
```

---


<a id="file-backend-seed-js"></a>
## 📄 `backend/seed.js`

```javascript
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
```

---


<a id="file-backend-config-db-js"></a>
## 📄 `backend/config/db.js`

```javascript
// ================================================
// Database Connection Configuration (Mongoose)
// ================================================
// This file establishes a connection to MongoDB using Mongoose.
// It reads the database URI from environment variables (.env).

const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`[OK] MongoDB Connected: ${conn.connection.host}/${conn.connection.name}`);
  } catch (error) {
    console.error('[ERROR] MongoDB connection failed: ' + error.message);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;
```

---


<a id="file-backend-models-user-js"></a>
## 📄 `backend/models/User.js`

```javascript
// ===================================================
// User Model (Mongoose Schema)
// ===================================================
// Roles: "player" (browse & book turfs) or "owner" (manage their turfs).

const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please enter your full name'],
    trim: true
  },
  email: {
    type: String,
    required: [true, 'Please enter your email address'],
    unique: true,
    lowercase: true,
    trim: true
  },
  phone: {
    type: String,
    required: [true, 'Please enter your phone number'],
    trim: true
  },
  password: {
    type: String,
    required: [true, 'Please enter a password'],
    minlength: [6, 'Password must be at least 6 characters']
  },
  role: {
    type: String,
    enum: ['player', 'owner'],
    default: 'player'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Hash password before saving to database
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// Compare candidate password with hashed password
userSchema.methods.comparePassword = async function (candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

module.exports = mongoose.model('User', userSchema);
```

---


<a id="file-backend-models-turf-js"></a>
## 📄 `backend/models/Turf.js`

```javascript
// ===================================================
// Turf Model (Mongoose Schema)
// ===================================================
// Represents a sports turf facility listed by an owner.

const mongoose = require('mongoose');

const turfSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Turf name is required'],
    trim: true
  },
  sport: {
    type: String,
    required: [true, 'Sport type is required'],
    enum: ['Football', 'Cricket', 'Badminton', 'Basketball'],
    trim: true
  },
  city: {
    type: String,
    required: [true, 'City is required'],
    trim: true
  },
  area: {
    type: String,
    required: [true, 'Area is required'],
    trim: true
  },
  address: {
    type: String,
    required: [true, 'Address is required'],
    trim: true
  },
  description: {
    type: String,
    required: [true, 'Description is required'],
    trim: true
  },
  pricePerHour: {
    type: Number,
    required: [true, 'Price per hour is required'],
    min: [0, 'Price must be positive']
  },
  image: {
    type: String,
    default: 'https://images.unsplash.com/photo-1529900748604-07564a03e7a6?auto=format&fit=crop&w=800&q=80'
  },
  facilities: {
    type: [String],
    default: []
  },
  ownerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Turf', turfSchema);
```

---


<a id="file-backend-models-booking-js"></a>
## 📄 `backend/models/Booking.js`

```javascript
// ===================================================
// Booking Model (Mongoose Schema)
// ===================================================
// Represents a confirmed, completed, or cancelled turf reservation.

const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  turfId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Turf',
    required: true
  },
  date: {
    type: String, // Format: YYYY-MM-DD
    required: true
  },
  startTime: {
    type: String, // Format: HH:mm (e.g., "18:00")
    required: true
  },
  endTime: {
    type: String, // Format: HH:mm (e.g., "19:00")
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    enum: ['CONFIRMED', 'CANCELLED', 'COMPLETED'],
    default: 'CONFIRMED'
  },
  bookingId: {
    type: String,
    required: true,
    unique: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Booking', bookingSchema);
```

---


<a id="file-backend-middleware-authmiddleware-js"></a>
## 📄 `backend/middleware/authMiddleware.js`

```javascript
// ===================================================
// Authentication Middleware
// ===================================================
// Verifies JWT token from Authorization header: Bearer <token>

const jwt = require('jsonwebtoken');
const User = require('../models/User');

const protect = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      token = req.headers.authorization.split(' ')[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.id).select('-password');

      if (!req.user) {
        return res.status(401).json({
          success: false,
          message: 'User account no longer exists.'
        });
      }

      return next();
    } catch (error) {
      return res.status(401).json({
        success: false,
        message: 'Please login to continue.'
      });
    }
  }

  if (!token) {
    return res.status(401).json({
      success: false,
      message: 'Please login to continue.'
    });
  }
};

module.exports = { protect };
```

---


<a id="file-backend-middleware-rolemiddleware-js"></a>
## 📄 `backend/middleware/roleMiddleware.js`

```javascript
// ===================================================
// Role-Based Authorization Middleware
// ===================================================
// Enforces that only authorized roles (player / owner) access specific endpoints.

const requireRole = (role) => {
  return (req, res, next) => {
    if (!req.user || req.user.role !== role) {
      return res.status(403).json({
        success: false,
        message: "You don't have permission to access this page."
      });
    }
    next();
  };
};

module.exports = {
  isPlayer: requireRole('player'),
  isOwner: requireRole('owner')
};
```

---


<a id="file-backend-routes-authroutes-js"></a>
## 📄 `backend/routes/authRoutes.js`

```javascript
// ===================================================
// Authentication Routes (/api/auth)
// ===================================================
// Registration, login, and profile retrieval.

const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const { protect } = require('../middleware/authMiddleware');

// Helper: Generate JWT token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '7d' });
};

// @route   POST /api/auth/register
// @desc    Register a new player or turf owner
// @access  Public
router.post('/register', async (req, res) => {
  try {
    const { name, email, phone, password, role } = req.body;

    // Field validations
    if (!name || !email || !phone || !password || !role) {
      return res.status(400).json({
        success: false,
        message: 'Please fill in all required fields.'
      });
    }

    if (password.length < 6) {
      return res.status(400).json({
        success: false,
        message: 'Password must be at least 6 characters long.'
      });
    }

    if (!['player', 'owner'].includes(role)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid role selected. Must be Player or Turf Owner.'
      });
    }

    // Check duplicate email
    const existingUser = await User.findOne({ email: email.toLowerCase().trim() });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: 'Email already registered. Please login instead.'
      });
    }

    // Create user (password is automatically hashed via pre-save hook)
    const user = await User.create({
      name: name.trim(),
      email: email.toLowerCase().trim(),
      phone: phone.trim(),
      password,
      role
    });

    const token = generateToken(user._id);

    res.status(201).json({
      success: true,
      message: 'Registration successful!',
      data: {
        token,
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
          phone: user.phone,
          role: user.role
        }
      }
    });
  } catch (error) {
    console.error('Register Error:', error.message);
    res.status(500).json({
      success: false,
      message: 'Something went wrong. Please try again.'
    });
  }
});

// @route   POST /api/auth/login
// @desc    Authenticate user & return JWT token
// @access  Public
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email) {
      return res.status(400).json({
        success: false,
        message: 'Please enter your email address.'
      });
    }

    if (!password) {
      return res.status(400).json({
        success: false,
        message: 'Please enter your password.'
      });
    }

    const user = await User.findOne({ email: email.toLowerCase().trim() });
    if (!user) {
      return res.status(401).json({
        success: false,
        message: 'Invalid email or password.'
      });
    }

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: 'Invalid email or password.'
      });
    }

    const token = generateToken(user._id);

    res.status(200).json({
      success: true,
      message: 'Logged in successfully!',
      data: {
        token,
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
          phone: user.phone,
          role: user.role
        }
      }
    });
  } catch (error) {
    console.error('Login Error:', error.message);
    res.status(500).json({
      success: false,
      message: 'Something went wrong. Please try again.'
    });
  }
});

// @route   GET /api/auth/me
// @desc    Get currently logged-in user details
// @access  Private (JWT Required)
router.get('/me', protect, async (req, res) => {
  try {
    res.status(200).json({
      success: true,
      data: {
        user: {
          id: req.user._id,
          name: req.user.name,
          email: req.user.email,
          phone: req.user.phone,
          role: req.user.role
        }
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong. Please try again.'
    });
  }
});

module.exports = router;
```

---


<a id="file-backend-routes-turfroutes-js"></a>
## 📄 `backend/routes/turfRoutes.js`

```javascript
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
```

---


<a id="file-backend-routes-bookingroutes-js"></a>
## 📄 `backend/routes/bookingRoutes.js`

```javascript
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
```

---


<a id="file-backend-routes-ownerroutes-js"></a>
## 📄 `backend/routes/ownerRoutes.js`

```javascript
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
```

---


<a id="file-frontend-index-html"></a>
## 📄 `frontend/index.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>TurfBook Lite — Find Your Turf. Book Your Game.</title>
  <link rel="stylesheet" href="/css/style.css">
  <link rel="stylesheet" href="/css/turf.css">
  <link rel="stylesheet" href="/css/responsive.css">
  <style>
    /* Homepage Hero */
    .hero {
      padding: 70px 0 50px;
      text-align: center;
      background: linear-gradient(180deg, #F0FDF4 0%, var(--background) 100%);
      border-bottom: 1px solid var(--border);
    }
    .hero h1 {
      font-size: 3rem;
      font-weight: 800;
      color: var(--dark);
      letter-spacing: -0.02em;
      margin-bottom: 16px;
      line-height: 1.2;
    }
    .hero p {
      font-size: 1.2rem;
      color: var(--muted);
      max-width: 640px;
      margin: 0 auto 32px;
    }
    .hero-actions {
      display: flex;
      gap: 16px;
      justify-content: center;
      margin-bottom: 40px;
    }
    .home-search {
      max-width: 680px;
      margin: 0 auto;
      background: var(--white);
      padding: 8px 8px 8px 20px;
      border-radius: 9999px;
      border: 1px solid var(--border);
      box-shadow: var(--shadow);
      display: flex;
      align-items: center;
      gap: 12px;
    }
    .home-search input {
      flex: 1;
      border: none;
      outline: none;
      font-size: 1rem;
      color: var(--dark);
    }
    .sports-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 20px;
      margin: 40px 0;
    }
    .sport-card {
      background: var(--white);
      border: 1px solid var(--border);
      border-radius: var(--radius);
      padding: 24px 16px;
      text-align: center;
      box-shadow: var(--shadow-sm);
      transition: var(--transition);
      cursor: pointer;
    }
    .sport-card:hover {
      border-color: var(--primary);
      transform: translateY(-3px);
      box-shadow: var(--shadow);
    }
    .sport-icon {
      font-size: 2.4rem;
      margin-bottom: 12px;
      display: block;
    }
    .sport-title {
      font-weight: 700;
      color: var(--dark);
    }
    .steps-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 28px;
      margin: 40px 0;
    }
    .step-card {
      background: var(--white);
      border: 1px solid var(--border);
      border-radius: var(--radius);
      padding: 32px 24px;
      text-align: center;
      box-shadow: var(--shadow-sm);
    }
    .step-num {
      font-size: 2rem;
      font-weight: 800;
      color: var(--primary);
      margin-bottom: 12px;
    }
    .step-title {
      font-size: 1.2rem;
      font-weight: 700;
      color: var(--dark);
      margin-bottom: 8px;
    }
    .step-desc {
      color: var(--muted);
      font-size: 0.95rem;
    }
    .cta-box {
      background: var(--dark);
      color: var(--white);
      border-radius: var(--radius);
      padding: 60px 24px;
      text-align: center;
      margin: 60px 0;
    }
    .cta-box h2 {
      font-size: 2.2rem;
      margin-bottom: 12px;
    }
    .cta-box p {
      color: #94A3B8;
      font-size: 1.1rem;
      margin-bottom: 28px;
    }
    @media (max-width: 768px) {
      .hero h1 { font-size: 2.2rem; }
      .sports-grid { grid-template-columns: repeat(2, 1fr); }
      .steps-grid { grid-template-columns: 1fr; }
      .hero-actions { flex-direction: column; }
    }
  </style>
</head>
<body>
  <!-- Global Dynamic Navbar -->
  <header class="navbar">
    <div class="container nav-container">
      <!-- Injected by main.js -->
    </div>
  </header>

  <main>
    <!-- Hero Section -->
    <section class="hero">
      <div class="container">
        <h1>Find Your Turf. Book Your Game.</h1>
        <p>Find sports turfs near you and reserve your preferred time slot easily.</p>
        <div class="hero-actions">
          <a href="/turfs.html" class="btn btn-primary">Find a Turf</a>
          <a href="/register.html?role=owner" class="btn btn-secondary">Become a Turf Owner</a>
        </div>

        <!-- Quick Search -->
        <form class="home-search" action="/turfs.html" method="GET">
          <span>🔍</span>
          <input type="text" name="search" placeholder="Search by turf name or location (e.g. Rajarampuri, Kolhapur)..." required>
          <button type="submit" class="btn btn-primary btn-sm">Search</button>
        </form>
      </div>
    </section>

    <!-- Popular Sports -->
    <section class="container" style="margin-top: 50px;">
      <h2 style="font-size: 1.6rem; color: var(--dark); margin-bottom: 6px;">Popular Sports</h2>
      <p style="color: var(--muted); margin-bottom: 20px;">Explore turfs tailored for your favorite sports</p>
      
      <div class="sports-grid">
        <a href="/turfs.html?sport=Football" class="sport-card">
          <span class="sport-icon">⚽</span>
          <span class="sport-title">Football</span>
        </a>
        <a href="/turfs.html?sport=Cricket" class="sport-card">
          <span class="sport-icon">🏏</span>
          <span class="sport-title">Cricket</span>
        </a>
        <a href="/turfs.html?sport=Badminton" class="sport-card">
          <span class="sport-icon">🏸</span>
          <span class="sport-title">Badminton</span>
        </a>
        <a href="/turfs.html?sport=Basketball" class="sport-card">
          <span class="sport-icon">🏀</span>
          <span class="sport-title">Basketball</span>
        </a>
      </div>
    </section>

    <!-- Featured Turfs -->
    <section class="container" style="margin-top: 40px;">
      <div style="display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 24px;">
        <div>
          <h2 style="font-size: 1.6rem; color: var(--dark); margin-bottom: 6px;">Featured Turfs</h2>
          <p style="color: var(--muted);">Top rated local arenas ready for your match</p>
        </div>
        <a href="/turfs.html" class="btn btn-outline btn-sm">View All Turfs →</a>
      </div>

      <div class="turfs-grid" id="turfs-list">
        <!-- Turfs dynamically loaded by turfs.js -->
      </div>
    </section>

    <!-- How It Works -->
    <section class="container" id="how-it-works" style="margin-top: 30px;">
      <h2 style="font-size: 1.6rem; color: var(--dark); text-align: center; margin-bottom: 6px;">How It Works</h2>
      <p style="color: var(--muted); text-align: center; margin-bottom: 24px;">Reserve your play arena in three simple steps</p>
      
      <div class="steps-grid">
        <div class="step-card">
          <div class="step-num">01</div>
          <h3 class="step-title">Find a Turf</h3>
          <p class="step-desc">Search sports turfs in your city filtered by sport, area, and hourly budget.</p>
        </div>
        <div class="step-card">
          <div class="step-num">02</div>
          <h3 class="step-title">Choose a Slot</h3>
          <p class="step-desc">Pick your preferred game date and choose an available hourly time slot.</p>
        </div>
        <div class="step-card">
          <div class="step-num">03</div>
          <h3 class="step-title">Confirm Booking</h3>
          <p class="step-desc">Review your reservation details and get your instant booking confirmation ID.</p>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="container">
      <div class="cta-box">
        <h2>Ready to play?</h2>
        <p>Find a turf and book your game today.</p>
        <a href="/turfs.html" class="btn btn-primary" style="font-size: 1.05rem; padding: 12px 28px;">Find a Turf</a>
      </div>
    </section>
  </main>

  <!-- Global Footer -->
  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-col">
          <h4 style="font-size: 1.25rem; margin-bottom: 8px;">TurfBook</h4>
          <p>Find your turf. Book your game.</p>
          <p style="margin-top: 12px; font-size: 0.85rem; color: var(--muted);">A simple, responsive sports turf discovery & booking platform built for players and turf owners.</p>
        </div>
        <div class="footer-col">
          <h4>Quick Links</h4>
          <ul class="footer-links">
            <li><a href="/index.html">Home</a></li>
            <li><a href="/turfs.html">Find Turfs</a></li>
            <li><a href="/index.html#how-it-works">How It Works</a></li>
            <li><a href="/login.html">Login</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Contact</h4>
          <ul class="footer-links">
            <li style="color: var(--muted);">support@turfbook.com</li>
            <li style="color: var(--muted); font-size: 0.85rem; margin-top: 6px;">Available 7 days a week</li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <p>© 2026 TurfBook. All rights reserved.</p>
      </div>
    </div>
  </footer>

  <script src="/js/api.js"></script>
  <script src="/js/auth.js"></script>
  <script src="/js/main.js"></script>
  <script src="/js/turfs.js"></script>
</body>
</html>
```

---


<a id="file-frontend-login-html"></a>
## 📄 `frontend/login.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Login — TurfBook Lite</title>
  <link rel="stylesheet" href="/css/style.css">
  <link rel="stylesheet" href="/css/auth.css">
  <link rel="stylesheet" href="/css/responsive.css">
</head>
<body>
  <!-- Global Navbar -->
  <header class="navbar">
    <div class="container nav-container">
      <!-- Dynamic Navbar -->
    </div>
  </header>

  <main class="auth-wrapper">
    <div class="auth-card">
      <div class="auth-header">
        <h1>Welcome Back</h1>
        <p>Log in to your TurfBook account</p>
      </div>

      <div id="auth-alert" class="alert alert-error"></div>

      <form id="login-form">
        <div class="form-group">
          <label for="email">Email Address</label>
          <input type="email" id="email" class="form-control" placeholder="name@example.com" required autocomplete="email">
        </div>

        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" id="password" class="form-control" placeholder="Enter your password" required autocomplete="current-password">
        </div>

        <button type="submit" class="btn btn-primary btn-block" style="padding: 12px; margin-top: 8px;">Login</button>
      </form>

      <div class="auth-footer">
        Don't have an account? <a href="/register.html">Register here</a>
      </div>
    </div>
  </main>

  <footer class="footer" style="margin-top: 0;">
    <div class="container">
      <div class="footer-bottom" style="border-top: none; padding-top: 0;">
        <p>© 2026 TurfBook. All rights reserved.</p>
      </div>
    </div>
  </footer>

  <script src="/js/api.js"></script>
  <script src="/js/auth.js"></script>
  <script src="/js/main.js"></script>
</body>
</html>
```

---


<a id="file-frontend-register-html"></a>
## 📄 `frontend/register.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Register — TurfBook Lite</title>
  <link rel="stylesheet" href="/css/style.css">
  <link rel="stylesheet" href="/css/auth.css">
  <link rel="stylesheet" href="/css/responsive.css">
</head>
<body>
  <!-- Global Navbar -->
  <header class="navbar">
    <div class="container nav-container">
      <!-- Dynamic Navbar -->
    </div>
  </header>

  <main class="auth-wrapper">
    <div class="auth-card" style="max-width: 480px;">
      <div class="auth-header">
        <h1>Create Account</h1>
        <p>Join TurfBook to book or manage sports arenas</p>
      </div>

      <div id="auth-alert" class="alert alert-error"></div>

      <form id="register-form">
        <div class="form-group">
          <label for="name">Full Name</label>
          <input type="text" id="name" class="form-control" placeholder="e.g. Rahul Patil" required>
        </div>

        <div class="form-group">
          <label for="email">Email Address</label>
          <input type="email" id="email" class="form-control" placeholder="name@example.com" required autocomplete="email">
        </div>

        <div class="form-group">
          <label for="phone">Phone Number</label>
          <input type="tel" id="phone" class="form-control" placeholder="10-digit mobile number" required pattern="[0-9]{10}" title="Please enter a 10-digit mobile number">
        </div>

        <div class="form-group">
          <label for="role">Account Role</label>
          <select id="role" class="form-control" required>
            <option value="player">Player (Book Turfs)</option>
            <option value="owner">Turf Owner (Manage Turfs)</option>
          </select>
        </div>

        <div class="form-group">
          <label for="password">Password (minimum 6 characters)</label>
          <input type="password" id="password" class="form-control" placeholder="Create a password" required minlength="6" autocomplete="new-password">
        </div>

        <div class="form-group">
          <label for="confirmPassword">Confirm Password</label>
          <input type="password" id="confirmPassword" class="form-control" placeholder="Repeat your password" required minlength="6" autocomplete="new-password">
        </div>

        <button type="submit" class="btn btn-primary btn-block" style="padding: 12px; margin-top: 8px;">Create Account</button>
      </form>

      <div class="auth-footer">
        Already have an account? <a href="/login.html">Login here</a>
      </div>
    </div>
  </main>

  <footer class="footer" style="margin-top: 0;">
    <div class="container">
      <div class="footer-bottom" style="border-top: none; padding-top: 0;">
        <p>© 2026 TurfBook. All rights reserved.</p>
      </div>
    </div>
  </footer>

  <script src="/js/api.js"></script>
  <script src="/js/auth.js"></script>
  <script src="/js/main.js"></script>
  <script>
    // Handle ?role=owner URL query parameter
    const urlRole = new URLSearchParams(window.location.search).get('role');
    if (urlRole === 'owner') {
      const select = document.getElementById('role');
      if (select) select.value = 'owner';
    }
  </script>
</body>
</html>
```

---


<a id="file-frontend-turfs-html"></a>
## 📄 `frontend/turfs.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Find Turfs — TurfBook Lite</title>
  <link rel="stylesheet" href="/css/style.css">
  <link rel="stylesheet" href="/css/turf.css">
  <link rel="stylesheet" href="/css/responsive.css">
</head>
<body>
  <!-- Global Navbar -->
  <header class="navbar">
    <div class="container nav-container">
      <!-- Dynamic Navbar -->
    </div>
  </header>

  <main class="container">
    <div style="margin-top: 32px;">
      <h1 style="font-size: 2rem; color: var(--dark); margin-bottom: 6px;">Find Your Turf</h1>
      <p style="color: var(--muted);">Browse verified sports grounds and reserve your preferred match time</p>
    </div>

    <!-- Filter & Search Controls -->
    <div class="filter-card">
      <form id="filter-form" class="filter-grid">
        <div class="filter-group">
          <label for="search-input">Search Turf or Location</label>
          <input type="text" id="search-input" class="form-control" placeholder="Search by name, area, or address...">
        </div>

        <div class="filter-group">
          <label for="filter-sport">Sport</label>
          <select id="filter-sport" class="form-control">
            <option value="All">All Sports</option>
            <option value="Football">Football</option>
            <option value="Cricket">Cricket</option>
            <option value="Badminton">Badminton</option>
            <option value="Basketball">Basketball</option>
          </select>
        </div>

        <div class="filter-group">
          <label for="filter-city">City</label>
          <select id="filter-city" class="form-control">
            <option value="All">All Cities</option>
            <option value="Kolhapur">Kolhapur</option>
          </select>
        </div>

        <div class="filter-group">
          <label for="filter-price">Maximum Price</label>
          <select id="filter-price" class="form-control">
            <option value="">Any Price</option>
            <option value="600">Up to ₹600 / hr</option>
            <option value="800">Up to ₹800 / hr</option>
            <option value="1000">Up to ₹1000 / hr</option>
          </select>
        </div>

        <div class="filter-actions">
          <button type="submit" class="btn btn-primary btn-sm" style="padding: 10px 18px;">Apply</button>
          <button type="button" id="clear-filters-btn" class="btn btn-secondary btn-sm" style="padding: 10px 18px;">Clear</button>
        </div>
      </form>
    </div>

    <!-- Turfs List -->
    <div class="turfs-grid" id="turfs-list">
      <!-- Injected by turfs.js -->
    </div>
  </main>

  <footer class="footer">
    <div class="container">
      <div class="footer-bottom" style="border-top: none; padding-top: 0;">
        <p>© 2026 TurfBook. All rights reserved.</p>
      </div>
    </div>
  </footer>

  <script src="/js/api.js"></script>
  <script src="/js/auth.js"></script>
  <script src="/js/main.js"></script>
  <script src="/js/turfs.js"></script>
</body>
</html>
```

---


<a id="file-frontend-turf-details-html"></a>
## 📄 `frontend/turf-details.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Turf Details — TurfBook Lite</title>
  <link rel="stylesheet" href="/css/style.css">
  <link rel="stylesheet" href="/css/turf.css">
  <link rel="stylesheet" href="/css/responsive.css">
</head>
<body>
  <!-- Global Navbar -->
  <header class="navbar">
    <div class="container nav-container">
      <!-- Dynamic Navbar -->
    </div>
  </header>

  <main class="container">
    <div class="turf-detail-header">
      <a href="/turfs.html" class="btn btn-secondary btn-sm" style="margin-bottom: 16px;">← Back to Turfs</a>
      
      <!-- Turf Banner -->
      <div class="turf-banner">
        <img id="turf-banner-img" src="" alt="Turf Banner">
      </div>
    </div>

    <div class="detail-layout">
      <!-- Left Column: Details -->
      <div class="detail-info">
        <h1 id="turf-name">Loading turf...</h1>
        <div class="detail-meta">
          <span id="turf-location">📍 Location</span>
          <span>•</span>
          <span class="badge badge-sport" id="turf-sport">Sport</span>
        </div>

        <div class="detail-section">
          <h3>About this turf</h3>
          <p class="detail-description" id="turf-desc">Description loading...</p>
        </div>

        <div class="detail-section">
          <h3>Facilities</h3>
          <div class="facilities-list" id="facilities-list">
            <!-- Facilities checkmarks injected by turf-details.js -->
          </div>
        </div>
      </div>

      <!-- Right Column: Booking Box -->
      <div>
        <div class="booking-box">
          <div class="booking-box-price">
            <span id="turf-price">₹0</span> <span>/ hour</span>
          </div>

          <div class="form-group">
            <label for="booking-date">Choose Date</label>
            <input type="date" id="booking-date" class="form-control" required>
          </div>

          <div class="slots-container">
            <label style="display: block; font-size: 0.85rem; font-weight: 600; color: var(--dark); margin-bottom: 8px;">
              Available Time Slots (06:00 AM – 10:00 PM)
            </label>
            <div class="slots-grid" id="slots-grid">
              <!-- Time slot pills injected by turf-details.js -->
            </div>
          </div>

          <button id="proceed-book-btn" class="btn btn-primary btn-block" disabled style="padding: 12px;">
            Select a Time Slot
          </button>
        </div>
      </div>
    </div>
  </main>

  <footer class="footer">
    <div class="container">
      <div class="footer-bottom" style="border-top: none; padding-top: 0;">
        <p>© 2026 TurfBook. All rights reserved.</p>
      </div>
    </div>
  </footer>

  <script src="/js/api.js"></script>
  <script src="/js/auth.js"></script>
  <script src="/js/main.js"></script>
  <script src="/js/turf-details.js"></script>
</body>
</html>
```

---


<a id="file-frontend-booking-html"></a>
## 📄 `frontend/booking.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Confirm Booking — TurfBook Lite</title>
  <link rel="stylesheet" href="/css/style.css">
  <link rel="stylesheet" href="/css/booking.css">
  <link rel="stylesheet" href="/css/responsive.css">
</head>
<body>
  <!-- Global Navbar -->
  <header class="navbar">
    <div class="container nav-container">
      <!-- Dynamic Navbar -->
    </div>
  </header>

  <main class="booking-page-wrapper">
    <div id="booking-alert" class="alert alert-error"></div>

    <!-- Summary Step -->
    <div class="booking-summary-card" id="booking-summary-card">
      <div class="summary-header">
        <h1>Booking Summary</h1>
        <p style="color: var(--muted); font-size: 0.9rem; margin-top: 4px;">Please review your game details before confirming</p>
      </div>

      <div class="summary-list">
        <div class="summary-item">
          <span class="summary-label">Turf</span>
          <span class="summary-value" id="summary-turf">Loading...</span>
        </div>
        <div class="summary-item">
          <span class="summary-label">Sport</span>
          <span class="summary-value" id="summary-sport">-</span>
        </div>
        <div class="summary-item">
          <span class="summary-label">Date</span>
          <span class="summary-value" id="summary-date">-</span>
        </div>
        <div class="summary-item">
          <span class="summary-label">Time Slot</span>
          <span class="summary-value" id="summary-time">-</span>
        </div>
        <div class="summary-item summary-total">
          <span class="summary-label" style="font-weight: 600; color: var(--dark);">Total Amount</span>
          <span class="summary-value" id="summary-price">₹0</span>
        </div>
      </div>

      <button id="confirm-booking-btn" class="btn btn-primary btn-block" style="padding: 14px; font-size: 1.05rem;">
        Confirm Booking
      </button>
      <a href="javascript:history.back()" class="btn btn-secondary btn-block" style="margin-top: 10px; padding: 10px;">
        Back to Turf
      </a>
    </div>

    <!-- Success Confirmation Step -->
    <div class="booking-success-card" id="booking-success-card">
      <div class="success-icon-badge">✓</div>
      <h2 style="font-size: 1.75rem; color: var(--dark); margin-bottom: 8px;">Booking Confirmed!</h2>
      <p style="color: var(--muted); margin-bottom: 20px;">Your turf has been successfully booked.</p>

      <div style="background: var(--background); border: 1px solid var(--border); border-radius: var(--radius); padding: 18px; margin-bottom: 20px; text-align: left;">
        <p style="margin-bottom: 6px;"><strong id="success-turf-name">Kolhapur Sports Arena</strong></p>
        <p style="color: var(--muted); font-size: 0.95rem; margin-bottom: 6px;" id="success-date-time">15 September 2026 (06:00 PM – 07:00 PM)</p>
        <p style="font-weight: 700; color: var(--primary-dark);" id="success-price">₹800</p>
      </div>

      <div style="font-size: 0.85rem; font-weight: 600; color: var(--muted); text-transform: uppercase; letter-spacing: 0.05em;">
        Booking Reference ID
      </div>
      <div class="booking-id-tag" id="success-booking-id">TB000000</div>

      <div class="success-actions">
        <a href="/my-bookings.html" class="btn btn-primary btn-sm" style="padding: 12px 24px;">View My Bookings</a>
        <a href="/turfs.html" class="btn btn-secondary btn-sm" style="padding: 12px 24px;">Back to Turfs</a>
      </div>
    </div>
  </main>

  <footer class="footer">
    <div class="container">
      <div class="footer-bottom" style="border-top: none; padding-top: 0;">
        <p>© 2026 TurfBook. All rights reserved.</p>
      </div>
    </div>
  </footer>

  <script src="/js/api.js"></script>
  <script src="/js/auth.js"></script>
  <script src="/js/main.js"></script>
  <script src="/js/booking.js"></script>
</body>
</html>
```

---


<a id="file-frontend-my-bookings-html"></a>
## 📄 `frontend/my-bookings.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Bookings — TurfBook Lite</title>
  <link rel="stylesheet" href="/css/style.css">
  <link rel="stylesheet" href="/css/booking.css">
  <link rel="stylesheet" href="/css/responsive.css">
</head>
<body>
  <!-- Global Navbar -->
  <header class="navbar">
    <div class="container nav-container">
      <!-- Dynamic Navbar -->
    </div>
  </header>

  <main class="container">
    <div class="page-title-bar">
      <div>
        <h1 style="font-size: 1.85rem; color: var(--dark); margin-bottom: 4px;">My Bookings</h1>
        <p style="color: var(--muted);">View and manage your past and upcoming game reservations</p>
      </div>
      <a href="/turfs.html" class="btn btn-primary btn-sm">+ Book New Turf</a>
    </div>

    <!-- Tabs -->
    <div class="bookings-tabs">
      <button class="tab-btn active" data-tab="upcoming">Upcoming</button>
      <button class="tab-btn" data-tab="completed">Completed</button>
      <button class="tab-btn" data-tab="cancelled">Cancelled</button>
    </div>

    <!-- Bookings Cards Container -->
    <div id="my-bookings-container">
      <!-- Injected by my-bookings.js -->
    </div>
  </main>

  <footer class="footer">
    <div class="container">
      <div class="footer-bottom" style="border-top: none; padding-top: 0;">
        <p>© 2026 TurfBook. All rights reserved.</p>
      </div>
    </div>
  </footer>

  <script src="/js/api.js"></script>
  <script src="/js/auth.js"></script>
  <script src="/js/main.js"></script>
  <script src="/js/my-bookings.js"></script>
</body>
</html>
```

---


<a id="file-frontend-owner-dashboard-html"></a>
## 📄 `frontend/owner-dashboard.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Owner Dashboard — TurfBook Lite</title>
  <link rel="stylesheet" href="/css/style.css">
  <link rel="stylesheet" href="/css/owner.css">
  <link rel="stylesheet" href="/css/responsive.css">
</head>
<body>
  <!-- Global Navbar -->
  <header class="navbar">
    <div class="container nav-container">
      <!-- Dynamic Navbar -->
    </div>
  </header>

  <main class="container" id="owner-dashboard-view">
    <div class="dashboard-header">
      <h1>Welcome back, <span id="owner-name">Owner</span></h1>
      <p>Manage your listed turfs and view player bookings in one place.</p>
    </div>

    <!-- Metrics Cards -->
    <div class="stats-grid">
      <div class="stat-card">
        <div class="stat-label">My Turfs</div>
        <div class="stat-value" id="stat-turfs-count">0</div>
      </div>
      <div class="stat-card">
        <div class="stat-label">Total Bookings Received</div>
        <div class="stat-value" id="stat-bookings-count">0</div>
      </div>
    </div>

    <!-- My Turfs Section -->
    <section id="my-turfs">
      <div class="section-header">
        <h2>My Listed Turfs</h2>
        <a href="/add-turf.html" class="btn btn-primary btn-sm">+ Add New Turf</a>
      </div>

      <div id="owner-turfs-container" class="owner-turf-list">
        <!-- Injected by owner.js -->
      </div>
    </section>

    <!-- Recent Bookings Section -->
    <section id="owner-bookings" style="margin-top: 40px;">
      <div class="section-header">
        <h2>Bookings Received</h2>
      </div>

      <div id="owner-bookings-container">
        <!-- Injected by owner.js -->
      </div>
    </section>
  </main>

  <footer class="footer">
    <div class="container">
      <div class="footer-bottom" style="border-top: none; padding-top: 0;">
        <p>© 2026 TurfBook. All rights reserved.</p>
      </div>
    </div>
  </footer>

  <script src="/js/api.js"></script>
  <script src="/js/auth.js"></script>
  <script src="/js/main.js"></script>
  <script src="/js/owner.js"></script>
</body>
</html>
```

---


<a id="file-frontend-add-turf-html"></a>
## 📄 `frontend/add-turf.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Add Turf — TurfBook Lite</title>
  <link rel="stylesheet" href="/css/style.css">
  <link rel="stylesheet" href="/css/owner.css">
  <link rel="stylesheet" href="/css/responsive.css">
</head>
<body>
  <!-- Global Navbar -->
  <header class="navbar">
    <div class="container nav-container">
      <!-- Dynamic Navbar -->
    </div>
  </header>

  <main class="container">
    <div class="form-card">
      <a href="/owner-dashboard.html" class="btn btn-secondary btn-sm" style="margin-bottom: 20px;">← Back to Dashboard</a>
      
      <h1>Add New Turf</h1>
      <p class="form-card-subtitle">List your sports arena on TurfBook for players to discover and book</p>

      <div id="owner-alert" class="alert alert-error"></div>

      <form id="add-turf-form">
        <div class="form-group">
          <label for="name">Turf Name *</label>
          <input type="text" id="name" class="form-control" placeholder="e.g. Kolhapur Sports Arena" required>
        </div>

        <div class="form-grid-2">
          <div class="form-group">
            <label for="sport">Sport Type *</label>
            <select id="sport" class="form-control" required>
              <option value="Football">Football</option>
              <option value="Cricket">Cricket</option>
              <option value="Badminton">Badminton</option>
              <option value="Basketball">Basketball</option>
            </select>
          </div>

          <div class="form-group">
            <label for="pricePerHour">Price Per Hour (₹) *</label>
            <input type="number" id="pricePerHour" class="form-control" placeholder="e.g. 800" min="100" required>
          </div>
        </div>

        <div class="form-grid-2">
          <div class="form-group">
            <label for="city">City *</label>
            <input type="text" id="city" class="form-control" placeholder="e.g. Kolhapur" required>
          </div>

          <div class="form-group">
            <label for="area">Area / Locality *</label>
            <input type="text" id="area" class="form-control" placeholder="e.g. Rajarampuri" required>
          </div>
        </div>

        <div class="form-group">
          <label for="address">Full Address *</label>
          <input type="text" id="address" class="form-control" placeholder="e.g. Plot 42, 3rd Lane, Rajarampuri, Kolhapur" required>
        </div>

        <div class="form-group">
          <label for="image">Image URL (Optional)</label>
          <input type="url" id="image" class="form-control" placeholder="https://images.unsplash.com/photo-...">
        </div>

        <div class="form-group">
          <label for="description">About This Turf *</label>
          <textarea id="description" class="form-control" rows="4" placeholder="Describe turf grass quality, suitable match formats, dimensions, etc." required></textarea>
        </div>

        <div class="form-group">
          <label>Available Facilities</label>
          <div class="checkbox-group">
            <label class="checkbox-label">
              <input type="checkbox" name="facilities" value="Parking"> Parking
            </label>
            <label class="checkbox-label">
              <input type="checkbox" name="facilities" value="Flood Lights"> Flood Lights
            </label>
            <label class="checkbox-label">
              <input type="checkbox" name="facilities" value="Changing Room"> Changing Room
            </label>
            <label class="checkbox-label">
              <input type="checkbox" name="facilities" value="Drinking Water"> Drinking Water
            </label>
          </div>
        </div>

        <button type="submit" class="btn btn-primary btn-block" style="padding: 14px; font-size: 1rem; margin-top: 20px;">
          Add Turf
        </button>
      </form>
    </div>
  </main>

  <footer class="footer">
    <div class="container">
      <div class="footer-bottom" style="border-top: none; padding-top: 0;">
        <p>© 2026 TurfBook. All rights reserved.</p>
      </div>
    </div>
  </footer>

  <script src="/js/api.js"></script>
  <script src="/js/auth.js"></script>
  <script src="/js/main.js"></script>
  <script src="/js/owner.js"></script>
</body>
</html>
```

---


<a id="file-frontend-edit-turf-html"></a>
## 📄 `frontend/edit-turf.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Edit Turf — TurfBook Lite</title>
  <link rel="stylesheet" href="/css/style.css">
  <link rel="stylesheet" href="/css/owner.css">
  <link rel="stylesheet" href="/css/responsive.css">
</head>
<body>
  <!-- Global Navbar -->
  <header class="navbar">
    <div class="container nav-container">
      <!-- Dynamic Navbar -->
    </div>
  </header>

  <main class="container">
    <div class="form-card">
      <a href="/owner-dashboard.html" class="btn btn-secondary btn-sm" style="margin-bottom: 20px;">← Back to Dashboard</a>
      
      <h1>Edit Turf Details</h1>
      <p class="form-card-subtitle">Update your turf information and pricing</p>

      <div id="owner-alert" class="alert alert-error"></div>

      <form id="edit-turf-form">
        <div class="form-group">
          <label for="name">Turf Name *</label>
          <input type="text" id="name" class="form-control" required>
        </div>

        <div class="form-grid-2">
          <div class="form-group">
            <label for="sport">Sport Type *</label>
            <select id="sport" class="form-control" required>
              <option value="Football">Football</option>
              <option value="Cricket">Cricket</option>
              <option value="Badminton">Badminton</option>
              <option value="Basketball">Basketball</option>
            </select>
          </div>

          <div class="form-group">
            <label for="pricePerHour">Price Per Hour (₹) *</label>
            <input type="number" id="pricePerHour" class="form-control" min="100" required>
          </div>
        </div>

        <div class="form-grid-2">
          <div class="form-group">
            <label for="city">City *</label>
            <input type="text" id="city" class="form-control" required>
          </div>

          <div class="form-group">
            <label for="area">Area / Locality *</label>
            <input type="text" id="area" class="form-control" required>
          </div>
        </div>

        <div class="form-group">
          <label for="address">Full Address *</label>
          <input type="text" id="address" class="form-control" required>
        </div>

        <div class="form-group">
          <label for="image">Image URL</label>
          <input type="url" id="image" class="form-control">
        </div>

        <div class="form-group">
          <label for="description">About This Turf *</label>
          <textarea id="description" class="form-control" rows="4" required></textarea>
        </div>

        <div class="form-group">
          <label>Available Facilities</label>
          <div class="checkbox-group">
            <label class="checkbox-label">
              <input type="checkbox" name="facilities" value="Parking"> Parking
            </label>
            <label class="checkbox-label">
              <input type="checkbox" name="facilities" value="Flood Lights"> Flood Lights
            </label>
            <label class="checkbox-label">
              <input type="checkbox" name="facilities" value="Changing Room"> Changing Room
            </label>
            <label class="checkbox-label">
              <input type="checkbox" name="facilities" value="Drinking Water"> Drinking Water
            </label>
          </div>
        </div>

        <button type="submit" class="btn btn-primary btn-block" style="padding: 14px; font-size: 1rem; margin-top: 20px;">
          Update Turf
        </button>
      </form>
    </div>
  </main>

  <footer class="footer">
    <div class="container">
      <div class="footer-bottom" style="border-top: none; padding-top: 0;">
        <p>© 2026 TurfBook. All rights reserved.</p>
      </div>
    </div>
  </footer>

  <script src="/js/api.js"></script>
  <script src="/js/auth.js"></script>
  <script src="/js/main.js"></script>
  <script src="/js/owner.js"></script>
</body>
</html>
```

---


<a id="file-frontend-css-style-css"></a>
## 📄 `frontend/css/style.css`

```css
/* ===================================================
   TurfBook Lite - Core Master Stylesheet
   =================================================== */

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

:root {
  --primary: #16A34A;
  --primary-dark: #15803D;
  --dark: #111827;
  --text: #374151;
  --muted: #6B7280;
  --background: #F8FAFC;
  --white: #FFFFFF;
  --border: #E5E7EB;
  --success: #15803D;
  --error: #DC2626;
  --warning: #D97706;
  --font: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --radius: 8px;
  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.04);
  --shadow-md: 0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -2px rgba(0, 0, 0, 0.03);
  --transition: all 0.2s ease-in-out;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: var(--font);
  background-color: var(--background);
  color: var(--text);
  line-height: 1.5;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
}

/* Links & Resets */
a {
  color: inherit;
  text-decoration: none;
  transition: var(--transition);
}

button {
  font-family: inherit;
  cursor: pointer;
  border: none;
  background: none;
}

input, select, textarea {
  font-family: inherit;
  font-size: 0.95rem;
}

.container {
  width: 100%;
  max-width: 1180px;
  margin: 0 auto;
  padding: 0 24px;
}

/* ===================================================
   Header & Navigation
   =================================================== */
.navbar {
  background: var(--white);
  border-bottom: 1px solid var(--border);
  position: sticky;
  top: 0;
  z-index: 100;
}

.nav-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
}

.nav-brand {
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 700;
  font-size: 1.35rem;
  color: var(--dark);
}

.brand-dot {
  width: 10px;
  height: 10px;
  background-color: var(--primary);
  border-radius: 50%;
  display: inline-block;
}

.nav-menu {
  display: flex;
  align-items: center;
  gap: 28px;
  list-style: none;
}

.nav-link {
  font-weight: 500;
  color: var(--text);
  font-size: 0.95rem;
}

.nav-link:hover, .nav-link.active {
  color: var(--primary);
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 14px;
}

.nav-user {
  font-weight: 600;
  font-size: 0.9rem;
  color: var(--dark);
  background: #F1F5F9;
  padding: 6px 14px;
  border-radius: 9999px;
  border: 1px solid var(--border);
}

.hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  padding: 8px;
  cursor: pointer;
}

.hamburger span {
  display: block;
  width: 24px;
  height: 2px;
  background-color: var(--dark);
  transition: var(--transition);
}

/* ===================================================
   Buttons
   =================================================== */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 0.95rem;
  padding: 10px 20px;
  border-radius: var(--radius);
  transition: var(--transition);
  cursor: pointer;
  text-align: center;
  text-decoration: none;
}

.btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.btn-primary {
  background-color: var(--primary);
  color: var(--white);
  border: 1px solid var(--primary);
}

.btn-primary:hover:not(:disabled) {
  background-color: var(--primary-dark);
  border-color: var(--primary-dark);
}

.btn-secondary {
  background-color: #F1F5F9;
  color: var(--text);
  border: 1px solid var(--border);
}

.btn-secondary:hover:not(:disabled) {
  background-color: #E2E8F0;
  color: var(--dark);
}

.btn-outline {
  background-color: transparent;
  color: var(--primary);
  border: 1px solid var(--primary);
}

.btn-outline:hover:not(:disabled) {
  background-color: #F0FDF4;
}

.btn-danger {
  background-color: var(--error);
  color: var(--white);
  border: 1px solid var(--error);
}

.btn-danger:hover:not(:disabled) {
  background-color: #B91C1C;
}

.btn-sm {
  padding: 6px 14px;
  font-size: 0.85rem;
}

.btn-block {
  width: 100%;
}

/* ===================================================
   Cards & Layout Components
   =================================================== */
.card {
  background: var(--white);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  transition: var(--transition);
}

.card:hover {
  box-shadow: var(--shadow);
}

/* Badges */
.badge {
  display: inline-block;
  padding: 4px 10px;
  border-radius: 9999px;
  font-size: 0.8rem;
  font-weight: 600;
}

.badge-sport {
  background: #DCFCE7;
  color: var(--primary-dark);
}

.badge-confirmed {
  background: #DCFCE7;
  color: #15803D;
  border: 1px solid #BBF7D0;
}

.badge-completed {
  background: #F1F5F9;
  color: #475569;
  border: 1px solid #E2E8F0;
}

.badge-cancelled {
  background: #FEE2E2;
  color: #DC2626;
  border: 1px solid #FECACA;
}

/* Alerts */
.alert {
  padding: 12px 16px;
  border-radius: var(--radius);
  font-size: 0.9rem;
  margin-bottom: 18px;
  display: none;
}

.alert-error {
  background-color: #FEF2F2;
  border: 1px solid #FCA5A5;
  color: var(--error);
}

.alert-success {
  background-color: #F0FDF4;
  border: 1px solid #86EFAC;
  color: var(--success);
}

/* Empty States */
.empty-state {
  text-align: center;
  padding: 60px 20px;
  background: var(--white);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  margin: 24px 0;
}

.empty-state-icon {
  font-size: 3rem;
  margin-bottom: 12px;
  display: inline-block;
}

.empty-state h3 {
  font-size: 1.35rem;
  color: var(--dark);
  margin-bottom: 8px;
}

.empty-state p {
  color: var(--muted);
  max-width: 440px;
  margin: 0 auto 20px;
}

/* Modal */
.modal-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(17, 24, 39, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.2s ease;
  padding: 16px;
}

.modal-backdrop.open {
  opacity: 1;
  visibility: visible;
}

.modal-dialog {
  background: var(--white);
  width: 100%;
  max-width: 440px;
  border-radius: var(--radius);
  padding: 24px;
  box-shadow: var(--shadow-md);
  text-align: center;
}

.modal-title {
  font-size: 1.25rem;
  color: var(--dark);
  margin-bottom: 10px;
}

.modal-message {
  color: var(--muted);
  font-size: 0.95rem;
  margin-bottom: 24px;
  line-height: 1.5;
}

.modal-actions {
  display: flex;
  gap: 12px;
  justify-content: center;
}

/* ===================================================
   Footer
   =================================================== */
.footer {
  background: var(--white);
  border-top: 1px solid var(--border);
  padding: 48px 0 24px;
  margin-top: 60px;
}

.footer-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 40px;
  margin-bottom: 36px;
}

.footer-col h4 {
  font-size: 1rem;
  font-weight: 700;
  color: var(--dark);
  margin-bottom: 16px;
}

.footer-col p {
  color: var(--muted);
  font-size: 0.95rem;
  line-height: 1.6;
  max-width: 320px;
}

.footer-links {
  list-style: none;
}

.footer-links li {
  margin-bottom: 10px;
}

.footer-links a {
  color: var(--muted);
  font-size: 0.95rem;
}

.footer-links a:hover {
  color: var(--primary);
}

.footer-bottom {
  border-top: 1px solid var(--border);
  padding-top: 24px;
  text-align: center;
  color: var(--muted);
  font-size: 0.85rem;
}
```

---


<a id="file-frontend-css-auth-css"></a>
## 📄 `frontend/css/auth.css`

```css
/* ===================================================
   TurfBook Lite - Authentication Styles (auth.css)
   =================================================== */

.auth-wrapper {
  min-height: calc(100vh - 180px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 16px;
}

.auth-card {
  background: var(--white);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  width: 100%;
  max-width: 440px;
  padding: 36px 32px;
}

.auth-header {
  text-align: center;
  margin-bottom: 28px;
}

.auth-header h1 {
  font-size: 1.75rem;
  color: var(--dark);
  font-weight: 700;
  margin-bottom: 8px;
}

.auth-header p {
  color: var(--muted);
  font-size: 0.95rem;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--dark);
  margin-bottom: 6px;
}

.form-control {
  width: 100%;
  padding: 10px 14px;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background-color: var(--white);
  color: var(--dark);
  transition: var(--transition);
}

.form-control:focus {
  outline: none;
  border-color: var(--primary);
  box-shadow: 0 0 0 3px rgba(22, 163, 74, 0.15);
}

.field-error {
  color: var(--error);
  font-size: 0.8rem;
  margin-top: 4px;
  display: none;
}

.auth-footer {
  text-align: center;
  margin-top: 24px;
  font-size: 0.9rem;
  color: var(--muted);
}

.auth-footer a {
  color: var(--primary);
  font-weight: 600;
}

.auth-footer a:hover {
  text-decoration: underline;
}
```

---


<a id="file-frontend-css-turf-css"></a>
## 📄 `frontend/css/turf.css`

```css
/* ===================================================
   TurfBook Lite - Turf Browsing & Details (turf.css)
   =================================================== */

/* Filter & Search Bar */
.filter-card {
  background: var(--white);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 20px;
  margin: 28px 0;
  box-shadow: var(--shadow-sm);
}

.filter-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr auto;
  gap: 16px;
  align-items: flex-end;
}

.filter-group label {
  display: block;
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--dark);
  margin-bottom: 6px;
}

.filter-actions {
  display: flex;
  gap: 8px;
}

/* Turf Cards Grid */
.turfs-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 24px;
  margin-bottom: 48px;
}

.turf-card {
  background: var(--white);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.turf-card:hover {
  transform: translateY(-3px);
  box-shadow: var(--shadow-md);
}

.turf-image-wrapper {
  position: relative;
  width: 100%;
  height: 200px;
  background-color: #E2E8F0;
}

.turf-image-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.turf-badge {
  position: absolute;
  top: 12px;
  left: 12px;
  background: rgba(255, 255, 255, 0.95);
  color: var(--primary-dark);
  padding: 4px 10px;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 700;
  box-shadow: var(--shadow-sm);
}

.turf-body {
  padding: 20px;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.turf-title {
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--dark);
  margin-bottom: 6px;
}

.turf-location {
  display: flex;
  align-items: center;
  gap: 6px;
  color: var(--muted);
  font-size: 0.9rem;
  margin-bottom: 16px;
}

.turf-footer {
  margin-top: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 14px;
  border-top: 1px solid var(--border);
}

.turf-price {
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--dark);
}

.turf-price span {
  font-size: 0.85rem;
  font-weight: 500;
  color: var(--muted);
}

/* Turf Details Page */
.turf-detail-header {
  margin: 32px 0 24px;
}

.turf-banner {
  width: 100%;
  height: 380px;
  border-radius: var(--radius);
  overflow: hidden;
  margin-bottom: 32px;
  background-color: #E2E8F0;
}

.turf-banner img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.detail-layout {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 36px;
  margin-bottom: 60px;
}

.detail-info h1 {
  font-size: 2rem;
  color: var(--dark);
  margin-bottom: 8px;
}

.detail-meta {
  display: flex;
  align-items: center;
  gap: 16px;
  color: var(--muted);
  font-size: 0.95rem;
  margin-bottom: 24px;
}

.detail-section {
  margin-bottom: 30px;
}

.detail-section h3 {
  font-size: 1.15rem;
  color: var(--dark);
  margin-bottom: 12px;
  font-weight: 600;
}

.detail-description {
  color: var(--text);
  line-height: 1.7;
}

.facilities-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
}

.facility-item {
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--text);
  font-weight: 500;
  font-size: 0.95rem;
}

.facility-check {
  color: var(--success);
  font-weight: 700;
}

/* Booking Card in Details */
.booking-box {
  background: var(--white);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 24px;
  box-shadow: var(--shadow);
  position: sticky;
  top: 90px;
}

.booking-box-price {
  font-size: 1.6rem;
  font-weight: 700;
  color: var(--dark);
  margin-bottom: 20px;
}

.booking-box-price span {
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--muted);
}

.slots-container {
  margin: 20px 0;
}

.slots-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px;
  max-height: 280px;
  overflow-y: auto;
  padding-right: 4px;
}

.slot-pill {
  padding: 10px 8px;
  border-radius: var(--radius);
  border: 1px solid var(--border);
  background: var(--white);
  text-align: center;
  cursor: pointer;
  transition: var(--transition);
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.slot-time {
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--dark);
}

.slot-status {
  font-size: 0.72rem;
  font-weight: 500;
  color: var(--success);
}

.slot-pill:hover:not(.booked) {
  border-color: var(--primary);
  background: #F0FDF4;
}

.slot-pill.selected {
  border-color: var(--primary);
  background: #DCFCE7;
}

.slot-pill.selected .slot-status {
  color: var(--primary-dark);
  font-weight: 700;
}

.slot-pill.booked {
  background: #F1F5F9;
  border-color: var(--border);
  cursor: not-allowed;
  opacity: 0.6;
}

.slot-pill.booked .slot-status {
  color: var(--error);
}
```

---


<a id="file-frontend-css-booking-css"></a>
## 📄 `frontend/css/booking.css`

```css
/* ===================================================
   TurfBook Lite - Booking & Reservations (booking.css)
   =================================================== */

.booking-page-wrapper {
  max-width: 600px;
  margin: 40px auto;
  padding: 0 16px;
}

.booking-summary-card {
  background: var(--white);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 32px;
  box-shadow: var(--shadow);
}

.summary-header {
  margin-bottom: 24px;
  padding-bottom: 16px;
  border-bottom: 1px solid var(--border);
}

.summary-header h1 {
  font-size: 1.5rem;
  color: var(--dark);
}

.summary-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 28px;
}

.summary-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.summary-label {
  color: var(--muted);
  font-size: 0.95rem;
}

.summary-value {
  font-weight: 600;
  color: var(--dark);
  font-size: 1rem;
}

.summary-total {
  padding-top: 16px;
  border-top: 2px dashed var(--border);
}

.summary-total .summary-value {
  font-size: 1.4rem;
  color: var(--primary-dark);
}

/* Success Confirmation Screen */
.booking-success-card {
  background: var(--white);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 40px 32px;
  box-shadow: var(--shadow);
  text-align: center;
  display: none;
}

.success-icon-badge {
  width: 64px;
  height: 64px;
  background-color: #DCFCE7;
  color: #15803D;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  margin: 0 auto 20px;
}

.booking-id-tag {
  display: inline-block;
  background: #F1F5F9;
  border: 1px solid var(--border);
  padding: 8px 16px;
  border-radius: var(--radius);
  font-family: monospace;
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--dark);
  margin: 16px 0 28px;
}

.success-actions {
  display: flex;
  gap: 12px;
  justify-content: center;
}

/* My Bookings Page */
.page-title-bar {
  margin: 32px 0 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.bookings-tabs {
  display: flex;
  gap: 8px;
  border-bottom: 1px solid var(--border);
  margin-bottom: 24px;
}

.tab-btn {
  padding: 10px 18px;
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--muted);
  border-bottom: 2px solid transparent;
  cursor: pointer;
  background: none;
  border-radius: 0;
  transition: var(--transition);
}

.tab-btn:hover {
  color: var(--dark);
}

.tab-btn.active {
  color: var(--primary);
  border-bottom-color: var(--primary);
}

.bookings-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 48px;
}

.booking-card {
  background: var(--white);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 20px 24px;
  box-shadow: var(--shadow-sm);
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: var(--transition);
}

.booking-card:hover {
  box-shadow: var(--shadow);
}

.booking-card-main h3 {
  font-size: 1.15rem;
  color: var(--dark);
  margin-bottom: 6px;
}

.booking-card-meta {
  display: flex;
  gap: 18px;
  color: var(--muted);
  font-size: 0.9rem;
  flex-wrap: wrap;
}

.booking-card-right {
  display: flex;
  align-items: center;
  gap: 18px;
}

.booking-card-price {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--dark);
  text-align: right;
}
```

---


<a id="file-frontend-css-owner-css"></a>
## 📄 `frontend/css/owner.css`

```css
/* ===================================================
   TurfBook Lite - Owner Portal Styles (owner.css)
   =================================================== */

.dashboard-header {
  margin: 32px 0 28px;
}

.dashboard-header h1 {
  font-size: 1.85rem;
  color: var(--dark);
  margin-bottom: 6px;
}

.dashboard-header p {
  color: var(--muted);
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-bottom: 36px;
}

.stat-card {
  background: var(--white);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 24px;
  box-shadow: var(--shadow-sm);
}

.stat-label {
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--muted);
  margin-bottom: 8px;
}

.stat-value {
  font-size: 2.2rem;
  font-weight: 700;
  color: var(--dark);
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 36px 0 20px;
}

.section-header h2 {
  font-size: 1.35rem;
  color: var(--dark);
}

/* Owner Turf Table/Cards */
.owner-turf-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 36px;
}

.owner-turf-card {
  background: var(--white);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 20px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: var(--shadow-sm);
}

.owner-turf-info h3 {
  font-size: 1.15rem;
  color: var(--dark);
  margin-bottom: 4px;
}

.owner-turf-info p {
  color: var(--muted);
  font-size: 0.9rem;
}

.owner-turf-actions {
  display: flex;
  gap: 10px;
}

/* Owner Bookings List */
.owner-booking-card {
  background: var(--white);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 16px 20px;
  margin-bottom: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: var(--shadow-sm);
}

.owner-booking-card:hover {
  box-shadow: var(--shadow);
}

/* Add / Edit Turf Form */
.form-card {
  background: var(--white);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 36px;
  max-width: 720px;
  margin: 32px auto 60px;
  box-shadow: var(--shadow-sm);
}

.form-card h1 {
  font-size: 1.6rem;
  color: var(--dark);
  margin-bottom: 8px;
}

.form-card-subtitle {
  color: var(--muted);
  margin-bottom: 28px;
  font-size: 0.95rem;
}

.form-grid-2 {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}

.checkbox-group {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  margin-top: 8px;
}

.checkbox-label {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.9rem;
  color: var(--text);
  cursor: pointer;
}
```

---


<a id="file-frontend-css-responsive-css"></a>
## 📄 `frontend/css/responsive.css`

```css
/* ===================================================
   TurfBook Lite - Responsive Styles (responsive.css)
   =================================================== */

@media (max-width: 900px) {
  .detail-layout {
    grid-template-columns: 1fr;
  }
  
  .booking-box {
    position: static;
  }

  .footer-grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 768px) {
  .hamburger {
    display: flex;
  }

  .nav-menu {
    position: absolute;
    top: 70px;
    left: 0;
    right: 0;
    background: var(--white);
    flex-direction: column;
    padding: 24px;
    gap: 18px;
    border-bottom: 1px solid var(--border);
    box-shadow: var(--shadow);
    display: none;
  }

  .nav-menu.open {
    display: flex;
  }

  .filter-grid {
    grid-template-columns: 1fr;
  }

  .turfs-grid {
    grid-template-columns: 1fr;
  }

  .form-grid-2 {
    grid-template-columns: 1fr;
  }

  .stats-grid {
    grid-template-columns: 1fr;
  }

  .owner-turf-card {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }

  .owner-turf-actions {
    width: 100%;
    justify-content: flex-end;
  }

  .booking-card {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }

  .booking-card-right {
    width: 100%;
    justify-content: space-between;
  }

  .footer-grid {
    grid-template-columns: 1fr;
    gap: 24px;
  }

  .success-actions {
    flex-direction: column;
  }
}
```

---


<a id="file-frontend-js-api-js"></a>
## 📄 `frontend/js/api.js`

```javascript
// ===================================================
// Central API Client (api.js)
// ===================================================
// Standardizes fetch requests to the Express backend.
// Automatically attaches JWT token and provides uniform error handling.

const API_BASE = '/api';

const api = {
  // Token storage helpers
  getToken() {
    return localStorage.getItem('turfbook_token');
  },
  setToken(token) {
    localStorage.setItem('turfbook_token', token);
  },
  removeToken() {
    localStorage.removeItem('turfbook_token');
  },

  // User storage helpers
  getUser() {
    const userStr = localStorage.getItem('turfbook_user');
    try {
      return userStr ? JSON.parse(userStr) : null;
    } catch {
      return null;
    }
  },
  setUser(user) {
    localStorage.setItem('turfbook_user', JSON.stringify(user));
  },
  removeUser() {
    localStorage.removeItem('turfbook_user');
  },

  // Request dispatcher
  async request(endpoint, options = {}) {
    const url = `${API_BASE}${endpoint}`;
    const headers = {
      'Content-Type': 'application/json',
      ...options.headers
    };

    const token = this.getToken();
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    try {
      const response = await fetch(url, {
        ...options,
        headers
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong. Please try again.');
      }

      return data;
    } catch (error) {
      console.error(`API Error [${endpoint}]:`, error.message);
      throw error;
    }
  },

  // HTTP Verb Shortcuts
  get(endpoint) {
    return this.request(endpoint, { method: 'GET' });
  },

  post(endpoint, body) {
    return this.request(endpoint, {
      method: 'POST',
      body: JSON.stringify(body)
    });
  },

  put(endpoint, body) {
    return this.request(endpoint, {
      method: 'PUT',
      body: JSON.stringify(body)
    });
  },

  delete(endpoint) {
    return this.request(endpoint, { method: 'DELETE' });
  }
};
```

---


<a id="file-frontend-js-auth-js"></a>
## 📄 `frontend/js/auth.js`

```javascript
// ===================================================
// Authentication Logic (auth.js)
// ===================================================
// Handles login, registration, logout, and access protection.

const auth = {
  // Login action
  async login(email, password) {
    const res = await api.post('/auth/login', { email, password });
    if (res.success && res.data) {
      api.setToken(res.data.token);
      api.setUser(res.data.user);
      return res.data.user;
    }
  },

  // Register action
  async register(formData) {
    const res = await api.post('/auth/register', formData);
    if (res.success && res.data) {
      api.setToken(res.data.token);
      api.setUser(res.data.user);
      return res.data.user;
    }
  },

  // Logout action
  logout() {
    api.removeToken();
    api.removeUser();
    window.location.href = '/index.html';
  },

  // Check current session against route requirements
  requireAuth(requiredRole = null) {
    const token = api.getToken();
    const user = api.getUser();

    if (!token || !user) {
      // Redirect unauthenticated user to login
      window.location.href = '/login.html?redirect=' + encodeURIComponent(window.location.pathname);
      return null;
    }

    if (requiredRole && user.role !== requiredRole) {
      alert("You don't have permission to access this page.");
      window.location.href = user.role === 'owner' ? '/owner-dashboard.html' : '/turfs.html';
      return null;
    }

    return user;
  }
};

// Form listeners for Login page
document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('login-form');
  if (loginForm) {
    loginForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const alertBox = document.getElementById('auth-alert');
      const submitBtn = loginForm.querySelector('button[type=\"submit\"]');

      const email = document.getElementById('email').value.trim();
      const password = document.getElementById('password').value;

      alertBox.style.display = 'none';
      submitBtn.disabled = true;
      submitBtn.textContent = 'Logging in...';

      try {
        const user = await auth.login(email, password);
        // Redirect based on role
        if (user.role === 'owner') {
          window.location.href = '/owner-dashboard.html';
        } else {
          const params = new URLSearchParams(window.location.search);
          const redirect = params.get('redirect');
          window.location.href = redirect || '/turfs.html';
        }
      } catch (error) {
        alertBox.textContent = error.message;
        alertBox.className = 'alert alert-error';
        alertBox.style.display = 'block';
      } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Login';
      }
    });
  }

  // Form listeners for Register page
  const registerForm = document.getElementById('register-form');
  if (registerForm) {
    registerForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const alertBox = document.getElementById('auth-alert');
      const submitBtn = registerForm.querySelector('button[type=\"submit\"]');

      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const phone = document.getElementById('phone').value.trim();
      const role = document.getElementById('role').value;
      const password = document.getElementById('password').value;
      const confirmPassword = document.getElementById('confirmPassword').value;

      alertBox.style.display = 'none';

      // Validation
      if (password !== confirmPassword) {
        alertBox.textContent = 'Passwords do not match.';
        alertBox.className = 'alert alert-error';
        alertBox.style.display = 'block';
        return;
      }

      submitBtn.disabled = true;
      submitBtn.textContent = 'Creating account...';

      try {
        const user = await auth.register({ name, email, phone, role, password });
        if (user.role === 'owner') {
          window.location.href = '/owner-dashboard.html';
        } else {
          window.location.href = '/turfs.html';
        }
      } catch (error) {
        alertBox.textContent = error.message;
        alertBox.className = 'alert alert-error';
        alertBox.style.display = 'block';
      } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Register';
      }
    });
  }
});
```

---


<a id="file-frontend-js-main-js"></a>
## 📄 `frontend/js/main.js`

```javascript
// ===================================================
// Main App & Navigation Controller (main.js)
// ===================================================
// Initializes common UI elements: dynamic navbar, mobile menu,
// and the reusable confirmation modal across all pages.

document.addEventListener('DOMContentLoaded', () => {
  setupNavbar();
  setupModal();
});

// Setup dynamic navigation depending on login state & role
function setupNavbar() {
  const navContainer = document.querySelector('.nav-container');
  if (!navContainer) return;

  const user = api.getUser();
  const currentPath = window.location.pathname;

  let menuHtml = '';
  let actionsHtml = '';

  if (!user) {
    // 1. Logged-out Navigation
    menuHtml = `
      <ul class="nav-menu">
        <li><a href="/index.html" class="nav-link ${currentPath.includes('index') || currentPath === '/' ? 'active' : ''}">Home</a></li>
        <li><a href="/turfs.html" class="nav-link ${currentPath.includes('turf') ? 'active' : ''}">Find Turfs</a></li>
        <li><a href="/index.html#how-it-works" class="nav-link">How It Works</a></li>
      </ul>
    `;
    actionsHtml = `
      <div class="nav-actions">
        <a href="/login.html" class="btn btn-secondary btn-sm">Login</a>
        <a href="/register.html" class="btn btn-primary btn-sm">Register</a>
        <div class="hamburger" id="hamburger-btn">
          <span></span><span></span><span></span>
        </div>
      </div>
    `;
  } else if (user.role === 'player') {
    // 2. Player Navigation
    menuHtml = `
      <ul class="nav-menu">
        <li><a href="/index.html" class="nav-link ${currentPath.includes('index') || currentPath === '/' ? 'active' : ''}">Home</a></li>
        <li><a href="/turfs.html" class="nav-link ${currentPath.includes('turfs.html') || currentPath.includes('turf-details') ? 'active' : ''}">Find Turfs</a></li>
        <li><a href="/my-bookings.html" class="nav-link ${currentPath.includes('booking') ? 'active' : ''}">My Bookings</a></li>
      </ul>
    `;
    actionsHtml = `
      <div class="nav-actions">
        <span class="nav-user">${escapeHtml(user.name)}</span>
        <button id="logout-btn" class="btn btn-secondary btn-sm">Logout</button>
        <div class="hamburger" id="hamburger-btn">
          <span></span><span></span><span></span>
        </div>
      </div>
    `;
  } else if (user.role === 'owner') {
    // 3. Turf Owner Navigation
    menuHtml = `
      <ul class="nav-menu">
        <li><a href="/owner-dashboard.html" class="nav-link ${currentPath.includes('dashboard') ? 'active' : ''}">Dashboard</a></li>
        <li><a href="/owner-dashboard.html#my-turfs" class="nav-link">My Turfs</a></li>
        <li><a href="/owner-dashboard.html#owner-bookings" class="nav-link">Bookings</a></li>
      </ul>
    `;
    actionsHtml = `
      <div class="nav-actions">
        <span class="nav-user">${escapeHtml(user.name)} (Owner)</span>
        <button id="logout-btn" class="btn btn-secondary btn-sm">Logout</button>
        <div class="hamburger" id="hamburger-btn">
          <span></span><span></span><span></span>
        </div>
      </div>
    `;
  }

  navContainer.innerHTML = `
    <a href="/index.html" class="nav-brand">
      <span class="brand-dot"></span> TurfBook
    </a>
    ${menuHtml}
    ${actionsHtml}
  `;

  // Attach logout handler
  const logoutBtn = document.getElementById('logout-btn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      auth.logout();
    });
  }

  // Attach mobile menu toggle
  const hamburger = document.getElementById('hamburger-btn');
  const menu = document.querySelector('.nav-menu');
  if (hamburger && menu) {
    hamburger.addEventListener('click', () => {
      menu.classList.toggle('open');
    });
  }
}

// Reusable Confirmation Modal
let modalConfirmCallback = null;

function setupModal() {
  let modalEl = document.getElementById('global-modal');
  if (!modalEl) {
    modalEl = document.createElement('div');
    modalEl.id = 'global-modal';
    modalEl.className = 'modal-backdrop';
    modalEl.innerHTML = `
      <div class="modal-dialog">
        <h3 class="modal-title" id="modal-title">Confirm Action</h3>
        <p class="modal-message" id="modal-message">Are you sure you want to proceed?</p>
        <div class="modal-actions">
          <button type="button" class="btn btn-secondary btn-sm" id="modal-cancel-btn">Cancel</button>
          <button type="button" class="btn btn-danger btn-sm" id="modal-confirm-btn">Confirm</button>
        </div>
      </div>
    `;
    document.body.appendChild(modalEl);

    document.getElementById('modal-cancel-btn').addEventListener('click', closeModal);
    modalEl.addEventListener('click', (e) => {
      if (e.target === modalEl) closeModal();
    });

    document.getElementById('modal-confirm-btn').addEventListener('click', () => {
      if (modalConfirmCallback) {
        modalConfirmCallback();
      }
      closeModal();
    });
  }
}

function showConfirmModal({ title, message, confirmText = 'Confirm', isDanger = true, onConfirm }) {
  const modalEl = document.getElementById('global-modal');
  if (!modalEl) return;

  document.getElementById('modal-title').textContent = title;
  document.getElementById('modal-message').textContent = message;

  const confirmBtn = document.getElementById('modal-confirm-btn');
  confirmBtn.textContent = confirmText;
  confirmBtn.className = isDanger ? 'btn btn-danger btn-sm' : 'btn btn-primary btn-sm';

  modalConfirmCallback = onConfirm;
  modalEl.classList.add('open');
}

function closeModal() {
  const modalEl = document.getElementById('global-modal');
  if (modalEl) modalEl.classList.remove('open');
  modalConfirmCallback = null;
}

// Utility: Escape HTML to prevent XSS
function escapeHtml(str) {
  if (!str) return '';
  return str.toString()
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// Utility: Format currency (e.g. ₹800)
function formatCurrency(amount) {
  return '₹' + Number(amount).toLocaleString('en-IN');
}
```

---


<a id="file-frontend-js-turfs-js"></a>
## 📄 `frontend/js/turfs.js`

```javascript
// ===================================================
// Turf Discovery & Filtering Logic (turfs.js)
// ===================================================
// Fetches, filters, and renders turf cards on turfs.html and index.html.

document.addEventListener('DOMContentLoaded', () => {
  const turfsContainer = document.getElementById('turfs-list');
  if (!turfsContainer) return;

  // Read URL query parameters (e.g. from homepage sport click or search)
  const urlParams = new URLSearchParams(window.location.search);
  const initialSport = urlParams.get('sport');
  const initialSearch = urlParams.get('search');

  if (initialSport && document.getElementById('filter-sport')) {
    document.getElementById('filter-sport').value = initialSport;
  }
  if (initialSearch && document.getElementById('search-input')) {
    document.getElementById('search-input').value = initialSearch;
  }

  // Initial load
  fetchAndRenderTurfs();

  // Search & Filter event listeners
  const filterForm = document.getElementById('filter-form');
  if (filterForm) {
    filterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      fetchAndRenderTurfs();
    });

    const clearBtn = document.getElementById('clear-filters-btn');
    if (clearBtn) {
      clearBtn.addEventListener('click', () => {
        filterForm.reset();
        fetchAndRenderTurfs();
      });
    }
  }
});

async function fetchAndRenderTurfs() {
  const container = document.getElementById('turfs-list');
  if (!container) return;

  container.innerHTML = '<div class="empty-state"><p>Loading turfs...</p></div>';

  // Gather filter values
  const search = document.getElementById('search-input')?.value.trim() || '';
  const sport = document.getElementById('filter-sport')?.value || '';
  const city = document.getElementById('filter-city')?.value || '';
  const maxPrice = document.getElementById('filter-price')?.value || '';

  // Build query string
  const params = new URLSearchParams();
  if (search) params.append('search', search);
  if (sport && sport !== 'All') params.append('sport', sport);
  if (city && city !== 'All') params.append('city', city);
  if (maxPrice) params.append('maxPrice', maxPrice);

  try {
    const res = await api.get('/turfs?' + params.toString());
    const turfs = res.data;

    if (!turfs || turfs.length === 0) {
      container.innerHTML = `
        <div class="empty-state" style="grid-column: 1 / -1;">
          <span class="empty-state-icon">🏟️</span>
          <h3>No turfs found</h3>
          <p>We couldn't find a turf matching your search. Try changing your search or filters.</p>
          <button class="btn btn-primary btn-sm" onclick="resetAndReloadTurfs()">Clear Filters</button>
        </div>
      `;
      return;
    }

    container.innerHTML = turfs.map((turf) => renderTurfCard(turf)).join('');
  } catch (error) {
    container.innerHTML = `
      <div class="empty-state" style="grid-column: 1 / -1;">
        <h3>Unable to load turfs</h3>
        <p>Something went wrong while connecting to the server. Please try again.</p>
        <button class="btn btn-secondary btn-sm" onclick="fetchAndRenderTurfs()">Try Again</button>
      </div>
    `;
  }
}

function renderTurfCard(turf) {
  const fallbackImg = 'https://images.unsplash.com/photo-1529900748604-07564a03e7a6?auto=format&fit=crop&w=800&q=80';
  return `
    <div class="turf-card">
      <div class="turf-image-wrapper">
        <img 
          src="${escapeHtml(turf.image || fallbackImg)}" 
          alt="${escapeHtml(turf.name)}"
          onerror="this.src='${fallbackImg}'"
          loading="lazy">
        <span class="turf-badge">${escapeHtml(turf.sport)}</span>
      </div>
      <div class="turf-body">
        <h3 class="turf-title">${escapeHtml(turf.name)}</h3>
        <p class="turf-location">
          <span>📍</span> ${escapeHtml(turf.area)}, ${escapeHtml(turf.city)}
        </p>
        <div class="turf-footer">
          <div class="turf-price">${formatCurrency(turf.pricePerHour)} <span>/ hour</span></div>
          <a href="/turf-details.html?id=${turf._id}" class="btn btn-outline btn-sm">View Details</a>
        </div>
      </div>
    </div>
  `;
}

function resetAndReloadTurfs() {
  const filterForm = document.getElementById('filter-form');
  if (filterForm) filterForm.reset();
  fetchAndRenderTurfs();
}
```

---


<a id="file-frontend-js-turf-details-js"></a>
## 📄 `frontend/js/turf-details.js`

```javascript
// ===================================================
// Turf Details & Slot Selection Logic (turf-details.js)
// ===================================================
// Generates hourly operational slots (06:00 AM - 10:00 PM),
// checks backend availability, and handles slot selection.

let currentTurf = null;
let selectedSlot = null;

document.addEventListener('DOMContentLoaded', async () => {
  const urlParams = new URLSearchParams(window.location.search);
  const turfId = urlParams.get('id');

  if (!turfId) {
    window.location.href = '/turfs.html';
    return;
  }

  // Setup Date picker default (Today) and min constraint
  const dateInput = document.getElementById('booking-date');
  const today = new Date().toISOString().split('T')[0];
  if (dateInput) {
    dateInput.min = today;
    dateInput.value = today;
    dateInput.addEventListener('change', () => {
      selectedSlot = null;
      updateBookButtonState();
      loadSlotAvailability(turfId, dateInput.value);
    });
  }

  // Load Turf details
  await loadTurfDetails(turfId);
  if (dateInput) {
    await loadSlotAvailability(turfId, dateInput.value);
  }

  // Book button click listener
  const bookBtn = document.getElementById('proceed-book-btn');
  if (bookBtn) {
    bookBtn.addEventListener('click', handleProceedToBooking);
  }
});

async function loadTurfDetails(turfId) {
  try {
    const res = await api.get('/turfs/' + turfId);
    currentTurf = res.data;

    // Render details
    document.title = `${currentTurf.name} — TurfBook Lite`;
    document.getElementById('turf-name').textContent = currentTurf.name;
    document.getElementById('turf-location').textContent = `📍 ${currentTurf.address}, ${currentTurf.area}, ${currentTurf.city}`;
    document.getElementById('turf-sport').textContent = currentTurf.sport;
    document.getElementById('turf-price').textContent = formatCurrency(currentTurf.pricePerHour);
    document.getElementById('turf-desc').textContent = currentTurf.description;

    const bannerImg = document.getElementById('turf-banner-img');
    if (bannerImg) {
      bannerImg.src = currentTurf.image || 'https://images.unsplash.com/photo-1529900748604-07564a03e7a6?auto=format&fit=crop&w=800&q=80';
      bannerImg.alt = `${currentTurf.name} sports turf`;
    }

    // Facilities list
    const facContainer = document.getElementById('facilities-list');
    if (facContainer) {
      if (currentTurf.facilities && currentTurf.facilities.length > 0) {
        facContainer.innerHTML = currentTurf.facilities
          .map((f) => `<div class="facility-item"><span class="facility-check">✓</span> ${escapeHtml(f)}</div>`)
          .join('');
      } else {
        facContainer.innerHTML = '<p class="text-muted">Standard sports facilities available.</p>';
      }
    }
  } catch (error) {
    alert('Unable to load turf details. Returning to turf listing.');
    window.location.href = '/turfs.html';
  }
}

// Generate operational slots from 06:00 to 22:00 (16 hourly slots)
function generateOperatingSlots() {
  const slots = [];
  for (let hour = 6; hour < 22; hour++) {
    const startHourStr = hour < 10 ? '0' + hour : '' + hour;
    const endHour = hour + 1;
    const endHourStr = endHour < 10 ? '0' + endHour : '' + endHour;

    // 12-hour format label
    const format12 = (h) => {
      const period = h >= 12 ? 'PM' : 'AM';
      const h12 = h % 12 === 0 ? 12 : h % 12;
      return `${h12 < 10 ? '0' + h12 : h12}:00 ${period}`;
    };

    slots.push({
      startTime: `${startHourStr}:00`,
      endTime: `${endHourStr}:00`,
      displayTime: `${format12(hour)} – ${format12(endHour)}`
    });
  }
  return slots;
}

async function loadSlotAvailability(turfId, date) {
  const container = document.getElementById('slots-grid');
  if (!container) return;

  container.innerHTML = '<p style="grid-column: 1 / -1; text-align: center; color: var(--muted); font-size: 0.85rem;">Checking available slots...</p>';

  try {
    const res = await api.get(`/bookings/availability?turfId=${turfId}&date=${date}`);
    const bookedSlots = res.data.bookedSlots || []; // e.g. ["18:00", "19:00"]

    const allSlots = generateOperatingSlots();
    const now = new Date();
    const isToday = date === now.toISOString().split('T')[0];

    container.innerHTML = '';

    allSlots.forEach((slot) => {
      // Check if slot has already passed today
      let isPast = false;
      if (isToday) {
        const slotDate = new Date(`${date}T${slot.startTime}:00`);
        if (slotDate <= now) {
          isPast = true;
        }
      }

      const isBooked = bookedSlots.includes(slot.startTime) || isPast;

      const slotEl = document.createElement('div');
      slotEl.className = `slot-pill ${isBooked ? 'booked' : ''}`;
      slotEl.innerHTML = `
        <span class="slot-time">${slot.displayTime}</span>
        <span class="slot-status">${isBooked ? 'Booked' : 'Available'}</span>
      `;

      if (!isBooked) {
        slotEl.addEventListener('click', () => {
          document.querySelectorAll('.slot-pill').forEach((el) => el.classList.remove('selected'));
          slotEl.classList.add('selected');
          selectedSlot = slot;
          updateBookButtonState();
        });
      }

      container.appendChild(slotEl);
    });
  } catch (error) {
    container.innerHTML = '<p style="grid-column: 1 / -1; color: var(--error); font-size: 0.85rem;">Unable to load time slots.</p>';
  }
}

function updateBookButtonState() {
  const bookBtn = document.getElementById('proceed-book-btn');
  if (!bookBtn) return;
  if (selectedSlot) {
    bookBtn.disabled = false;
    bookBtn.textContent = 'Book Selected Slot';
  } else {
    bookBtn.disabled = true;
    bookBtn.textContent = 'Select a Time Slot';
  }
}

function handleProceedToBooking() {
  if (!selectedSlot || !currentTurf) return;

  const user = api.getUser();
  if (!user) {
    // Redirect to login with return path
    const returnUrl = encodeURIComponent(window.location.href);
    window.location.href = `/login.html?redirect=${returnUrl}`;
    return;
  }

  if (user.role === 'owner') {
    alert('Turf owners cannot book turfs. Please login with a Player account.');
    return;
  }

  const dateInput = document.getElementById('booking-date');
  const date = dateInput.value;

  // Redirect to booking summary
  const params = new URLSearchParams({
    turfId: currentTurf._id,
    date: date,
    startTime: selectedSlot.startTime,
    endTime: selectedSlot.endTime,
    displayTime: selectedSlot.displayTime
  });

  window.location.href = `/booking.html?${params.toString()}`;
}
```

---


<a id="file-frontend-js-booking-js"></a>
## 📄 `frontend/js/booking.js`

```javascript
// ===================================================
// Booking Process & Confirmation (booking.js)
// ===================================================
// Verifies slot, creates booking record, and renders confirmation screen.

document.addEventListener('DOMContentLoaded', async () => {
  const summaryCard = document.getElementById('booking-summary-card');
  if (!summaryCard) return;

  // Ensure user is authenticated as player
  const user = auth.requireAuth('player');
  if (!user) return;

  const params = new URLSearchParams(window.location.search);
  const turfId = params.get('turfId');
  const date = params.get('date');
  const startTime = params.get('startTime');
  const endTime = params.get('endTime');
  const displayTime = params.get('displayTime');

  if (!turfId || !date || !startTime || !endTime) {
    alert('Incomplete booking parameters. Please choose a turf and slot first.');
    window.location.href = '/turfs.html';
    return;
  }

  // Load turf information
  try {
    const res = await api.get('/turfs/' + turfId);
    const turf = res.data;

    // Display summary details
    document.getElementById('summary-turf').textContent = turf.name;
    document.getElementById('summary-sport').textContent = turf.sport;
    document.getElementById('summary-date').textContent = formatDateNice(date);
    document.getElementById('summary-time').textContent = displayTime || `${startTime} – ${endTime}`;
    document.getElementById('summary-price').textContent = formatCurrency(turf.pricePerHour);

    // Setup Confirm Booking button
    const confirmBtn = document.getElementById('confirm-booking-btn');
    confirmBtn.addEventListener('click', async () => {
      confirmBtn.disabled = true;
      confirmBtn.textContent = 'Confirming your booking...';
      const alertBox = document.getElementById('booking-alert');
      alertBox.style.display = 'none';

      try {
        const bookingRes = await api.post('/bookings', {
          turfId,
          date,
          startTime,
          endTime
        });

        // Booking successful! Display success view
        const booking = bookingRes.data;
        showBookingSuccess(booking, turf);
      } catch (error) {
        alertBox.textContent = error.message;
        alertBox.className = 'alert alert-error';
        alertBox.style.display = 'block';
        confirmBtn.disabled = false;
        confirmBtn.textContent = 'Confirm Booking';
      }
    });
  } catch (error) {
    alert('Unable to load booking details.');
    window.location.href = '/turfs.html';
  }
});

function showBookingSuccess(booking, turf) {
  document.getElementById('booking-summary-card').style.display = 'none';

  const successCard = document.getElementById('booking-success-card');
  successCard.style.display = 'block';

  document.getElementById('success-turf-name').textContent = turf.name;
  document.getElementById('success-date-time').textContent = `${formatDateNice(booking.date)} (${booking.startTime} – ${booking.endTime})`;
  document.getElementById('success-price').textContent = formatCurrency(booking.price);
  document.getElementById('success-booking-id').textContent = booking.bookingId;
}

function formatDateNice(dateStr) {
  const d = new Date(dateStr + 'T00:00:00');
  return d.toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
}
```

---


<a id="file-frontend-js-my-bookings-js"></a>
## 📄 `frontend/js/my-bookings.js`

```javascript
// ===================================================
// My Bookings Management (my-bookings.js)
// ===================================================
// Displays logged-in player's reservations categorized into
// Upcoming, Completed, and Cancelled with cancellation support.

let allBookings = [];
let activeTab = 'upcoming';

document.addEventListener('DOMContentLoaded', async () => {
  const container = document.getElementById('my-bookings-container');
  if (!container) return;

  const user = auth.requireAuth('player');
  if (!user) return;

  setupTabs();
  await loadMyBookings();
});

function setupTabs() {
  const tabs = document.querySelectorAll('.tab-btn');
  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      tabs.forEach((t) => t.classList.remove('active'));
      tab.classList.add('active');
      activeTab = tab.dataset.tab;
      renderBookings();
    });
  });
}

async function loadMyBookings() {
  const container = document.getElementById('my-bookings-container');
  container.innerHTML = '<div class="empty-state"><p>Loading your bookings...</p></div>';

  try {
    const res = await api.get('/bookings/my');
    allBookings = res.data || [];
    renderBookings();
  } catch (error) {
    container.innerHTML = `
      <div class="empty-state">
        <h3>Unable to load bookings</h3>
        <p>${escapeHtml(error.message)}</p>
      </div>
    `;
  }
}

function renderBookings() {
  const container = document.getElementById('my-bookings-container');
  if (!container) return;

  const now = new Date();

  // Filter according to active tab
  const filtered = allBookings.filter((b) => {
    if (activeTab === 'cancelled') {
      return b.status === 'CANCELLED';
    }
    if (activeTab === 'completed') {
      return b.status === 'COMPLETED';
    }
    // upcoming: CONFIRMED and slot is not in the past
    if (activeTab === 'upcoming') {
      const slotEnd = new Date(`${b.date}T${b.endTime}:00`);
      return b.status === 'CONFIRMED' && slotEnd >= now;
    }
    return true;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <span class="empty-state-icon">🎟️</span>
        <h3>No bookings yet</h3>
        <p>You have no ${activeTab} turf bookings.</p>
        <a href="/turfs.html" class="btn btn-primary btn-sm">Find a Turf</a>
      </div>
    `;
    return;
  }

  container.innerHTML = `
    <div class="bookings-list">
      ${filtered.map((booking) => renderBookingItem(booking)).join('')}
    </div>
  `;

  // Attach cancellation handlers
  document.querySelectorAll('.cancel-booking-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const bookingId = btn.dataset.id;
      const turfName = btn.dataset.turf;

      showConfirmModal({
        title: 'Cancel Booking?',
        message: `Are you sure you want to cancel your booking for "${turfName}"?`,
        confirmText: 'Cancel Booking',
        isDanger: true,
        onConfirm: async () => {
          try {
            await api.put(`/bookings/${bookingId}/cancel`);
            await loadMyBookings();
          } catch (err) {
            alert(err.message);
          }
        }
      });
    });
  });
}

function renderBookingItem(b) {
  const turf = b.turfId || { name: 'Sports Turf', sport: 'Sport' };
  const badgeClass = b.status === 'CONFIRMED' 
    ? 'badge-confirmed' 
    : b.status === 'CANCELLED' 
    ? 'badge-cancelled' 
    : 'badge-completed';

  const isUpcoming = b.status === 'CONFIRMED';

  return `
    <div class="booking-card">
      <div class="booking-card-main">
        <h3>${escapeHtml(turf.name)}</h3>
        <div class="booking-card-meta">
          <span>⚽ ${escapeHtml(turf.sport)}</span>
          <span>📅 ${formatDateNice(b.date)}</span>
          <span>⏰ ${b.startTime} – ${b.endTime}</span>
          <span>🆔 ${escapeHtml(b.bookingId)}</span>
        </div>
      </div>
      <div class="booking-card-right">
        <div class="booking-card-price">${formatCurrency(b.price)}</div>
        <span class="badge ${badgeClass}">${b.status}</span>
        ${isUpcoming ? `
          <button 
            class="btn btn-danger btn-sm cancel-booking-btn" 
            data-id="${b._id}" 
            data-turf="${escapeHtml(turf.name)}">
            Cancel Booking
          </button>
        ` : ''}
      </div>
    </div>
  `;
}
```

---


<a id="file-frontend-js-owner-js"></a>
## 📄 `frontend/js/owner.js`

```javascript
// ===================================================
// Turf Owner Dashboard & Management Logic (owner.js)
// ===================================================
// Handles dashboard statistics, listing, adding, editing,
// and deleting turfs, plus viewing bookings for owner's turfs.

document.addEventListener('DOMContentLoaded', async () => {
  // Ensure logged-in user is an owner
  const user = auth.requireAuth('owner');
  if (!user) return;

  // Display owner name on dashboard
  const ownerNameEl = document.getElementById('owner-name');
  if (ownerNameEl) {
    ownerNameEl.textContent = user.name;
  }

  // 1. Dashboard View
  if (document.getElementById('owner-dashboard-view')) {
    await loadDashboardData();
  }

  // 2. Add Turf Form
  const addTurfForm = document.getElementById('add-turf-form');
  if (addTurfForm) {
    setupAddTurfForm(addTurfForm);
  }

  // 3. Edit Turf Form
  const editTurfForm = document.getElementById('edit-turf-form');
  if (editTurfForm) {
    setupEditTurfForm(editTurfForm);
  }
});

// Load Dashboard Metrics, Turfs, and Bookings
async function loadDashboardData() {
  try {
    const [turfsRes, bookingsRes] = await Promise.all([
      api.get('/owner/turfs'),
      api.get('/owner/bookings')
    ]);

    const turfs = turfsRes.data || [];
    const bookings = bookingsRes.data || [];

    // Summary counts
    document.getElementById('stat-turfs-count').textContent = turfs.length;
    document.getElementById('stat-bookings-count').textContent = bookings.length;

    // Render owner's turfs
    renderOwnerTurfs(turfs);

    // Render bookings for owner's turfs
    renderOwnerBookings(bookings);
  } catch (error) {
    console.error('Owner Dashboard Load Error:', error);
  }
}

function renderOwnerTurfs(turfs) {
  const container = document.getElementById('owner-turfs-container');
  if (!container) return;

  if (turfs.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <span class="empty-state-icon">🏟️</span>
        <h3>No turfs added yet</h3>
        <p>You haven't listed any sports turfs yet. Add your first turf to start receiving bookings.</p>
        <a href="/add-turf.html" class="btn btn-primary btn-sm">+ Add Your First Turf</a>
      </div>
    `;
    return;
  }

  container.innerHTML = turfs.map((turf) => `
    <div class="owner-turf-card">
      <div class="owner-turf-info">
        <h3>${escapeHtml(turf.name)}</h3>
        <p>⚽ ${escapeHtml(turf.sport)} • 📍 ${escapeHtml(turf.area)}, ${escapeHtml(turf.city)} • <strong>${formatCurrency(turf.pricePerHour)}/hr</strong></p>
      </div>
      <div class="owner-turf-actions">
        <a href="/edit-turf.html?id=${turf._id}" class="btn btn-secondary btn-sm">Edit</a>
        <button class="btn btn-danger btn-sm delete-turf-btn" data-id="${turf._id}" data-name="${escapeHtml(turf.name)}">Delete</button>
      </div>
    </div>
  `).join('');

  // Attach delete handlers
  document.querySelectorAll('.delete-turf-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.id;
      const name = btn.dataset.name;

      showConfirmModal({
        title: 'Delete Turf?',
        message: `Are you sure you want to delete "${name}"? All associated booking history will also be removed.`,
        confirmText: 'Delete Turf',
        isDanger: true,
        onConfirm: async () => {
          try {
            await api.delete('/turfs/' + id);
            await loadDashboardData();
          } catch (err) {
            alert(err.message);
          }
        }
      });
    });
  });
}

function renderOwnerBookings(bookings) {
  const container = document.getElementById('owner-bookings-container');
  if (!container) return;

  if (bookings.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <h3>No bookings yet</h3>
        <p>No player reservations have been made for your turfs yet.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = bookings.map((b) => {
    const player = b.userId || { name: 'Player', phone: '-' };
    const turf = b.turfId || { name: 'Turf' };
    const badgeClass = b.status === 'CONFIRMED' 
      ? 'badge-confirmed' 
      : b.status === 'CANCELLED' 
      ? 'badge-cancelled' 
      : 'badge-completed';

    return `
      <div class="owner-booking-card">
        <div>
          <h4>👤 ${escapeHtml(player.name)} <span style="font-weight: normal; color: var(--muted);">(${escapeHtml(player.phone)})</span></h4>
          <p style="color: var(--muted); font-size: 0.9rem; margin-top: 4px;">
            🏟️ <strong>${escapeHtml(turf.name)}</strong> • 📅 ${formatDateNice(b.date)} • ⏰ ${b.startTime} – ${b.endTime}
          </p>
        </div>
        <div style="text-align: right;">
          <div style="font-weight: 700; margin-bottom: 4px;">${formatCurrency(b.price)}</div>
          <span class="badge ${badgeClass}">${b.status}</span>
        </div>
      </div>
    `;
  }).join('');
}

// Add Turf Handler
function setupAddTurfForm(form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const alertBox = document.getElementById('owner-alert');
    const submitBtn = form.querySelector('button[type="submit"]');

    alertBox.style.display = 'none';

    // Collect facilities checkboxes
    const facilities = [];
    form.querySelectorAll('input[name="facilities"]:checked').forEach((cb) => {
      facilities.push(cb.value);
    });

    const payload = {
      name: document.getElementById('name').value.trim(),
      sport: document.getElementById('sport').value,
      city: document.getElementById('city').value.trim(),
      area: document.getElementById('area').value.trim(),
      address: document.getElementById('address').value.trim(),
      description: document.getElementById('description').value.trim(),
      pricePerHour: document.getElementById('pricePerHour').value,
      image: document.getElementById('image').value.trim(),
      facilities
    };

    submitBtn.disabled = true;
    submitBtn.textContent = 'Adding Turf...';

    try {
      await api.post('/turfs', payload);
      window.location.href = '/owner-dashboard.html';
    } catch (error) {
      alertBox.textContent = error.message;
      alertBox.className = 'alert alert-error';
      alertBox.style.display = 'block';
      submitBtn.disabled = false;
      submitBtn.textContent = 'Add Turf';
    }
  });
}

// Edit Turf Handler
async function setupEditTurfForm(form) {
  const urlParams = new URLSearchParams(window.location.search);
  const turfId = urlParams.get('id');

  if (!turfId) {
    window.location.href = '/owner-dashboard.html';
    return;
  }

  // Pre-fill existing data
  try {
    const res = await api.get('/turfs/' + turfId);
    const turf = res.data;

    document.getElementById('name').value = turf.name;
    document.getElementById('sport').value = turf.sport;
    document.getElementById('city').value = turf.city;
    document.getElementById('area').value = turf.area;
    document.getElementById('address').value = turf.address;
    document.getElementById('description').value = turf.description;
    document.getElementById('pricePerHour').value = turf.pricePerHour;
    document.getElementById('image').value = turf.image || '';

    // Check facilities checkboxes
    if (turf.facilities && Array.isArray(turf.facilities)) {
      form.querySelectorAll('input[name="facilities"]').forEach((cb) => {
        if (turf.facilities.includes(cb.value)) {
          cb.checked = true;
        }
      });
    }
  } catch (error) {
    alert('Unable to load turf data for editing.');
    window.location.href = '/owner-dashboard.html';
    return;
  }

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const alertBox = document.getElementById('owner-alert');
    const submitBtn = form.querySelector('button[type="submit"]');

    alertBox.style.display = 'none';

    const facilities = [];
    form.querySelectorAll('input[name="facilities"]:checked').forEach((cb) => {
      facilities.push(cb.value);
    });

    const payload = {
      name: document.getElementById('name').value.trim(),
      sport: document.getElementById('sport').value,
      city: document.getElementById('city').value.trim(),
      area: document.getElementById('area').value.trim(),
      address: document.getElementById('address').value.trim(),
      description: document.getElementById('description').value.trim(),
      pricePerHour: document.getElementById('pricePerHour').value,
      image: document.getElementById('image').value.trim(),
      facilities
    };

    submitBtn.disabled = true;
    submitBtn.textContent = 'Updating Turf...';

    try {
      await api.put('/turfs/' + turfId, payload);
      window.location.href = '/owner-dashboard.html';
    } catch (error) {
      alertBox.textContent = error.message;
      alertBox.className = 'alert alert-error';
      alertBox.style.display = 'block';
      submitBtn.disabled = false;
      submitBtn.textContent = 'Update Turf';
    }
  });
}
```

---
