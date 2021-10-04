import React, { useState, useEffect } from "react";
import Header from "./Header";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [noteArray, setNoteArray] = useState(() => {
    const localStorageData = localStorage.getItem("notes");
    return localStorageData ? JSON.parse(localStorageData) : [];
  });

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(noteArray));
  }, [noteArray])

  function addNote(note) {
    if (note.title.trim() !== "" && note.content.trim() !== "") {
      setNoteArray((preValue) => {
        return [...preValue, note];
      });
    } else {
      alert("Enter Title and Content..");
    }
  }

  function deleteNote(id) {
    setNoteArray((preValue) => {
      return preValue.filter((eachNote, index) => {
        return index !== id;
      });
    });
  }

  return (
    
    <div className="Container">
      <Header />
      <CreateArea newNote={addNote} />
      <div className="notes-container">
     {noteArray.map((note, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={note.title}
            content={note.content}
            delete={deleteNote}
          />
          
        );
      })}
      </div>
    </div>
  );
}

export default App;
