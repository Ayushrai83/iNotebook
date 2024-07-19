import NoteContext from "./noteContext";
import { useState } from "react";
const NoteState = (props)=>{
    const notesInitial = [
        {
          "_id": "66954a73f1a3dee744f30be8",
          "user": "6693f1c793be8dca57ef4222",
          "title": "Vacation",
          "description": "Summer vacation enjoyment",
          "tag": "Personal",
          "date": "2024-07-15T16:12:35.758Z",
          "__v": 0
        },
        {
          "_id": "66954b319597cf193a735ccc",
          "user": "6693f1c793be8dca57ef4222",
          "title": "My Title",
          "description": "Please wake up early",
          "tag": "Personal",
          "date": "2024-07-15T16:15:45.681Z",
          "__v": 0
        }
      ]
      const [notes, setNotes] = useState(notesInitial)

      //Add a note
      const addNOte = (title,description,tag) => {
        note  = {
          "_id": "66954b319597cf193a735ccc",
          "user": "6693f1c793be8dca57ef4222",
          "title": title,
          "description": description,
          "tag": tag,
          "date": "2024-07-15T16:15:45.681Z",
          "__v": 0
        }
      
        setNotes(notes.concat(note))
      }
      //Delete a note
      const deleteNote = () => {

      }

      //Edit a note
      const editNote = () => {
        
      }
    return (
        <NoteContext.Provider value={{notes, addNOte, deleteNote, editNote}}>
            {props.children}
        </NoteContext.Provider>
    )
}
export default NoteState;