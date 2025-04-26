# Project C - CRM Framework

Project C è un CRM modulare e scalabile sviluppato con React e Firebase.

---

## 📋 Moduli completati

### ✅ Modulo 0 - Setup Ambienti & Infrastruttura Base
- Setup React.js (Create React App)
- Setup Firebase (Auth + Firestore + Hosting)
- Inizializzazione struttura cartelle (`components`, `pages`, `services`, `utils`)
- Ambiente di sviluppo configurato
- .env impostato (NON pushato su GitHub)

### ✅ Modulo 1 - Authentication Service
- Creazione servizio `auth.js` con:
  - Registrazione utenti (email/password)
  - Login utenti (email/password)
  - Logout
  - Reset password via email
  - Social Login (Google)
- Creazione pagine React:
  - `LoginPage.jsx`
  - `RegisterPage.jsx`
  - `ResetPasswordPage.jsx`
- Creazione componente `PrivateRoute.jsx` per protezione rotte
- Test locali completati
- Merge su `main` completato

### ✅ Modulo 2 - Database Clienti (CRUD Firestore)
- Creazione servizio `db.js` con funzioni CRUD:
  - `addClient()`
  - `getClients()`
  - `getClientById()`
  - `updateClient()`
  - `deleteClient()`
- Creazione pagina `DashboardClienti.jsx`:
  - Visualizzazione lista clienti
  - Aggiunta nuovo cliente tramite form
  - Eliminazione cliente con conferma
- Creazione componente `ClientCard.jsx`:
  - Visualizzazione cliente singolo
  - Bottoni "Modifica" (in sviluppo) e "Elimina"
- Collegamento Frontend <-> Firestore
- Aggiornamento realtime lista clienti
- Merge su `main` completato

---

## 📦 Stack Tecnologico

- React.js (Create React App)
- Firebase (Authentication, Firestore, Hosting)
- GitHub Actions (prossimamente)

---

## 🚀 Come avviare il progetto in locale

1. Clona il repository:
   ```bash
   git clone https://github.com/gihary/project-c.git
Entra nella cartella:
cd project-c
Installa le dipendenze:
npm install
Avvia il progetto:
npm run start
Configura il file .env con i dati di Firebase:
VITE_API_KEY=your_api_key
VITE_AUTH_DOMAIN=your_auth_domain
VITE_PROJECT_ID=your_project_id
VITE_STORAGE_BUCKET=your_storage_bucket
VITE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_APP_ID=your_app_id
🛠️ Struttura progetto

/src
 ├── /components
 │     └── ClientCard.jsx
 ├── /pages
 │     ├── DashboardClienti.jsx
 │     ├── LoginPage.jsx
 │     ├── RegisterPage.jsx
 │     └── ResetPasswordPage.jsx
 ├── /services
 │     ├── auth.js
 │     └── db.js
 └── /utils
🔥 Roadmap sviluppo

 Modulo 0 – Setup Base
 Modulo 1 – Authentication Service
 Modulo 2 – Database Clienti (CRUD)
 Modulo 3 – Sistema Note & Reminder
 Modulo 4 – AI Suggerimenti Follow-up
 Modulo 5 – Supporto Multi-Progetto (Multi-tenant)
 Modulo 6 – UI/UX leggera e scalabile
 Modulo 7 – Deployment & CI/CD
 Modulo 8 – Documentazione avanzata
👥 Team

Dev Lead: Luigi Borriello
Support: Firestorm AI Assistant
📄 Licenza

MIT License - Free to use.
