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
- **Database**: Postgres with Neon DB and Prism ORM
- **Authentication**:
- **Deployment**: Vercel

## Prism Set up

- npm install prism --save-dev
- npx prism init --datasource-provider postgresql
- go to https://neon.com/ to create DB

## 📦 Installation

```bash
# Clone the repo
git clone https://github.com/sergiobtos/barber-saas-bootcamp.git
cd barber-saas-bootcamp

# Install dependencies
npm install

⚙️ Configuration
Create a .env file in the project folder with the following variables:

DATABASE_URL=postgresql://neondb_owner:********************************/neondb


🧪 Running Locally
# Start
npm run dev

📚 Learning Reference
This project is based on the Full Stack Club Bootcamp Node.js module (data-url="https://alunos.fullstackclub.com.br/area/produto/item/5175248"), with updated Mongoose connection using async/await and try-catch for error handling.

📄 License
This project is licensed under the MIT License.
```
