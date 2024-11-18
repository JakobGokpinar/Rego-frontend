import './Register.css';

import React from "react";
import { Button, Form, Row, Col, Container } from "react-bootstrap";

function Register() {

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return(
        <Container className="signup-container" fluid>
              <Form onSubmit={handleSubmit} className="signup-form">
                <Form.Group className='mb-3'>
                    <Row>
                        <Col>
                        <Form.Label>Navn</Form.Label>
                    <Form.Control
                        type='text'
                        name="name"
                        required/>
                        </Col>
                        <Col>
                        <Form.Label>Etternavn</Form.Label>
                    <Form.Control
                        type='text'
                        name="lastname"
                        required/>
                        </Col>
                    </Row>
                   
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    required
                  />
                </Form.Group>
  
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,32}"
                    title="Must contain at least one number and one uppercase and lowercase letter, and be between 6 and 32 characters"
                    required  
                  />
                </Form.Group>
                <Form.Group
                  className="form-submit-remember mb-3"
                  controlId="formSubmitAndRemember"
                >
                  <Button variant="primary" type="submit" className="">
                      Opprett Bruker
                    </Button>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Text>
                    Har allerede en konto?{" "}
                    <a href="/login" className="login-link">
                      Logg inn
                    </a>
                    
                  </Form.Text>
                </Form.Group>
  
                <hr />
              </Form>
      </Container>
    )
}

export default Register;