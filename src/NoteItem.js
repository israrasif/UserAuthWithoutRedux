import React,{useState} from 'react'
import axios from 'axios'

const NoteItem = (props) => {
    const [modal, setModal] = useState({})
    const {title, body, _id, deleteItem} = props

    const deleteNote = (_id) => {
        
        axios.delete(`http://dct-user-auth.herokuapp.com/api/notes/${_id}`, {
        headers: {
            'x-auth': localStorage.getItem('token')
        }
        })
        .then((response) => {
            const result = response.data
            console.log(result._id)
            deleteItem(response.data._id)
        })
        .catch((error) => {
            alert(error.message)
        })
    }

    const showNote = (id) => {
        axios.get(`http://dct-user-auth.herokuapp.com/api/notes/${id}`, {
        headers: {
            'x-auth': localStorage.getItem('token')
        }
        })
        .then((response) => {
            const result = response.data
            setModal(result)
            console.log(result)
        })
        .catch((error) => {
            alert(error.message)
        })
    }

    const closeModal = () => {
        setModal({})
    }

    return (
        <div>
            <div>
                <h4>title - {title && title}</h4>
                <h4>body - {body && body}</h4>
                <button onClick={() => deleteNote(_id)}>delete</button>
                <button onClick={() => showNote(_id)}>Show</button>
                <hr />
            </div>
            {modal.title  && 
                <div>
                    <h3>title - {modal.title}</h3>
                    <h3>body - {modal.body}</h3>
                    <button onClick={() => closeModal()}>X</button>
                </div>
            }
        </div>
    )
}

export default NoteItem