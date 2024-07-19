import NoteContext from "./noteContext";
import { useState } from "react";
const NoteState = (props) => {
  const host = "http://localhost:5000";
  const notesInitial = [];
  const [notes, setNotes] = useState(notesInitial);

  //Get all notes
  const getNotes = async () => {
    //API Call
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY5M2YxYzc5M2JlOGRjYTU3ZWY0MjIyIn0sImlhdCI6MTcyMDk3NTQ3N30.FE61FiyQZQKenUDGPH_w_G7JjmHFyxMWr5qE4hfYgkQ",
      },
    });
    const json = await response.json();
    setNotes(json)
  };

  //Add a note
  const addNote = async (title, description, tag) => {
    //API Call
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY5M2YxYzc5M2JlOGRjYTU3ZWY0MjIyIn0sImlhdCI6MTcyMDk3NTQ3N30.FE61FiyQZQKenUDGPH_w_G7JjmHFyxMWr5qE4hfYgkQ",
      },
      body: JSON.stringify(title, description, tag),
    });

    const note = {
      _id: "66954b319597cf193a735ccc",
      user: "6693f1c793be8dca57ef4222",
      title: title,
      description: description,
      tag: tag,
      date: "2024-07-15T16:15:45.681Z",
      __v: 0,
    };

    setNotes(notes.concat(note));
  };

  //Delete a note
  const deleteNote = async(id) => {
    //API Call
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY5M2YxYzc5M2JlOGRjYTU3ZWY0MjIyIn0sImlhdCI6MTcyMDk3NTQ3N30.FE61FiyQZQKenUDGPH_w_G7JjmHFyxMWr5qE4hfYgkQ",
      }
    });
    const json = response.json();

    //Logic for delete
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes();
  };
  //Edit a note
  const editNote = async (id, title, description, tag) => {
    //API Call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY5M2YxYzc5M2JlOGRjYTU3ZWY0MjIyIn0sImlhdCI6MTcyMDk3NTQ3N30.FE61FiyQZQKenUDGPH_w_G7JjmHFyxMWr5qE4hfYgkQ",
      },
      body: JSON.stringify(title, description, tag),
    });
    const json = response.json();

    //Logic for edit
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element.id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
    }
  };
  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote ,getNotes}}>
      {props.children}
    </NoteContext.Provider>
  );
};
export default NoteState;
