import React from "react";
import Note from "./Note";

const NotesList = (props) => {
  function doesNoteMatch(note) {
    return note.doesMatchSearch;
  }
  const filterNotes = props.notes.filter(doesNoteMatch);

  const renderNoteElements = filterNotes.map((note) => (
    <Note
      onType={props.onType}
      removeNote={props.removeNote}
      note={note}
      key={note.id}
    />
  ));
  return <ul className="notes-list">{renderNoteElements}</ul>;
};

export default NotesList;
