import React, { useContext, useEffect, useRef, useState } from 'react'
import noteContext from "../context/notes/noteContext"
import Noteitem from './NoteItem';
import AddNote from './AddNote';
import Axios from 'axios';


const Notes = () => {
    // const context = useContext(noteContext);
    // const {notes, getNotes} ={context} ;
    const [data, setData] = useState("");
    // useEffect(() => {
    //     getNotes()
    // }, [])
    // const ref = useRef(null)
    // const [note, setNote] = useState({etitle: "", edescription: "", etag: ""})

    // const updateNote = (currentNote) => {
    //     ref.current.click();
    //     setNote({etitle: currentNote.title, edescription: currentNote.description, etag:currentNote.tag})
    // }

    // const handleClick = (e)=>{
    //     console.log("Updating the note...", note)
    //     e.preventDefault(); 
    // }

    // const onChange = (e)=>{
    //     setNote({...note, [e.target.name]: e.target.value})
    // }
    // GET request for remote image in node.js
    //    const getNotes = async () => {
    //     // API Call 
    //     const response = fetch("localhost:3004/api/notes/fetchallnotes", {
    //       method: 'GET',
    //       headers: {
    //         // 'Content-Type': 'application/json',
    //         "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNmODRjZDI0ZWQxNGI3MDg0MWRiN2MyIn0sImlhdCI6MTY3NzIxNzAyMH0.gJLD2MIvgjJYg9iNsn1SUIvHfrxBHr4AxhtqFsBkb-Q"
    //       }
    //     });
    //     const json =  response.json()
    //     console.log(json)
    //     setData(json)
    //   }
    //   getNotes();
    //   console.log(data);
    React.useEffect(() => {
        Axios.get("http://localhost:3004/api/notes/fetchallnotes", { headers: { "Accept": "*/*", "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNmZGFiMTIyMzEzNWVkYzU5ODU3ZTk5In0sImlhdCI6MTY3NzY2NDkxNn0.5ult9OQRJ0qIwqNccos34txCkrS6fvhjIZvJVM6vMQk" } }).then(response => {
            setData(response.data)
        }).catch(console.error())
        console.log(data);
    })
    return (
        <>
            <AddNote />

            <h3 style={{ fontFamily: "cursive" }}>Your Notes</h3>
            <div className="d-flex align-content-stretch flex-wrap container my-3'">
                {data ? data.map((note) => {
                    return <div className='col mx-3 my-3'><Noteitem title={note.title ? note.title : "React"} description={note.description ? note.description : "fjghdh"
                    } tag={note.tag ? note.tag : "vbcv"} />
                    </div>
                }
                ) : <Noteitem title="the React" description="The great framework" tag="by facebook" />}:



            </div>
        </>
    )
}

export default Notes