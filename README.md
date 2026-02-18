# Crowdsourced Review Platform


A modern web platform for **collecting, displaying, and managing user reviews** for products, services, or experiences. Users can submit feedback, rate items, and interact with the community.

---

## Features

- User authentication and JWT-based authorization
- Submit, edit, delete reviews
- Rating system (1-5 stars)
- Search, filter, and sort reviews
- Admin dashboard to manage users and reviews
- Responsive UI built with Tailwind CSS
- RESTful API backend using Node.js and Express
- MongoDB database integration
- Future-ready for real-time updates

---


### Home Page

### Review Submission

### Admin Dashboard

---

## Tech Stack

- **Frontend:** React, Tailwind CSS, Vite
- **Backend:** Node.js, Express
- **Database:** MongoDB
- **Authentication:** JWT (JSON Web Tokens)

---

##  Folder Structure
```
backend/
├── config/
│   └── db.js           # MongoDB connection
├── controllers/        # Business logic
├── models/             # Mongoose schemas
├── routes/             # Express routes
├── middleware/         # Auth & error handling
└── index.js            # Entry point

frontend/
├── src/components/     # Reusable React components
├── src/pages/          # Page-level components
├── src/api/            # API request functions
├── src/App.jsx         # Root component
└── src/main.jsx        # Entry point




---

##  Installation

### Backend
```bash
cd backend
npm install


cd frontend
npm install
```



## Future Enhancements

- Real-time updates: WebSockets for live review updates

- Notifications: Notify users of replies or rating changes

- Analytics: Advanced admin analytics for trends & engagement

- Social Login: OAuth with Google, Facebook, etc.

---