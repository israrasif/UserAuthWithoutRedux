import React,{useState} from 'react'
import axios from 'axios'

const Login = (props) => {
    const {toggleLogged} = props
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleChange = (e) => {
        const attr = e.target.name

        if(attr === 'email'){
            setEmail(e.target.value)
        }
        if(attr === 'password'){
            setPassword(e.target.value)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const formData = {
            email: email,
            password: password
        }

        axios.post('http://dct-user-auth.herokuapp.com/users/login', formData)
            .then((response) => {
                if(response.data.errors){
                    alert(response.data.errors)
                }
                else{
                    localStorage.setItem('token', response.data.token)
                    props.history.push('/')
                    toggleLogged()
                    alert('logged in')
                }
            })
            .catch((error) => {
                alert(error.message)
            })
    }

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input type='text' value={email} onChange={handleChange} name='email' placeholder='enter email'/> <br />
                <input type='text' value={password} onChange={handleChange} name='password' placeholder='enter password'/> <br />
                <button type='submit'>Login</button>
            </form>
        </div>
    )
}

export default Login