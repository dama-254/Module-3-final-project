🌽 Track feed management
💉 Record vaccinations
💰 Monitor sales
📉 Track expenses
⚡ Fast state management with Redux Toolkit
🎨 Modern responsive UI using Tailwind CSS
🔄 CRUD operations using Axios
🗄 Mock backend powered by JSON Server
🛠 Tech Stack
Frontend
React
Vite
Redux Toolkit
React Redux
Tailwind CSS
Backend
JSON Server
API Handling
Axios
📁 Project Structure
Bash
poultry-farm-system/
│
├── public/
│
├── src/
│   │
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Sidebar.jsx
│   │   ├── PoultryCard.jsx
│   │   ├── FeedCard.jsx
│   │   ├── SalesCard.jsx
│   │   ├── ExpenseCard.jsx
│   │   ├── VaccineCard.jsx
│   │   ├── EggStats.jsx
│   │   ├── SearchBar.jsx
│   │   └── LoadingSpinner.jsx
│   │
│   ├── forms/
│   │   ├── BatchForm.jsx
│   │   ├── FeedForm.jsx
│   │   ├── SalesForm.jsx
│   │   ├── ExpenseForm.jsx
│   │   └── VaccinationForm.jsx
│   │
│   ├── pages/
│   │   ├── Dashboard.jsx
│   │   ├── Batches.jsx
│   │   ├── FeedManagement.jsx
│   │   ├── Vaccinations.jsx
│   │   ├── Sales.jsx
│   │   └── Expenses.jsx
│   │
│   ├── redux/
│   │   ├── store.js
│   │   ├── poultrySlice.js
│   │   ├── salesSlice.js
│   │   ├── expenseSlice.js
│   │   └── vaccinationSlice.js
│   │
│   ├── services/
│   │   ├── api.js
│   │   ├── batchApi.js
│   │   ├── salesApi.js
│   │   ├── expenseApi.js
│   │   ├── vaccinationApi.js
│   │   └── feedApi.js
│   │
│   ├── styles/
│   │   ├── index.css
│   │   ├── forms.css
│   │   ├── cards.css
│   │   └── layout.css
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── db.json
├── package.json
├── vite.config.js
├── README.md
└── .gitignore
⚙️ Installation
1. Clone the Repository
Bash
git clone <repository-url>
2. Navigate into the Project
Bash
cd poultry-farm-system
3. Install Dependencies
Bash
npm install
🎨 Tailwind CSS Setup
Install Tailwind CSS:
Bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
Configure tailwind.config.js
JavaScript
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {}
  },
  plugins: []
};
Add Tailwind to src/styles/index.css
CSS
@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  @apply bg-gray-100;
}
📦 Axios Setup
Install Axios:
Bash
npm install axios
🗄 JSON Server Setup
Install JSON Server:
Bash
npm install json-server
Create db.json
JSON
{
  "batches": [],
  "feeds": [],
  "sales": [],
  "expenses": [],
  "vaccinations": []
}
▶️ Running the Project
Start Frontend
Bash
npm run dev
Start Backend
Bash
npx json-server --watch db.json --port 5000
🌐 API Base URL
JavaScript
http://localhost:5000
📌 Example Batch Object
JSON
{
  "id": 1,
  "name": "Layer Batch A",
  "birds": 120,
  "age": 10
}
🧠 Redux State Management
Redux Toolkit is used for:
Fetching poultry batches
Adding new batches
Updating records
Deleting records
Managing global state
🎯 Core Functionalities
Feature
Description
Batch Management
Add and remove poultry batches
Feed Tracking
Monitor feed usage
Vaccinations
Track bird vaccinations
Sales Tracking
Record poultry sales
Expense Management
Track operational expenses
Dashboard
Overview of poultry farm operations
🔥 Future Improvements
📊 Analytics dashboard with charts
🔐 Authentication system
📱 Mobile responsive enhancements
🧾 Invoice and receipt generation
☁️ Deployment with Render or Firebase
🐣 Hatchery management
📈 Profit/Loss calculations
👨‍💻 Authors
Tracy
Damaris
Eugene
Elvis
📜 License
This project is licensed under the MIT License.
⭐ Support
If you like this project:
Star the repository
Fork the project
Contribute improvements
Share with others
