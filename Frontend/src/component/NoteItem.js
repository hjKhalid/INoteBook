// import React from 'react'
import React, {useContext} from 'react'
import noteContext from "../context/notes/noteContext"
import EditSharpIcon from '@mui/icons-material/EditSharp';
import DeleteSharpIcon from '@mui/icons-material/DeleteSharp';
function NoteItem(props) {
  const context = useContext(noteContext);
  const { deleteNote } = {context};
  const { note, updateNote } = props;

  return (
    <div>
      <div className="col-md-3">
        <div className="card-header" style={{ fontFamily: "cursive" }}>
          {props.title}
        </div>
        <div className="card-body">
          <blockquote className="blockquote mb-0">
            <p>{props.description}</p>
            <footer className="blockquote-footer">{props.tag} </footer>
          </blockquote>
          <div className='my-3'>
            <button onClick={()=>{updateNote(note)}} ><EditSharpIcon /></button>

            <button className='mx-2' style={{ pointerEvents: "cursure" }}
            onClick={()=>{deleteNote()}}><DeleteSharpIcon /></button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default NoteItem