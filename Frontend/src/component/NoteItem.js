// import React from 'react'
import React, {useContext, useState} from 'react'
import noteContext from "../context/notes/noteContext"
import EditSharpIcon from '@mui/icons-material/EditSharp';
import DeleteSharpIcon from '@mui/icons-material/DeleteSharp';
function NoteItem(props) {
  // const context = useContext(noteContext);
  // const { deleteNote } = {context};
  // const { note, updateNote } = props;
  const [notes,setNotes]=useState("")
  const deleteNote = async () => {
    // API Call
    const response = await fetch(`http://localhost:3004/api/notes/deletenote/id`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjEzMWRjNWUzZTQwMzdjZDQ3MzRhMDY2In0sImlhdCI6MTYzMDY2OTU5Nn0.hJS0hx6I7ROugkqjL2CjrJuefA3pJi-IU5yGUbRHI4Q"
      }
    });
    
  }
    // Edit a Note
    const editNote = async (id, title, description, tag) => {
      // API Call 
      const response = await fetch(`http://localhost:3004/api/notes/updatenote/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjEzMWRjNWUzZTQwMzdjZDQ3MzRhMDY2In0sImlhdCI6MTYzMDY2OTU5Nn0.hJS0hx6I7ROugkqjL2CjrJuefA3pJi-IU5yGUbRHI4Q"
        },
        body: JSON.stringify({title, description, tag})
      });
      const json = await response.json(); 
  
       let newNotes = JSON.parse(JSON.stringify(notes))
      // Logic to edit in client
      for (let index = 0; index < newNotes.length; index++) {
        const element = newNotes[index];
        if (element._id === id) {
          newNotes[index].title = title;
          newNotes[index].description = description;
          newNotes[index].tag = tag; 
          break; 
        }
      }  
      setNotes(newNotes);
    }
 const handleOnDelete=()=>{
  deleteNote();
 }
 const handleOnEdit=()=>{

 }

  return (
    <div>
      <div className="col">
        <div className="card-header" style={{ fontFamily: "cursive" }}>
          {props.title}
        </div>
        <div className="card-body">
          <blockquote className="blockquote mb-0">
            <p>{props.description}</p>
            <footer className="blockquote-footer">{props.tag} </footer>
          </blockquote>
          <div className='my-3'>
            <button onClick={handleOnEdit} ><EditSharpIcon /></button>

            <button className='mx-2' style={{ pointerEvents: "cursure" }}
            onClick={handleOnDelete}><DeleteSharpIcon /></button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default NoteItem