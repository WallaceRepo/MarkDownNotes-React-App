import React from "react"

export default function Sidebar(props) {
    // console.log(props.notes[0].body.toString())
    function setTitle ( note, index) {
        if (note) {
            return note.body.split("\n")[0]
        } else {
           return `Note + ${index +1}`
        }
    }
    const noteElements = props.notes.map((note, index) => (
            
        <div key={note.id}>
            <div
                
                className={`title ${
                    note.id === props.currentNote.id ? "selected-note" : ""
                }`}
                onClick={() => props.setCurrentNoteId(note.id)}
            >   
                <h4 className="text-snippet">{setTitle(note, index)}</h4>
                {/* <h4 className="text-snippet">{note.body.split("\n")[0]}</h4> */}
                {/* <h4 className="text-snippet">Note {index +1}</h4> */}
                <button 
                    className="delete-btn"
                    // Your onClick event handler here
                    onClick={(event)=> props.deleteNote( event, note.id)}
                >
                    <i className="gg-trash trash-icon"></i>
                </button>
            </div>
        </div>
    ))

    return (
        <section className="pane sidebar">
            <div className="sidebar--header">
                <h3>Notes</h3>
                <button className="new-note" onClick={props.newNote}>+</button>
            </div>
            {noteElements}
        </section>
    )
}
