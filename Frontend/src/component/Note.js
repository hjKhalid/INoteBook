import React, { useContext, useEffect, useRef, useState } from 'react'
import noteContext from "../context/notes/noteContext"
import Noteitem from './NoteItem';
import AddNote from './AddNote';
import Axios from 'axios';


const Notes = () => {
    // const context = useContext(noteContext);
    // const {notes, getNotes} ={context} ;
    const [data,setData]=useState("");
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
Axios.get("localhost:3004/api/notes/fetchallnotes",{headers:{"auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNmODRjZDI0ZWQxNGI3MDg0MWRiN2MyIn0sImlhdCI6MTY3NzIxNzAyMH0.gJLD2MIvgjJYg9iNsn1SUIvHfrxBHr4AxhtqFsBkb-Q"}}).then(response=>{
 setData(response.data)
}).catch((console.error()))
console.log(data);
   
    return (
        <>
        <AddNote/>
        <div className="row my-3">
            <h3 style={{fontFamily:"cursive"}}>Your Notes</h3> 
            {/* {notes.map((note)=>{
                return <Noteitem title={note.etitle} description={note.edescription
                }/>
                }  
            )} */}
            <Noteitem  title="the React" description="The great framework" tag="by facebook"/>
            </div>
            </>
    )
}

export default Notes