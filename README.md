# TurfBOOK 🏟️

> **Find Your Turf. Book Your Game.**

TurfBOOK is a full-stack web application designed to simplify sports turf discovery and hourly slot booking. Players can explore sports facilities, search for turfs, check available time slots, make reservations, and manage their bookings. Turf owners can manage their turf listings and view booking information through a dedicated dashboard.

Built using HTML5, CSS3, Vanilla JavaScript, Node.js, Express.js, MongoDB, and Mongoose, TurfBOOK focuses on practical full-stack development, understandable code, and a user-friendly booking experience.

This project is developed as a B.Tech Computer Science and Engineering academic and portfolio project. It is currently under development, with ongoing improvements to functionality, security, validation, and user experience.

![Uploading homepage.png.png…]()


---

## 🌟 Key Features

### 👤 Player Features

* User registration and login.
* Browse available sports turfs.
* Search and filter turfs by keywords, sport, city, and price.
* View turf details, facilities, pricing, and location information.
* Select a date and view hourly booking availability.
* Book available turf time slots.
* View booking history and reservation details.
* Cancel eligible upcoming bookings.

### 🏟️ Turf Owner Features

* Dedicated owner dashboard.
* Add new turf listings.
* Edit existing turf details and pricing.
* Delete owned turf listings.
* View turfs managed by the logged-in owner.
* View booking information for owned turfs.

### ⚙️ Application Features

* Role-based access for players and turf owners.
* Password hashing using bcryptjs.
* JWT-based authentication.
* MongoDB database integration.
* Backend validation and checks for existing confirmed bookings.
* Responsive layouts for different screen sizes.
* Modular frontend and backend code organization.

> **Note:** The behavior of each feature depends on the current implementation. Verify the relevant functionality before describing it as fully tested or production-ready.

---

## 🛠️ Technology Stack

| Layer                | Technology                                          |
| -------------------- | --------------------------------------------------- |
| Frontend             | HTML5, CSS3, Vanilla JavaScript (ES6+)              |
| Styling              | CSS Variables, Flexbox, CSS Grid, Responsive Design |
| Typography           | Inter (Google Fonts)                                |
| API Communication    | Fetch API, REST APIs                                |
| Backend              | Node.js, Express.js                                 |
| Database             | MongoDB                                             |
| Database Integration | Mongoose ODM                                        |
| Authentication       | JSON Web Tokens (JWT)                               |
| Password Security    | bcryptjs                                            |
| Development Tools    | Visual Studio Code, Git, GitHub                     |

### Design Approach

The application uses a consistent design system with reusable CSS variables, clear navigation, structured layouts, form controls, and responsive styling.

The frontend communicates with the Express backend through HTTP requests, while MongoDB stores application data such as users, turf listings, and bookings.

---

## 📂 Project Structure

```text
TurfBOOK/
│
├── frontend/
│   ├── index.html
│   ├── login.html
│   ├── register.html
│   ├── turfs.html
│   ├── turf-details.html
│   ├── booking.html
│   ├── my-bookings.html
│   ├── owner-dashboard.html
│   ├── add-turf.html
│   ├── edit-turf.html
│   │
│   ├── css/
│   │   ├── style.css
│   │   ├── auth.css
│   │   ├── turf.css
│   │   ├── booking.css
│   │   ├── owner.css
│   │   └── responsive.css
│   │
│   └── js/
│       ├── api.js
│       ├── auth.js
│       ├── main.js
│       ├── turfs.js
│       ├── turf-details.js
│       ├── booking.js
│       ├── my-bookings.js
│       └── owner.js
│
├── backend/
│   ├── config/
│   │   └── db.js
│   │
│   ├── middleware/
│   │   ├── authMiddleware.js
│   │   └── roleMiddleware.js
│   │
│   ├── models/
│   │   ├── User.js
│   │   ├── Turf.js
│   │   └── Booking.js
│   │
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── turfRoutes.js
│   │   ├── bookingRoutes.js
│   │   └── ownerRoutes.js
│   │
│   ├── package.json
│   ├── package-lock.json
│   ├── seed.js
│   └── server.js
│
├── .gitignore
├── README.md
├── package.json
├── package-lock.json
├── server.js
├── seed.js
├── seed.bat
├── start.bat
└── run_app.bat
```

*This structure reflects the files currently described for the project. Keep the documentation synchronized with the actual files in your repository. Local `.env` files are intentionally excluded.*

---

## 🗄️ Database Design

TurfBOOK uses MongoDB with Mongoose to define schemas, validate data, and manage database operations.

### 1. User Model

**File:** `backend/models/User.js`

The User model stores account information.

| Field       | Description                |
| ----------- | -------------------------- |
| `name`      | User's name                |
| `email`     | User's email address       |
| `phone`     | Contact number             |
| `password`  | Hashed password            |
| `role`      | Player or owner            |
| `createdAt` | Account creation timestamp |

### 2. Turf Model

**File:** `backend/models/Turf.js`

The Turf model stores information about sports facilities.

| Field          | Description                    |
| -------------- | ------------------------------ |
| `name`         | Turf or facility name          |
| `sport`        | Supported sport                |
| `city`         | City where the turf is located |
| `area`         | Locality or area               |
| `address`      | Facility address               |
| `description`  | Turf description               |
| `pricePerHour` | Hourly rental price            |
| `image`        | Image URL                      |
| `facilities`   | List of available amenities    |
| `ownerId`      | Reference to the turf owner    |
| `createdAt`    | Listing creation timestamp     |

### 3. Booking Model

**File:** `backend/models/Booking.js`

The Booking model stores reservation information.

| Field       | Description                  |
| ----------- | ---------------------------- |
| `userId`    | Reference to the player      |
| `turfId`    | Reference to the booked turf |
| `date`      | Reservation date             |
| `startTime` | Starting time of the slot    |
| `endTime`   | Ending time of the slot      |
| `price`     | Booking price                |
| `status`    | Booking status               |
| `bookingId` | Booking reference identifier |
| `createdAt` | Booking creation timestamp   |

The documented booking statuses are `CONFIRMED`, `CANCELLED`, and `COMPLETED`.

---

## 📡 REST API Reference

The frontend communicates with the backend through REST API endpoints.

### Authentication — `/api/auth`

| Method | Endpoint             | Purpose                             |
| ------ | -------------------- | ----------------------------------- |
| POST   | `/api/auth/register` | Register an account                 |
| POST   | `/api/auth/login`    | Authenticate a user                 |
| GET    | `/api/auth/me`       | Retrieve the current user's profile |

### Turf Management — `/api/turfs`

| Method | Endpoint         | Purpose                  |
| ------ | ---------------- | ------------------------ |
| GET    | `/api/turfs`     | Retrieve turf listings   |
| GET    | `/api/turfs/:id` | Retrieve a specific turf |
| POST   | `/api/turfs`     | Create a turf listing    |
| PUT    | `/api/turfs/:id` | Update a turf listing    |
| DELETE | `/api/turfs/:id` | Delete a turf listing    |

Turf creation and management operations are intended for authorized owners.

The listing endpoint supports the documented search and filter parameters: `search`, `sport`, `city`, and `maxPrice`.

### Booking Management — `/api/bookings`

| Method | Endpoint                     | Purpose                                |
| ------ | ---------------------------- | -------------------------------------- |
| GET    | `/api/bookings/availability` | Retrieve booked-slot information       |
| POST   | `/api/bookings`              | Create a booking                       |
| GET    | `/api/bookings/my`           | Retrieve the current player's bookings |
| PUT    | `/api/bookings/:id/cancel`   | Cancel an eligible booking             |

The availability endpoint uses `turfId` and `date` query parameters.

### Owner Management — `/api/owner`

| Method | Endpoint              | Purpose                             |
| ------ | --------------------- | ----------------------------------- |
| GET    | `/api/owner/turfs`    | Retrieve turfs managed by the owner |
| GET    | `/api/owner/bookings` | Retrieve bookings for owned turfs   |

> API availability, request parameters, authorization, and response formats should be verified against the current backend implementation.

---

## 🔐 Authentication and Security

TurfBOOK uses JSON Web Tokens for authentication and bcryptjs for password hashing.

The intended authentication flow is:

1. A user registers with the required account details.
2. The backend validates the registration data and stores the password as a hash.
3. During login, the backend verifies the submitted password.
4. On successful authentication, the server issues a JWT.
5. The frontend includes the token in the `Authorization` header when calling protected API endpoints.
6. Authentication and role middleware help restrict access to protected operations.

### Important Security Considerations

* Keep secrets and database credentials in environment variables.
* Never commit a real `.env` file to GitHub.
* Use a strong, randomly generated JWT secret.
* Validate and authorize every sensitive backend operation.
* Verify that owners can only modify turfs they own.
* Validate booking dates, time slots, and booking conflicts on the server.
* Test simultaneous booking requests before claiming that double-booking is impossible.

A database check before creating a booking can prevent ordinary duplicate requests, but it does not by itself guarantee protection against simultaneous conflicting requests.

---

## 🚀 Installation and Setup

Follow these instructions to run TurfBOOK locally.

### Prerequisites

Install the following software:

* [Node.js](https://nodejs.org/) — use a supported LTS release.
* [MongoDB Community Server](https://www.mongodb.com/try/download/community) or a MongoDB Atlas database.
* [Visual Studio Code](https://code.visualstudio.com/).
* [Git](https://git-scm.com/).

### 1. Clone the Repository

Open a terminal and run:

```bash
git clone https://github.com/shubhamHollikuppi/TurfBook.git
cd TurfBook
```

### 2. Install Backend Dependencies

```bash
cd backend
npm install
```

### 3. Configure Environment Variables

Create a local file named `.env` inside the `backend/` directory.

Add the following configuration:

```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/turfbook_lite
JWT_SECRET=replace_with_a_long_random_secret
```

Replace the JWT placeholder with a strong, randomly generated secret.

For a local MongoDB setup, ensure the MongoDB service is running. Alternatively, set `MONGO_URI` to your MongoDB Atlas connection string.

**Never upload your real `.env` file or database credentials to GitHub.**

### 4. Seed the Database

If the project's seed script is configured to populate demo data, run:

```bash
npm run seed
```

This may create sample users, turf listings, and bookings, depending on the current seed script.

Only run the seeding command against a development database. Review the script before running it because seeding may create, update, or delete records.

### 5. Start the Application

From the `backend/` directory, run:

```bash
npm start
```

If the backend's `package.json` defines a development script, you may instead use:

```bash
npm run dev
```

Use the script names actually defined in your `backend/package.json`.

### 6. Open the Application

Visit the following URL in your browser:

```text
http://localhost:5000
```

If the application uses port `5000` and the backend successfully starts, the homepage should load.

---

## 🧪 Testing Checklist

Before considering the project complete, test the following scenarios.

### Player

* [ ] Register a new player account.
* [ ] Log in and log out.
* [ ] Browse and filter turf listings.
* [ ] View turf details and available slots.
* [ ] Book an available time slot.
* [ ] View booking history.
* [ ] Cancel an eligible upcoming booking.

### Turf Owner

* [ ] Log in as an owner.
* [ ] Add a new turf.
* [ ] Edit an existing turf.
* [ ] Delete an owned turf.
* [ ] View bookings associated with owned turfs.
* [ ] Verify that one owner cannot modify another owner's turf.

### Booking Validation

* [ ] Reject a booking for an already booked slot.
* [ ] Reject invalid dates and unavailable time slots.
* [ ] Verify that cancelled bookings are handled correctly.
* [ ] Test two requests attempting to book the same slot simultaneously.
* [ ] Verify that unauthorized users cannot perform protected operations.

### General

* [ ] Test the interface on desktop and mobile-sized screens.
* [ ] Check the browser console for JavaScript errors.
* [ ] Verify that the application handles database connection failures gracefully.

---

## 🎓 College Viva Preparation

### 1. What is TurfBOOK?

TurfBOOK is a full-stack sports turf booking application that connects players looking for sports facilities with owners managing turf listings.

### 2. Why did you use MongoDB?

MongoDB stores application data in documents. Mongoose provides schemas and a convenient way to interact with the database from Node.js.

### 3. What is Express.js used for?

Express.js handles HTTP requests, defines API routes, applies middleware, and connects frontend operations to backend logic.

### 4. How does authentication work?

The server verifies the user's credentials and issues a JWT after successful login. Protected requests include the token, which the backend verifies before granting access.

### 5. What is middleware?

Middleware is code that executes during the request-response cycle. In TurfBOOK, authentication and role middleware help protect restricted operations.

### 6. How is booking availability checked?

The application retrieves existing confirmed bookings for the selected turf and date. The backend checks for booking conflicts before accepting a new reservation.

A robust production implementation also needs appropriate protection against simultaneous requests attempting to reserve the same slot.

### 7. How are turf owners separated?

Each turf is associated with an owner identifier. The backend should verify both the user's role and ownership before allowing sensitive operations such as editing or deleting a turf.

### 8. What is the role of the frontend Fetch API?

The Fetch API allows browser JavaScript to send HTTP requests to backend endpoints and process their responses.

### 9. What improvements could be added in the future?

Possible improvements include stronger booking concurrency protection, automated tests, online payments, map integration, booking notifications, deployment, and enhanced owner analytics.

---

## 🔮 Future Enhancements

Potential future improvements include:

* Online payment integration.
* Interactive maps and navigation.
* Booking confirmation notifications.
* Turf ratings and reviews.
* Advanced search and availability filters.
* Automated tests for APIs and booking conflicts.
* Deployment to a cloud hosting platform.
* Improved accessibility and mobile experience.
* Enhanced analytics for turf owners.

These are proposed improvements and should not be considered existing features until implemented.

---

## 👨‍💻 Project Information

**Project Name:** TurfBOOK
**Project Type:** Full-Stack Web Application
**Domain:** Sports Facility Booking
**Purpose:** Academic learning and portfolio development
**Status:** Under Development

**Author:** Shubham Hollikuppi

---

## 📄 License

No license has been specified in this repository documentation. If you decide to distribute the project under the MIT License, add a `LICENSE` file containing the full MIT license text and your chosen copyright notice.
