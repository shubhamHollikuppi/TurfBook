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
