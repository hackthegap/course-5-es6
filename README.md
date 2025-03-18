
---

# ES6 Functional Programming Course - JavaScript Project
**Created by Fabricio Braga**  
**Last updated: Tue 18 March**  

This project is designed to help students learn **JavaScript ES6** and **functional programming** by implementing simple, interactive features. It includes a **counter implementation as a reference**, and students will create six additional features using ES6 concepts.

---

## 🚀 **Project Overview**
The project includes:
1. **Counter (Implemented - Reference for Students)**
2. **Clock**
3. **Metric Converter**
4. **To-Do List**
5. **Random Quote Generator**
6. **Color Changer**
7. **Click Counter**

Each feature is placed in a separate **HTML file** inside the `/pages` directory.

---

## 🛠 **Installation & Setup**
To run this project, you'll need **Node.js**, **NVM**, and **http-server**.

### ✅ **Step 1: Install Node.js & NVM**
First, install **NVM (Node Version Manager)** to easily manage Node.js versions.

#### **For macOS/Linux:**
Run the following command in the terminal:
```sh
curl -fsSL https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash

Then, restart the terminal and install Node.js:
```sh
nvm install --lts
nvm use --lts
```

#### **For Windows:**
1. Download and install [nvm-setup.exe](https://github.com/coreybutler/nvm-windows/releases)
2. Restart your terminal and install Node.js:
```sh
nvm install latest
nvm use latest
```

---

### ✅ **Step 2: Install `http-server`**
Once Node.js is installed, install the **http-server** package globally:
```sh
npm install -g http-server
```

---

### ✅ **Step 3: Clone the Repository**
Download the project using **Git**:
```sh
git clone https://github.com/hackthegap/course-5-es6.git
cd course-5-es6
```

---

### ✅ **Step 4: Run the Project**
Start the local server using:
```sh
http-server -p 8000
```

Now, open your browser and go to:
```
http://localhost:8000
```

---

## 📂 **Project Structure**
```
/course-5-es6
│── index.html          # Home page (Contains the counter as a reference)
│── styles/
│   ├── styles.css      # Styling for the entire project
│── js/
│   ├── state.js        # ES6 state management
│   ├── utils.js        # Utility functions (pure functions)
│   ├── script.js       # Counter implementation
│── pages/
│   ├── clock.html            # Feature 1: Digital clock
│   ├── metric-converter.html # Feature 2: Convert distances/temperatures
│   ├── todo-list.html        # Feature 3: To-do list
│   ├── random-quote.html     # Feature 4: Random quote generator
│   ├── color-changer.html    # Feature 5: Background color changer
│   ├── click-counter.html    # Feature 6: Click anywhere counter
```

---

## ✨ **Your Tasks**
You need to **implement the six features** using **JavaScript ES6 concepts**.

Each page contains a **title and instructions**. Open the file and add the missing JavaScript functionality.

### 🔹 **Feature 1: Digital Clock (`clock.html`)**
- Display a live digital clock (`HH:MM:SS`)
- Use `setInterval()` to update every second

### 🔹 **Feature 2: Metric Converter (`metric-converter.html`)**
- Convert **km to miles**, **Celsius to Fahrenheit**, etc.
- Use a dropdown and an input field

### 🔹 **Feature 3: To-Do List (`todo-list.html`)**
- Allow users to add and remove tasks
- Store tasks in **local storage** for persistence

### 🔹 **Feature 4: Random Quote Generator (`random-quote.html`)**
- Show a new **random quote** when a button is clicked
- Use an array of quotes

### 🔹 **Feature 5: Background Color Changer (`color-changer.html`)**
- Change the page's background color to a **random color** when clicking a button

### 🔹 **Feature 6: Click Counter (`click-counter.html`)**
- Increase a counter when clicking **anywhere on the page**
- Similar to the counter on the home page

---

## 💡 **Guidelines & Best Practices**
- **Use ES6 features** (`let`, `const`, arrow functions, template literals)
- **Follow functional programming principles** (pure functions, no mutations)
- **Use event listeners** (`addEventListener`)
- **Keep functions modular** (separate concerns, use helper functions)
- **Use JavaScript modules** (`import/export`)

---

## ❓ **Need Help?**
- If you get stuck, refer to the **counter implementation in `index.html`**.
- Google is your best friend! Search for **MDN JavaScript documentation**.
- Ask questions and collaborate with your classmates.

---

## 📌 **Final Notes**
Once you have completed all features, **commit and push your code** to your own GitHub repository.

To push changes:
```sh
git add .
git commit -m "feature/[feature name]"
git push origin main
```

Good luck and have fun coding! 🚀😃
