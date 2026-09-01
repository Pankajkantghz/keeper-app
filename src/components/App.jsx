import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  // Load notes from localStorage
  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem("keeper-notes");

    return savedNotes ? JSON.parse(savedNotes) : [];
  });

  // Search text
  const [searchTerm, setSearchTerm] = useState("");

  // Save notes to localStorage whenever notes change
  useEffect(() => {
    localStorage.setItem("keeper-notes", JSON.stringify(notes));
  }, [notes]);

  // Add a new note
  function addNote(newNote) {
    const noteWithId = {
      id: Date.now(),
      ...newNote,
    };

    setNotes((prevNotes) => {
      return [...prevNotes, noteWithId];
    });
  }

  // Delete a note
  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem) => noteItem.id !== id);
    });
  }

  // Search notes by title
  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Header
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
      />

      <CreateArea onAdd={addNote} />

      <div className="notes-container">
        {filteredNotes.map((noteItem) => {
          return (
            <Note
              key={noteItem.id}
              id={noteItem.id}
              title={noteItem.title}
              content={noteItem.content}
              onDelete={deleteNote}
            />
          );
        })}
      </div>

      <Footer />
    </div>
  );
}

export default App;