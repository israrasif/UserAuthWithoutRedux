import React,{ useState, useEffect } from 'react'
import Navbar from './Navbar'

const App = (props) => {
    const [userLogged, setUserLogged] = useState(false)
    
    const toggleLogged = () => {
        setUserLogged(!userLogged)
    }
    
    useEffect(() => {
        if(localStorage.getItem('token')){
            toggleLogged()
        }
    }, [])

    return (
        <div>
            <h1>User Auth</h1>
            <Navbar userLogged={userLogged} toggleLogged={toggleLogged}/>
        </div>
    )
}

export default App