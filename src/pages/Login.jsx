import React, { useState } from 'react';
import Axios from 'axios';
import { useDispatch } from 'react-redux';
import { Form, Button, Card, Container, Row, Col } from 'react-bootstrap';
import { doLogin } from '../redux/actions/auth';


function Login({history, location}) {
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
            <Row>
                <Col sm={12} md={{ span: 4, offset: 4 }}>
                    <Card>
                        <Card.Header>Login</Card.Header>
                        <Card.Body>
                            <Card.Title>Masukkan Email dan Password Anda yang sudah terdaftar</Card.Title>
                            <Form onSubmit={_doLogin}>
                                <Form.Group className="mb-3" controlId="formEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder="Email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)} />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)} />
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Login
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Login;