import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import classes from "./LoginScreen.module.css";
import { Form, Button, Container } from 'react-bootstrap';
import { doLogin } from '../../redux/actions/auth';
import { Link } from 'react-router-dom'



function Login({ history, location }) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const _doLogin = (e) => {
        e.preventDefault()
        dispatch(doLogin(email, password, (err, res) => {
            if (err) {
                // console.log(err);
                history.replace({
                    state: {
                        notif: [
                            { type: 'danger', message: err }
                        ]
                    }
                })
            } else {
                setEmail('')
                setPassword('')
                history.replace('/', {
                    notif: [
                        { type: 'success', message: 'Login success' }
                    ]
                })
            }
        }))
    }
    return (
        <Container>
            <div className={classes.wrapper}>
                <div className={classes.leftSide}>
                    <h3>New to our website?</h3>
                    <p>
                        We will have something right here, but we dont know what we gonna
                        put yet?
                    </p>
                    <Link to="/register">
                        Create an Account
                    </Link>
                </div>
                <div className={classes.rightSide}>
                    <h4>login to enter</h4>
                    <form onSubmit={_doLogin}>
                        <input
                            type="text"
                            placeholder="Your Email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button type="submit">Log in</button>
                    </form>
                </div>
            </div>
        </Container>
    )
}

export default Login;