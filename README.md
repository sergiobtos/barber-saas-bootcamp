# 💈 BarberHub SaaS

A full-featured SaaS application built during the Full Stack Club Bootcamp, designed to help barbershops manage appointments, clients, and payments with ease.

## 🚀 Features

- 🧑‍💼 Google OAuth login
- 📅 Barber appointment scheduling
- 🏪 Admin dashboard for barbershop management
- 💳 Payment gateway integration
- 🌐 Full deployment with Node.js and MongoDB
- 🔐 Secure authentication and session handling

## 🛠️ Tech Stack

- **Frontend**: React.js, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: SQL lite with Neon DB
- **Authentication**:
- **Deployment**: Vercel

## 📦 Installation

```bash
# Clone the repo
git clone https://github.com/sergiobtos/barber-saas-bootcamp.git
cd barber-saas-bootcamp

# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
⚙️ Configuration
Create a .env file in both backend and frontend folders with the following variables:
# Backend .env
DATABASE_URL=your_postgresql_connection_string

# Frontend .env
NEXT_PUBLIC_API_URL=http://localhost:5000

🧪 Running Locally
# Start backend
cd backend
npm run dev

# Start frontend
cd ../frontend
npm run dev

📚 Learning Reference
This project is based on the Full Stack Club Bootcamp Node.js module (data-url="https://alunos.fullstackclub.com.br/area/produto/item/5175248"), with updated Mongoose connection using async/await and try-catch for error handling.

📄 License
This project is licensed under the MIT License.
```
