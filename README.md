# 🎮 NowPlaying – A Movie Watchlist App

A simple and elegant movie watchlist app built with **React + Vite** using **TMDb API** to fetch movie data. Easily search, add movies to your watchlist, and manage them with local storage.

---

## 📌 Features
👉 Search for movies using **TMDb API**  
👉 View **popular movies** on the homepage  
👉 Add movies to your **watchlist (favorites)**  
👉 Remove movies from the watchlist  
👉 **Persist data** using `localStorage`  
👉 Responsive **UI for mobile & desktop**  

---

## 🛠️ Tech Stack
- **Frontend:** React, Vite, Context API, React Router  
- **API:** The Movie Database (TMDb)  
- **State Management:** Context API  
- **Storage:** LocalStorage  

---

## 🚀 Getting Started
### 1️⃣ Clone the Repository
```sh
git clone https://github.com/your-username/movie-watchlist.git
cd movie-watchlist
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Set Up API Key
1. **Create a `.env` file** in the project root  
2. Add the following line (replace with your actual TMDb API key):  
   ```env
   VITE_API_KEY=your_tmdb_api_key_here
   ```
3. **Ensure `.env` is in `.gitignore`** to prevent exposure.

### 4️⃣ Start Development Server
```sh
npm run dev
```
The app will be live at **`http://localhost:5173`**  

---

## 📷 Screenshots
| Home Page |
|-----------|
| ![image](https://github.com/user-attachments/assets/bfa5713e-c877-49d5-95ca-0bad9688388d) |
| Watchlist |
| ![image](https://github.com/user-attachments/assets/1a43f3ca-4158-49c8-ac25-8480ffb898bd) |

---

## 📡 API Integration
This project fetches movie data from **TMDb API**.  
Learn more at [TMDb Developer Docs](https://developers.themoviedb.org/3).

### Example API Calls:
```javascript
const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

// Fetch popular movies
export const getPopularMovies = async () => {
  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  const data = await response.json();
  return data.results;
};

// Search movies by query
export const searchMovies = async (query) => {
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`
  );
  const data = await response.json();
  return data.results;
};
```

---

## 📂 Folder Structure
```
📺 src
 ├📺 components
 ┃ ├📝 MovieCard.jsx
 ┃ ├📝 NavBar.jsx
 ├📺 contexts
 ┃ ├📝 MovieContext.jsx
 ├📺 pages
 ┃ ├📝 Home.jsx
 ┃ ├📝 Favorites.jsx
 ├📺 services
 ┃ ├📝 api.js
 ├📝 App.jsx
 ├📝 main.jsx
```

---

## 🎮 Usage
### ✅ **Search for Movies**
- Type a movie name in the search bar and hit enter.  
- The app fetches results from the **TMDb API**.

### ✅ **Add Movies to Watchlist**
- Click the **♥ (Heart Button)** to save a movie to favorites.

### ✅ **Remove Movies from Watchlist**
- Click the **♥ again** to remove a movie from the watchlist.

### ✅ **Persistent Watchlist**
- Your saved movies are stored in **localStorage**, so they won’t disappear after a page refresh.

---

## 🎭 Dependencies
- React & React Router
- Context API (State Management)
- TMDb API for movie data
- LocalStorage for watchlist persistence

---

## 🌟 Show Some Love
If you like this project, **⭐ Star it on GitHub** and **Share it with friends!**  

🔗 **Live Demo:** (https://preethamgoud.github.io/Watchlist/)  

---

### 🎥 Happy Watching! 🍿
