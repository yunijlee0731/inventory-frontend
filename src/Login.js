import React from 'react';
import Header from './components/Header';
import Content from './components/Content';
import Sidebar from './components/Sidebar';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

function Login() {
    return (
        <div className="Login">
        <Header />
        <div className="d-flex" id="wrapper">  
            <div id="page-content-wrapper">
                <Container fluid>
                    <Row className="align-items-center justify-content-center">
                        <Card style={{ width: '50rem' }}>
                            <Card.Body>
                                <Card.Title>Login</Card.Title>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                    <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Check me out" />
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                                {/* <Form.Label htmlFor="inputPassword5">Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    id="inputPassword5"
                                    aria-describedby="passwordHelpBlock"
                                />
                                <Form.Text id="passwordHelpBlock" muted>
                                    Your password must be 8-20 characters long, contain letters and numbers,
                                    and must not contain spaces, special characters, or emoji.
                                </Form.Text> */}
                            </Card.Body>
                        </Card>
                    </Row>
                </Container>
            </div>
        </div>
      </div>      
    );
  }

export default Login;
