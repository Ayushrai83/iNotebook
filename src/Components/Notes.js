import React, { useState , useContext, useEffect, useRef } from "react";
import noteContext from "../context/notes/noteContext";
import Noteitem from "../Components/Noteitem";
import AddNote from "./AddNote";

const Notes = () => {
  const context = useContext(noteContext);
  
  const { notes, getNotes } = context;
  
  useEffect(() => {
    getNotes();
  }, []);
  
  const updateNote = (currectNote) => {
    ref.current.click();
    setNote({etitle : currectNote.title , edescription : currectNote.description , etag : currectNote.tag})
  };
  
  const ref = useRef(null);

  const [note,setNote] = useState({etitle: "", edescription: "" , etag: "default"})
  
  const handleClick = (e) => {
    e.preventDefault()
  };
  
  const onChange = (e) => {
    setNote({...note,[e.target.name]: e.target.value})
  }
  return (
    <>
      <AddNote />
      <button
        type="button"
        ref={ref}
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Launch demo modal
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Edit Note
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form className="my-3">
                <div className="mb-3">
                  <label htmlFor="etitle" className="form-label">
                    Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    value = {note.etitle}
                    id="etitle"
                    name="etitle"
                    aria-describedby="emailHelp"
                    onChange={onChange}
                    minLength={5} required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="etag" className="form-label">
                    Tag
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    value = {note.etag}
                    id="etag"
                    name="etag"
                    onChange={onChange}
                    minLength={5} required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="edescription" className="form-label">
                    Description
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    value = {note.edescription}
                    id="edescription"
                    name="edescription"
                    onChange={onChange}
                    minLength={5} required
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={handleClick}
                >
                  Add Note
                </button>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button disabled={note.etitle.length<5 || note.edescription.length<5} onClick={handleClick} type="button" className="btn btn-primary">
                Update Note
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row my-3">
        <h2>You Notes</h2>
        <div className="container mx-2 ">
        {notes.length===0 && 'No notes to display ' }
        </div>
        {notes.map((note) => {
          return (
            <Noteitem key={note._id} updateNote={updateNote} note={note} />
          );
        })}
      </div>
    </>
  );
};
export default Notes;
