// import React from 'react'
// import React, { useState } from 'react'
import axios from 'axios'
import React, { useContext, useState, useEffect } from 'react'
import noteContext from "../context/notes/noteContext"
import BookmarkAddSharpIcon from '@mui/icons-material/BookmarkAddSharp';

const AddNote = () => {
   
    const [note, setNote] = useState({ id: "", etitle: "", edescription: "", etad: "" });
    const onChange = (feild) => {
        return (e) => {
            setNote((prev) => ({
                ...prev, [feild]: e.target.value
            }));
        }
    }
    const addNote = async (title, description, tag) => {
        // TODO: API Call
        // API Call 
        const response = await fetch(`http://localhost:3004/api/notes/addnote`, {
          method: 'POST',
          headers: {
            
            "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNmZGFiMTIyMzEzNWVkYzU5ODU3ZTk5In0sImlhdCI6MTY3NzU2ODg1M30.70-P8CT3ETL2cyl9iC3cHFjDGR-5MUNJCQK2sA2ZPR0"
          },
          body:{title, description, tag}
        });
    
        // const note = await response.json();
        // setNotes(notes.concat(note))
      }
    const handleClick =async (e) => {
        // var postData = { title: `${note.etitle}`, description: `${note.edescription}`, tag: `${note.etad}` }

        // await axios.post('http://localhost:3004/api/notes/addnote',
        //     { headers: { "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNmZGFiMTIyMzEzNWVkYzU5ODU3ZTk5In0sImlhdCI6MTY3NzU2ODg1M30.70-P8CT3ETL2cyl9iC3cHFjDGR-5MUNJCQK2sA2ZPR0" } }, { body: { "title": note.etitle, "description": note.edescription, "tag": note.etad } }).then(function (response) {
        //         console.log(response.data);

        //     })
        addNote(note.etitle,note.edescription,note.etad);
        
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
                        <button type='submit' className='my-3' onClick={handleClick}>
                            <BookmarkAddSharpIcon />
                        </button>


                    </div>
                </div>
            </div>
        </>
    )
}

export default AddNote;