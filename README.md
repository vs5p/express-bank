# 🏦 Express Banking System (React + DSA)

## 📌 Overview

The **Express Banking System** is a web-based application built using **React.js** that simulates basic banking operations such as account creation, balance checking, and money transfer.

This project demonstrates the use of **Data Structures and Algorithms (DSA)** concepts integrated with a modern frontend framework.

---

## 🚀 Features

* ✅ Create new bank accounts
* 💰 Check account balance
* 🔄 Transfer money between accounts
* 📊 View all accounts with balances (live dashboard)
* ❌ Prevent invalid operations:

  * Same account transfer
  * Invalid accounts
  * Insufficient balance

---

## 🧠 Data Structures Used

* **Object (Hash Map)** → Stores accounts and balances
* *(Conceptually extendable)*:

  * Linked List → Sequential storage
  * Binary Search Tree → Efficient searching

---

## 🛠️ Tech Stack

* **Frontend:** React.js
* **Language:** JavaScript
* **Styling:** CSS (custom UI)
* **Runtime:** Node.js

---

## 📁 Project Structure

```
banking-app/
│
├── src/
│   ├── components/
│   │   ├── CreateAccount.js
│   │   ├── CheckBalance.js
│   │   ├── TransferMoney.js
│   │   └── AllAccounts.js
│   │
│   ├── services/
│   │   └── Bank.js
│   │
│   ├── App.js
│   ├── index.js
│   └── styles.css
│
└── package.json
```

---

## ▶️ Getting Started

### 1. Clone the repository

```
git clone <your-repo-link>
cd banking-app
```

### 2. Install dependencies

```
npm install
```

### 3. Run the application

```
npm start
```

---

## 💡 How It Works

* The `Bank` class manages all account operations.
* React components interact with this class to perform actions.
* State updates dynamically reflect changes in the UI.
* The right-side dashboard shows live account balances.

---

## ⚠️ Validations Implemented

* Prevent transfer to the same account
* Prevent transfer with insufficient balance
* Validate account existence
* Prevent invalid transaction amounts

---

## 🎯 Learning Outcomes

* Understanding of **DSA concepts in real-world applications**
* Building **modular React components**
* Managing application state using React hooks
* Designing **user-friendly UI layouts**

---


## 👨‍💻 Author

* Sankalp Vyas

---

## 📄 License

This project is developed for academic purposes.
