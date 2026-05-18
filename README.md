# 🐔 PoultryPro — Smart Poultry Farm Management System

A React-based Single Page Application (SPA) for managing poultry farm operations. Built as a group project for Module 3 Final Project.

---

## 👥 Team Members & Roles

| Member | Role | Branch |
|--------|------|--------|
| Member 1 | Frontend UI & Routing Lead | `feature/ui-routing` |
| Member 2 | CRUD & Forms Lead | `feature/crud-forms` |
| Member 3 | Redux & State Management Lead | `feature/redux-state` |
| Member 4 | Backend/API & Deployment Lead | `feature/api-deployment` |

---

## 🌐 Live Links

- **Frontend (Vercel):** https://your-vercel-link.vercel.app
- **Backend (Render):** https://your-render-link.onrender.com
- **GitHub Repo:** https://github.com/dama-254/Module-3-final-project
- **Figma Design:** https://your-figma-link

---

## 📋 Project Overview

PoultryPro is a farm management dashboard that allows poultry farm owners and workers to:

- Track chicken batches and their health status
- Record and monitor feed usage and costs
- Log egg and chicken sales with revenue calculations
- Track farm expenses by category
- Manage vaccination schedules for all batches
- View a live dashboard with farm statistics
- Secure login with role-based access (Admin, Manager, Worker)

---

## 🛠️ Tech Stack

| Layer | Technology | Purpose |
|-------|-----------|---------|
| Frontend | React 18 + Vite | UI components and pages |
| Routing | React Router v6 | Client-side navigation |
| State Management | Redux Toolkit | Global state with async thunks |
| HTTP Client | Axios | API requests |
| Database | json-server + db.json | REST API simulation |
| Authentication | localStorage | Session management |
| Styling | Inline CSS | Dark green farm theme |
| Testing | Vitest + React Testing Library | Unit and component tests |
| Deployment | Vercel (frontend) + Render (backend) | Live hosting |

---

## 📁 Folder Structure

```
poultrypro/
├── db.json                    # Fake database (json-server)
├── package.json               # Project dependencies and scripts
├── vite.config.js             # Vite + Vitest configuration
├── public/                    # Static assets
└── src/
    ├── App.jsx                # Root component with all routes
    ├── main.jsx               # React entry point with Redux Provider
    ├── index.css              # Global styles
    ├── setupTests.js          # Vitest + jest-dom setup
    ├── components/
    │   ├── Navbar.jsx         # Top navigation bar with logout
    │   ├── Sidebar.jsx        # Left icon sidebar
    │   ├── PoultryCard.jsx    # Stats card for dashboard
    │   ├── SalesCard.jsx      # Sales record card
    │   ├── FeedCard.jsx       # Feed record card
    │   ├── ExpenseCard.jsx    # Expense record card
    │   ├── VaccineCard.jsx    # Vaccination record card
    │   ├── FormModal.jsx      # Reusable modal for add/edit forms
    │   ├── SearchBar.jsx      # Search input component
    │   ├── LoadingSpinner.jsx # Loading animation
    │   └── ProtectedRoute.jsx # Auth guard for protected pages
    ├── pages/
    │   ├── Login.jsx          # Login page with demo accounts
    │   ├── Dashboard.jsx      # Overview with stats cards
    │   ├── Batches.jsx        # Chicken batch management
    │   ├── FeedManagement.jsx # Feed records management
    │   ├── Sales.jsx          # Sales records management
    │   ├── Expenses.jsx       # Expense tracking
    │   └── Vaccination.jsx    # Vaccination records
    ├── redux/
    │   ├── store.js           # Redux store configuration
    │   ├── poultrySlice.js    # Batches state + async thunks
    │   ├── feedSlice.js       # Feed state + async thunks
    │   ├── salesSlice.js      # Sales state + async thunks
    │   ├── expenseSlice.js    # Expenses state + async thunks
    │   └── vaccinationSlice.js# Vaccinations state + async thunks
    ├── services/
    │   ├── api.js             # Base axios helper
    │   ├── batchApi.js        # Batch API calls
    │   ├── feedApi.js         # Feed API calls
    │   ├── salesApi.js        # Sales API calls
    │   ├── expenseApi.js      # Expense API calls
    │   └── vaccintionApi.js   # Vaccination API calls
    └── tests/
        ├── App.test.jsx       # Basic setup tests
        ├── Navbar.test.jsx    # Navbar component tests
        ├── sidebar.test.jsx   # Sidebar component tests
        ├── Batches.test.jsx   # Batch Redux slice tests
        ├── Dashboard.test.jsx # Dashboard page tests
        ├── sales.test.jsx     # Sales Redux slice tests
        └── api.test.js        # API service tests
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js v18 or higher
- npm v9 or higher
- Git

### Installation

**Step 1 — Clone the repository:**
```bash
git clone https://github.com/dama-254/Module-3-final-project.git
cd Module-3-final-project/poultrypro
```

**Step 2 — Install dependencies:**
```bash
npm install
```

**Step 3 — Start the backend server (Terminal 1):**
```bash
npm run server
```

Wait until you see:
```
JSON Server started on PORT :3001
Endpoints:
http://localhost:3001/batches
http://localhost:3001/sales
http://localhost:3001/feedRecords
```

**Step 4 — Start the frontend (Terminal 2):**
```bash
npm run dev
```

**Step 5 — Open in browser:**
```
http://localhost:5173
```

---

## 🔐 Login Credentials

| Username | Password | Role |
|----------|----------|------|
| admin | admin123 | Admin |
| manager | manager123 | Manager |
| worker | worker123 | Worker |

You can also click the demo buttons on the login page to log in instantly.

---

## 📡 API Endpoints

The backend runs on `http://localhost:3001` using json-server.

| Endpoint | Methods | Description |
|----------|---------|-------------|
| `/batches` | GET, POST, PATCH, DELETE | Chicken batch records |
| `/feedRecords` | GET, POST, PATCH, DELETE | Feed usage records |
| `/sales` | GET, POST, PATCH, DELETE | Sales records |
| `/expenses` | GET, POST, PATCH, DELETE | Expense records |
| `/vaccinations` | GET, POST, PATCH, DELETE | Vaccination records |

---

## ✅ Running Tests

```bash
npm test
```

Expected output:
```
Test Files  7 passed (7)
Tests       33 passed (33)
```

### Test Coverage

| Test File | What it tests |
|-----------|--------------|
| App.test.jsx | Basic Vitest setup |
| Navbar.test.jsx | Brand name, nav links render correctly |
| sidebar.test.jsx | Sidebar icons and tooltips |
| Batches.test.jsx | Redux slice — add, update, delete, fetch |
| Dashboard.test.jsx | Dashboard renders stats and batch overview |
| sales.test.jsx | Redux slice — add, update, delete, fetch |
| api.test.js | Axios GET, POST, PATCH, DELETE calls |

---

## 🔄 CRUD Operations

All four CRUD operations are implemented for every data type:

| Operation | HTTP Method | Example |
|-----------|------------|---------|
| **Create** | POST | Add new batch, sale, feed record |
| **Read** | GET | Load all records on page mount |
| **Update** | PATCH | Edit batch health, sale quantity |
| **Delete** | DELETE | Remove batch or record with confirmation |

---

## 🌿 Git Workflow

```bash
# Never push directly to main
# Each member works on their own branch

git checkout -b feature/your-feature
git add .
git commit -m "feat: describe what you did"
git push origin feature/your-feature

# Then open a Pull Request on GitHub to merge into main
```

### Commit Message Format
```
feat: add new feature
fix: fix a bug
test: add or update tests
docs: update documentation
style: styling changes
refactor: code restructure
```

---

## 🗂️ Database Structure (db.json)

```json
{
  "batches": [
    {
      "id": "1",
      "batchId": "B-001",
      "breed": "Rhode Island Red",
      "birds": 650,
      "ageWeeks": 24,
      "health": "Healthy",
      "layRate": 78,
      "dateAdded": "2026-01-15"
    }
  ],
  "feedRecords": [...],
  "sales": [...],
  "expenses": [...],
  "vaccinations": [...]
}
```

---

## 📦 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start frontend on http://localhost:5173 |
| `npm run server` | Start json-server on http://localhost:3001 |
| `npm test` | Run all tests with Vitest |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |

---

## 🚢 Deployment

### Frontend — Vercel
1. Go to [vercel.com](https://vercel.com)
2. Import your GitHub repository
3. Set framework to **Vite**
4. Click **Deploy**

### Backend — Render
1. Go to [render.com](https://render.com)
2. Create a new **Web Service**
3. Connect your GitHub repository
4. Set build command: `npm install`
5. Set start command: `npx json-server db.json --port 3001`
6. Copy the live URL and update `VITE_API_URL` in your Vercel environment variables

---

## 🏗️ Architecture

```
Browser
   │
   ▼
React App (Vite)
   │
   ├── React Router → Pages (Dashboard, Batches, Sales...)
   │
   ├── Redux Store → Slices (batches, feed, sales, expenses, vaccinations)
   │
   └── Axios → json-server REST API → db.json
```

---

## 📌 Submission Checklist

- [x] GitHub Repository with README
- [x] All tests passing (33 tests)
- [x] Full CRUD on all 5 data types
- [x] 6 client-side routes
- [x] Redux Toolkit state management
- [x] Login authentication with protected routes
- [x] Responsive dark-themed UI
- [ ] Figma design link
- [ ] Trello/Jira board screenshot
- [ ] Live Vercel deployment link
- [ ] Live Render backend link

---

## 📄 License

This project was built for educational purposes as part of the Module 3 Final Project.
