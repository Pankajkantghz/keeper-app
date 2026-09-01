
# 📝 Keeper App

A clean and responsive **note-taking application built with React**. Users can create, search, and delete notes through a simple component-based interface. Notes are persisted in the browser using **Local Storage**, so they remain available after refreshing the page.

## 🔗 Live Demo

[**View Live Demo**](https://keeper-app-rpm8.onrender.com/)

## ✨ Features

- Create notes with a title and content
- Delete notes
- Search notes by title
- Expandable note creation area
- Persistent notes using Browser Local Storage
- Notes remain available after page refresh
- Responsive layout for desktop, tablet, and mobile
- Material-UI icons
- Bootstrap styling
- Component-based React architecture

## 🛠️ Tech Stack

- React
- JavaScript (ES6+)
- Material-UI
- Bootstrap
- HTML5
- CSS3
- Browser Local Storage

## 📂 Project Structure

```text
src/
├── components/
│   ├── App.jsx
│   ├── CreateArea.jsx
│   ├── Footer.jsx
│   ├── Header.jsx
│   └── Note.jsx
├── index.js
└── notes.js
````

## 🚀 Getting Started

### Clone the Repository

```bash
git clone <your-repository-url>
cd keeper-app
```

### Install Dependencies

```bash
npm install
```

### Run Locally

```bash
npm start
```

The application will run at:

```text
http://localhost:3000
```

## 🔍 Search

The application includes a search feature that allows users to quickly find notes by their **title**.

Search results update as the user types, making it easier to find a specific note when multiple notes are stored.

## 💾 Local Storage

Keeper uses the browser's **Local Storage API** to persist notes.

When notes are created or deleted, the updated notes are saved to Local Storage. When the application starts, previously saved notes are loaded automatically.

This means notes are preserved even after:

* Refreshing the page
* Closing and reopening the browser
* Returning to the application later on the same browser and origin

## 📱 Responsive Design

The interface adapts to different screen sizes:

* Desktop
* Tablet
* Mobile

The notes are displayed using a responsive CSS Grid layout.

## 📌 Current Limitations

* Notes are stored locally in the browser.
* Notes are not synchronized between different devices.
* Clearing browser storage will remove saved notes.
* There is currently no user authentication or backend database.

## 🔮 Future Improvements

* Edit existing notes
* Categories and tags
* Rich text formatting
* Pin important notes
* Dark mode
* Backend and database integration
* User authentication
* Cloud-based note synchronization
* Advanced search and filtering

## 👨‍💻 Author

**Darth**


