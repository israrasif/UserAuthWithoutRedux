import React,{ useState} from 'react'
import axios from 'axios'

const NotesForm = (props) => {
    const {addNote} = props

    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    const handleChange = (e) => {

        if(e.target.name === 'title'){
            setTitle(e.target.value)
        }
        else if(e.target.name === 'body'){
            setBody(e.target.value)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        
        const formData = {
            title: title, 
            body: body
        }

        axios.post('http://dct-user-auth.herokuapp.com/api/notes', formData, {
            headers: {
                'x-auth': localStorage.getItem('token')
            }
        })
            .then((response) => {
                addNote(response.data)
                console.log('successfully added notes')
            })
            .catch((error) => {
                console.log(error.message)
            })
            setTitle('')
            setBody('')
    }

    return (
        <div>
            <h2>Add Note</h2>
            <form onSubmit={handleSubmit}>
                <input type='text' value={title} onChange={handleChange} name='title' placeholder='title'/> <br />
                <textarea value={body} name='body' onChange={handleChange} placeholder='enter notes'></textarea> <br />
                <button type='submit'>save</button>
            </form>
        </div>
    )
}

export default NotesForm
