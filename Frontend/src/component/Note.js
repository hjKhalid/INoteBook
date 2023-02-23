import React, {useContext} from 'react'
import noteContext from "../context/notes/noteContext"
import Noteitem from './NoteItem';


const Notes = () => {
    const context = useContext(noteContext);
    // const {notes, setNotes} = context;
    return (
        <div className="row my-3">
            <h3 style={{fontFamily:"cursive"}}>Your Notes</h3> 
            {/* {notes.map((note)=>{
                return <Noteitem note={note}/>  
            })} */}
            <Noteitem  title="the React" description="The great framework" tag="by facebook"/>
            </div>
    )
}

export default Notes