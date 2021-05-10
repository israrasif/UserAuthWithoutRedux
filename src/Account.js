import React,{useState, useEffect} from 'react'
import axios from 'axios'

const Account = (props) => {
    const [user, setUser] = useState({})

    useEffect(() => {
        axios.get('http://dct-user-auth.herokuapp.com/users/account', {
            headers: {
                'x-auth' : localStorage.getItem('token')
            }
        })
            .then((response) => {
                setUser(response.data)
            })
            .catch((error) => {
                console.log(error.message)
            })
    }, [])

    return (
        <div>
            <h2>Name - {user.username}</h2>
            <h2>Email - {user.email}</h2>
        </div>
    )

}

export default Account