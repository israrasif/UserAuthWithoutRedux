import React,{useState, useEffect} from 'react'
import NotesForm from './NotesForm'
import NotesList from './NotesList'

import axios from 'axios'


const MyNotes = (props) => {
    const [notes, setNotes] = useState([])

    useEffect(() => {
        axios.get('http://dct-user-auth.herokuapp.com/api/notes', {
            headers: {
                'x-auth': localStorage.getItem('token')
            }
        })
            .then((response) => {
                setNotes(response.data)
                console.log(response.data)
            })
            .catch((error) => {
                alert(error.message)
            })
    }, [])

    const addNote = (formData) => {
        const addedNote = notes.concat(formData)
        setNotes(addedNote)
    }

    const deleteItem = (id) => {
        const filtered = notes.filter((ele) => {
            console.log(ele.id)
            return ele._id != id
        })
        setNotes(filtered)
        console.log(id)
   }

    return (
        <div>
            <h2>My Notes</h2>
            <NotesForm addNote={addNote}/>
            <NotesList notes={notes} deleteItem={deleteItem}/>
        </div>
    )
}

export default MyNotes