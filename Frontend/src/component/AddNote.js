// import React from 'react'
// import React, { useState } from 'react'
import React, {useContext, useState} from 'react'
import noteContext from "../context/notes/noteContext"
import BookmarkAddSharpIcon from '@mui/icons-material/BookmarkAddSharp';

const AddNote = () => {
    const context = useContext(noteContext);
    const {addNote} = {context};

    const [note, setNote] = useState({ id: "", etitle: "", edescription: "", etad: "" });
    const onChange = (feild) => {
        return (e) => {
            setNote((prev) => ({
                ...prev, [feild]: e.target.value
            }));
        }
    }
    const handleClick = (e)=>{
        e.preventDefault();
        addNote(note.etitle, note.edescription, note.etag);
    }

    console.log(note);

    return (
        <>

            <div style={{ height: "50%", width: "30%", alignItems: "center", marginBlockStart: "3rem", marginLeft: "35%" }}>
                <h1 className='my-3' style={{ textAlign: 'center', fontFamily: "cursive" }}>Add your notes</h1>
                <div className="mb-3 my-4">
                    <label for="exampleFormControlInput1" className="form-label" style={{ fontWeight: 'bold', fontFamily: "cursive" }}>Title</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" value={note.etitle} placeholder="Enter your title" onChange={onChange("etitle")} />
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlTextarea1" className="form-label" style={{ fontWeight: 'bold', fontFamily: "cursive" }}>Description</label>
                    <textarea className="form-control" type="text" id="exampleFormControlTextarea1" onChange={onChange("edescription")} value={note.edescription} rows="4"></textarea>
                    <div className='my-3' style={{ border: '2px bold', borderRadius: '50%', alignItems: 'self-end' }}>
                        <label for="exampleFormControlInput1" className="form-label" style={{ fontWeight: 'bold', fontFamily: "cursive" }}>Tag</label>
                        <input type="text" className="form-control" onChange={onChange("etad")} id="exampleFormControlInput1" value={note.etad} placeholder="Enter your tag" />
                        <button type='submit' className='my-3'  onClick={handleClick}>
                            <BookmarkAddSharpIcon />
                        </button>


                    </div>
                </div>
            </div>
        </>
    )
}

export default AddNote;