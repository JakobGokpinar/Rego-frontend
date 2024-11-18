import React, { useState } from "react";
import { Button, Form, Spinner } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import "./LoginAndRegister.css";
import axios from "axios";

const LoginAndRegister = ({ updtUserDoc }) => {

  const location = useLocation();

  const [hasSubmit] = useState(false)

  const isLogin = location.pathname === '/login'

  async function handleSubmit(ev) {
      ev.preventDefault();

      try {
          if (isLogin) {
            const response = await axios.post('/user/login', {
              email: ev.target.email.value, 
              password: ev.target.password.value 
            })
            console.log('login rspns', response)  
            updtUserDoc(response.data)
            return;
          }
          const response = await axios.post('/user/register', {
              name: ev.target.name.value,
              lastname: ev.target.lastname.value,
              email: ev.target.email.value,
              password: ev.target.password.value
          })
          console.log('register rspns', response);
      } catch (err) {
          console.error(err)
          const errRes = err.response;
          console.log(errRes)
          if (errRes.status === 401) 
            alert(errRes.data.message) // E-postadressen finnes ikke, eller Passord er feil
          else 
            alert(" Please try again later");
      }
  }

  return (
    <div className="d-flex align-items-center justify-content-center border gap-5">
            <Form onSubmit={handleSubmit} className="d-flex flex-column gap-3">
                {location.pathname === '/register' &&
                  <div className='d-flex gap-1'>
                    <Form.Control
                      type="text"
                      name="name"
                      placeholder="Name"
                      disabled={hasSubmit}
                    />
                    <Form.Control
                      type="text"
                      name="lastname"
                      placeholder="Lastname"
                      disabled={hasSubmit}
                    />
                  </div>
                }
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  disabled={hasSubmit}
                />
                <Form.Control
                    type="password"
                    name="password"
                    placeholder="Password"
                    disabled={hasSubmit}
                />
                  <Button variant="dark" type="submit" className="w-100">
                    {hasSubmit && <Spinner
                        size="sm"
                        className="me-2"
                        as="div"
                        aria-hidden="true"
                        disabled={hasSubmit}
                      />}
                    Enter
                  </Button>

                <Form.Text>
                    {isLogin ?'Har ikke en konto?' : 'Har allerede en konto?'} {" "} 
                   <a href={isLogin ? '/register' : '/login'} style={{color: 'black', textDecoration: 'none'}}> 
                        {isLogin ? 'Opprett en her' : 'Logg inn her'}
                   </a>                  
                </Form.Text>
              <hr />
            </Form>
              <img 
              src="https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
              alt="side bilde"
              className="w-50 h-50"
              ></img>
    </div>
  );
};

export default LoginAndRegister;