# URL Shortener

This is a simple full-stack url shortener built with Node.js, Express, and SQLite.

## Features

- Shorten any long url into a short link
- Redirects to the original URL when visited
- Stores all URLS in a local SQLite database

## Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** SQLite (via better-sqlite3)
- **Frontend:** HTML, CSS, Vanilla JavaScript

## Getting Started

### 1. Clone the repository

git clone https://github.com/your-username/url-shortener.git
cd url-shortener

### 2. Install dependencies

npm install

### 3. Start the server

node server.js

### 4. Open in browser

Visit http://localhost:3000

## Project Structure

url-shortener/
├── server.js       # Express server & API routes
├── db.js           # SQLite database setup
├── public/
│   └── index.html  # Frontend UI
└── package.json

## Future Improvements

- Click counter per short link
- Custom short codes
- Link expiry dates
- Deploy to a live domain