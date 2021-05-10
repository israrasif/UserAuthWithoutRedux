import React,{useEffect, useState, withRouter} from 'react'
import axios from 'axios'

import NoteItem from './NoteItem'

const NotesList = (props) => {
    const {notes, deleteItem} = props

    console.log(notes)

    return (
        <div>
            <h2>Notes List</h2>
            {!notes.length ? (
                <div>
                    <h3>No notes found</h3>
                    <h4>Add your first note</h4>
                </div>
            ) : (
                <div>
                <h3>Total notes - {notes.length}</h3>
                {notes.map((ele) => {
                    return <NoteItem 
                                {...ele} 
                                deleteItem={deleteItem}
                            />
                })}
            </div>
            )
            }
        </div>
    )
}

export default NotesList