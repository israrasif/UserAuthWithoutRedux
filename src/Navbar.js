import React from 'react'
import { Link, Route, withRouter } from 'react-router-dom' 
import Register from './Register'
import Login from './Login'
import Home from './Home'
import Account from './Account'
import MyNotes from './MyNotes'

const Navbar = (props) => {
    const {userLogged, toggleLogged} = props

    return (
        <div>
           <ul>
                <li><Link to='/'>Home</Link></li>
                {userLogged ? (
                    <>  {/*shortcut for react.fragment*/}
                        <li><Link to='/account'>Account</Link></li>
                        <li><Link onClick={() => {
                            toggleLogged()
                            alert('logged out')
                            localStorage.removeItem('token')
                            props.history.push('/')
                        }
                        }>Logout</Link></li>
                        <li><Link to='/notes'>My notes</Link></li>
                    </>
                ) : (
                    <React.Fragment>
                        <li><Link to='/register'>Register</Link></li>
                        <li><Link to='/login'>Login</Link></li>
                    </React.Fragment>
                )
                }
                
            </ul>

            <Route path='/' component={Home} exact={true}/>
            <Route path='/register' component={Register} />
            <Route path='/login' render={(props) => {
                return <Login 
                        {...props}
                        toggleLogged={toggleLogged}
                        />
            }} />
            <Route path='/account' component={Account}/>
            <Route path='/notes' component={MyNotes}/>
        </div>
    )
}

export default withRouter(Navbar)