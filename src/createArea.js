import React, { useState } from "react";
import "./styles1.css";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => ({
      ...prevNote,
      [name]: value,
    }));
  }

  function submitNote(event) {
    event.preventDefault();

    // Prevent submission of empty or whitespace-only title and content
    if (note.title.trim() === "" && note.content.trim() === "") {
      alert("Please write a valid note");
      return;
    }

    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
  }

  return (
    <div className="create-area">
      <form className="form">
        <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
          className="input-title"
        />
        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows="3"
          className="input-content"
        />
        <div className="text-right">
          <button onClick={submitNote} className="submit-btn">
            Add
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateArea;
