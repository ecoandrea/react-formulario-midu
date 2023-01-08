import { useEffect, useState } from "react";
import Note from "./Note";
import axios from "axios";
import { create } from "./servicios/notes";
import "./App.css";
import getAllNotes from "./servicios/notes/getAllNotes";
import createNote from "./servicios/notes/createNote";

export default function App() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    console.log("useEffect");
    setLoading(true);
    getAllNotes().then((notes) => {
      setNotes(notes);
      setLoading(false);
    });
  }, []);

  const handleChange = (event) => {
    setNewNote(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("crear nota");

    const noteToAddToState = {
      title: newNote,
      body: newNote,
      useId: 1,
    };

    setError("");

    createNote(noteToAddToState)
      .then((newNote) => {
        setNotes((prevNotes) => prevNotes.concat(newNote));
      })
      .catch((error) => {
        console.error(error);
        setError("la API ha petado");
      });

    setNewNote("");
  };

  console.log("render");

  return (
    <div>
      <h1>Notes</h1>
      {loading ? "Cargando..." : ""}

      <ol>
        {notes.map((note) => (
          <Note key={note.id} {...note} />
        ))}
      </ol>

      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={newNote} />
        <button>Crear notas</button>
      </form>

      {error ? error : ""}
    </div>
  );
}
