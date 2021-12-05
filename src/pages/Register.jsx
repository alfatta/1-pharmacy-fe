import React, { useState } from 'react';
import Axios from 'axios';
import { Form, Button, Card, Container, Row, Col } from 'react-bootstrap';

function Register() {
    const [userName, setuserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [namaUser, setNamaUser] = useState('')
    const [alamat, setAlamat] = useState('')
    const [tanggalLahir, setTanggalLahir] = useState('')

    const _doRegister = (e) => {
        e.preventDefault()
         Axios.post('http://localhost:2001/api/tes/auth/register',
         {namaUser,
          alamat,
          tanggalLahir,
          userName,
          password,
          email
        })
           .then((res) => {
               console.log(res.data)
            //   history.replace('/auth/login', { notif: [
            //     { type: 'success', message: 'Register success. Please check your email address to verify your account'}
            //   ]})    
            })
            .catch((err) => {
                console.log(err.message)
            //   history.replace({ state: { notif: [
            //     { type: 'danger', message: err.message}
            //   ]}})
            })
        }

    return (
        <Container>
            <Row>
            <Col sm={12} md={{ span: 4, offset: 4 }}>
                    <Card>
                        <Card.Header>Register</Card.Header>
                        <Card.Body>
                        
                            <Card.Title>Silahkan Daftarkan Diri Anda</Card.Title>
                            <Form onSubmit={ _doRegister }>
                            <Form.Group className="mb-3" controlId="formUsername">
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control type="text" placeholder="Username"
                                    value={ userName }
                                    onChange={ (e) => setuserName(e.target.value) } />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formNamaPengguna">
                                    <Form.Label>Nama Pengguna</Form.Label>
                                    <Form.Control type="text" placeholder="Nama Pengguna"
                                    value={ namaUser }
                                    onChange={ (e) => setNamaUser(e.target.value) } />
                                </Form.Group>
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
                                <Form.Group className="mb-3" controlId="formAlamat">
                                    <Form.Label>Alamat</Form.Label>
                                    <Form.Control type="text" placeholder="Alamat"
                                    value={ alamat }
                                    onChange={ (e) => setAlamat(e.target.value) } />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formTanggalLahir">
                                    <Form.Label>Tanggal Lahir</Form.Label>
                                    <Form.Control type="date" placeholder="Tanggal Lahir"
                                    value={ tanggalLahir }
                                    onChange={ (e) => setTanggalLahir(e.target.value) } />
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

        </Container>
    )
}

export default Register;