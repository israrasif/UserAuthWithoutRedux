import React,{useState} from 'react'
import axios from 'axios'

const Register = (props) => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleChange = (e) => {
        const attr = e.target.name
        if (attr === 'username'){
            setUsername(e.target.value)
        }
        if (attr === 'email'){
            setEmail(e.target.value)
        }
        if (attr === 'password'){
            setPassword(e.target.value)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const data = {
            username: username,
            email: email, 
            password: password
        }

        axios.post('http://dct-user-auth.herokuapp.com/users/register', data)
            .then((response) => {
                if(response.data.errors){
                    alert(response.data.message)
                }else {
                    alert('user successfully created')
                    props.history.push('/login')
                }
            })
            .catch((error) => {
                console.log(error.message)
            })
    }

    return (
        <div>
            <h2>Register with us</h2>
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder='enter username' value={username} onChange={handleChange} name='username'/> <br />
                <input type='text' placeholder='enter email' value={email} onChange={handleChange} name='email'/> <br />
                <input type='password' placeholder='enter password' value={password} onChange={handleChange} name='password'/> <br />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default Register