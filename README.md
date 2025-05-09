# 📝 Signup and Login Application

## 🔍 Overview

This is a React-based application that provides user authentication functionality, including signup and login features. The application uses **React Router** for navigation and **localStorage** for data persistence.

---

## ✨ Features

- 🔐 User registration with form validation  
- 🔑 Login functionality  
- 💪 Password strength indicator  
- ✅ Real-time form input validation  
- 💾 Persistent user data using localStorage  
- 📱 Responsive UI components  

---

## 🧩 Components

### 🔄 Common Components

- **Button** — A reusable button component with default styling  
- **Input** — A form input component with label support  
- **Navbar** — Navigation bar with links to different routes  
- **Header** — Application header with title  
- **Footer** — Application footer with copyright  

### 🔐 Authentication Components

- **LoginForm** — Handles user login with email and password  
- **SignupForm** — Handles user registration with name, email, and password  

---

## 🧠 Context

- **UserContext** — Manages user authentication state across the application  

---

## ⚙️ Installation

To get the project running locally:

```bash
git clone https://github.com/your-username/signup-login-app.git
cd signup-login-app
npm install
npm start


---

## 📦 Dependencies
 - React
 - React Router DOM
 - React Context API

## Project Structure
/src
  /components
    /common
      Button.jsx
      Input.jsx
    Navbar.jsx
    Header.jsx
    Footer.jsx
    LoginForm.jsx
    SignupForm.jsx
  /context
    UserContext.jsx
  /utils
    validation.js
    useLocalStorage.js
  App.jsx
  index.js
  App.css


## 🚀 Usage
 - Navigate to the Signup page to create a new account
 - Fill in your details (Name, Email, Password)
 - The password strength indicator will show you how strong your password is
 - After successful registration, head to the Login page
 - Enter your credentials to access the Dashboard

## 🛠️ Build With
 - 🧰 React — UI framework
 - 🧭 React Router — For routing
 - 💾 localStorage — To persist user data

#Made with ❤️ 


