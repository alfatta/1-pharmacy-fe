import React, { useState } from 'react';
import Axios from 'axios';
import { Form, Button, Card, Container, Row, Col } from 'react-bootstrap';



function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const _doLogin = (e) => {
        e.preventDefault()
        Axios.post('http://localhost:2001/api/tes/auth/login',
         {
          password,
          email
        })
        .then((res) => {
            console.log(res.data)
        })
        .catch((err) => {
            console.log(err.message)
        })
    }
    return (
        <Container>
            <Row>
            <Col sm={12} md={{ span: 4, offset: 4 }}>
                    <Card>
                        <Card.Header>Login</Card.Header>
                        <Card.Body>
                            <Card.Title>Masukkan Email dan Password Anda yang sudah terdaftar</Card.Title>
                            <Form onSubmit={ _doLogin }>
                                <Form.Group className="mb-3" controlId="formEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder="Email"
                                    value={ email }
                                    onChange={ (e) => setEmail(e.target.value) } />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password"
                                    value={ password }
                                    onChange={ (e) => setPassword(e.target.value) } />
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