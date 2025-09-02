# Zerodha - Stock Trading Platform

This project includes:

* A **landing page** (frontend)
* An **authenticated trading dashboard** (dashboard)
* A **Node.js + Express backend** with MongoDB for persistence

Deployed on **Render** 

---

##  Project Structure

```
zerodha/
├── README.md
│
├── backend/                # Node.js + Express + MongoDB API
│   ├── index.js            # Entry point
│   ├── package.json
│   ├── models/             # Mongoose models
│   │   ├── HoldingsModel.js
│   │   ├── OrdersModel.js
│   │   └── PositionsModel.js
│   ├── schemas/            # Mongoose schemas
│   │   ├── HoldingsSchema.js
│   │   ├── OrdersSchema.js
│   │   └── PositionsSchema.js
│   └── .env                # Environment variables
│
├── dashboard/              # React (Vite) - User Trading Dashboard
│   ├── package.json
│   ├── vite.config.js
│   ├── public/
│   └── src/
│       ├── components/     # Trading components
│       │   ├── Dashboard.jsx
│       │   ├── Holdings.jsx
│       │   ├── Orders.jsx
│       │   ├── Positions.jsx
│       │   ├── Funds.jsx
│       │   ├── WatchList.jsx
│       │   ├── BuyWindow.jsx
│       │   ├── Menu.jsx
│       │   ├── TopBar.jsx
│       │   └── Summary.jsx
│       ├── data/
│       ├── App.jsx
│       └── main.jsx
│
├── frontend/               # React (Vite) - Public Landing Page
│   ├── package.json
│   ├── vite.config.js
│   ├── public/media/images/
│   └── src/landing_page/   # Landing page sections
│       ├── home/
│       ├── products/
│       ├── pricing/
│       ├── about/
│       ├── support/
│       ├── signup/
│       ├── Navbar.jsx
│       ├── Footer.jsx
│       └── NotFound.jsx
```

---

## 🛠 Tech Stack

**Frontend & Dashboard**

* React 18 (Vite)
* React Router v6
* Axios (API calls)
* Bootstrap 5 (styling)
* Chart.js + React-Chartjs-2 (graphs)

**Backend**

* Node.js (v18+)
* Express.js
* MongoDB + Mongoose
* dotenv (env variables)

**Deployment**

* Render (Static site + Web Service)

---

## ⚙️ Setup Instructions

### Clone the repository

```bash
git clone https://github.com/YOUR-USERNAME/Zerodha.git
cd Zerodha
```

---

###  Backend Setup (`/backend`)

```bash
cd backend
npm install
```

Create a `.env` file inside `/backend`:

```env
MONGO_URI=your-mongodb-connection-string
PORT=3002
```

Run locally:

```bash
npm start
```

---

###  Dashboard Setup (`/dashboard`)

```bash
cd dashboard
npm install
```

Create a `.env` file inside `/dashboard`:

```env
VITE_API_BASE_URL=http://localhost:3002
```

Run locally:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

---

###  Frontend Setup (`/frontend`)

```bash
cd frontend
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

---

## 🌐 Deployment on Render

We used **Render** for deployment:

### ✅ Backend (Web Service)

* **Root Directory** → `backend`
* **Build Command** → `npm install`
* **Start Command** → `npm start`
* App runs on: `https://zerodha-backend-xxxxx.onrender.com`


✅ **Landing Page** (similar to Zerodha)

* Hero section, Pricing, Products, Support, About, Signup

✅ **Dashboard**

* 📊 **Summary View**
* 📈 **Holdings** with real-time P\&L
* 📉 **Positions** table
* 🧾 **Orders** (executed & pending)
* 💰 **Funds management**
* 👀 **Watchlist with buy/sell buttons**
* Modern **Buy Window** (inspired by Zerodha UI)

✅ **Backend API**

* REST APIs for holdings, positions, orders
* MongoDB persistence

---

## 📡 API Endpoints

Base URL: `https://zerodha-backend-xxxxx.onrender.com`

| Method | Endpoint        | Description         |
| ------ | --------------- | ------------------- |
| GET    | `/allHoldings`  | Fetch all holdings  |
| GET    | `/allOrders`    | Fetch all orders    |
| GET    | `/allPositions` | Fetch all positions |
| POST   | `/createOrder`  | Create a new order  |


