import { Card, Container, Row, Col } from 'react-bootstrap';
import {useEffect} from 'react';
import Axios from 'axios';

function Verify({history, location}) {
    const query = new URLSearchParams(location.search)
  
  useEffect(() => {
    Axios.get('http://localhost:2001/api/tes/auth/verify',{
        params : {token : query.get('token')}
    })
      .then((res) => {
        console.log(res.data);
        //if (res.data === 'OK') {
          setTimeout(() => {
            history.replace('/login')
          }, 2000);
        //}
      })
      .catch(alert)
  }, [])
    return(
        <Container>
            <Row>
                <Col sm={12} md={{ span: 4, offset: 4 }}>
                    <Card>
                        <Card.Header>Register</Card.Header>
                        <Card.Body>
                            <Card.Title>Selamat! Akun anda sudah terverifikasi!</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
            )
}

export default Verify;