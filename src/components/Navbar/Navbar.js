import React, {  useState } from "react";
import { Navbar, Nav, Form, NavDropdown, Offcanvas, Row, Col, Button, Container } from "react-bootstrap";
import Avatar from '@mui/material/Avatar';


const Navigation = ({ userDoc }) => {
  const [currentY, setCurrentY] = useState(0);
  const [isRender, setIsRender] = useState(true);

  function scroll() {
    if (window.scrollY > currentY) setIsRender(false) 
    else setIsRender(true)
    setCurrentY( window.scrollY );
    
  }

  function handleSubmit() {

  }

  window.addEventListener("scroll", scroll);

    return (
    <Navbar expand="md" fixed="top" bg="light">
          <Container className="d-flex justify-content-center px-0">

                <Row className="w-100" > {/*  w-100 because Row should use all the width Container provides*/}
                    <Col lg={4} className="p-0">
                          <Navbar.Brand href="/" className="d-flex">
                                <NavbarBranding />
                          </Navbar.Brand>
                      </Col>
                
                    <Navbar.Toggle/>  

                    <Col className="p-0" lg={8}>

                        <Navbar.Offcanvas>                   

                            <Offcanvas.Header closeButton />

                            <Offcanvas.Body className="d-flex align-items-center"> {/* className="d-flex"  because we want to divide content into 2 equal ly wide columns*/}
                                <Col> {/* This is Column  #1. It is responsible for displaying the Search Input Form */}
                                      <Form className="d-flex gap-2 " onSubmit={handleSubmit}>
                                                        <Form.Control
                                                                type="text"
                                                                placeholder="Search"
                                                        />
                                                      <Button type="submit" variant="dark">Search</Button>
                                            </Form>
                              </Col>
                                    
                              <Col>
                              {!userDoc ? 
                                          <Nav className="d-flex justify-content-end">
                                                  <Nav.Link href='/login'className="">Logg Inn</Nav.Link>
                                                    <Nav.Link href='/register'>Register</Nav.Link>
                                                    <Nav.Link href="/dashboard">Dashboard</Nav.Link>
                                                    <Nav.Link href="/new">New</Nav.Link>
                                          </Nav>
                                :
                                        <Nav className="d-flex justify-content-end">
                                                  <Nav.Link href="/dashboard">Dashboard</Nav.Link>
                                        </Nav>
                              }
                              </Col>

                        </Offcanvas.Body>
                        
                    </Navbar.Offcanvas>
                </Col>
                </Row>
                </Container>
        </Navbar>
    );
}

function NavbarBranding () {
    return(
          <div>
                  <img
                      alt="react-logo"
                      src="/react-logo.jpg"
                      width="30"
                      height="30"
                    />
                  {' '}
                  Rego
            </div>
    )
}

function returnProfileDropdown(username) {
    return(
        <>
            <Avatar className="navbar-avatar" alt='profile-picture' sx={{width: 32, height: 32, marginRight: 1}} />
            <NavDropdown id="dropdown-basic-button" title={username}>
                  <NavDropdown.Item href="/nyannonse"><i className="fa-solid fa-plus me-2"/> Ny Annonse</NavDropdown.Item>
                  <NavDropdown.Item href="/dashboard"><i className="fa-regular fa-user me-2"/> Dashboard</NavDropdown.Item>
                  <NavDropdown.Item href="/chat"><i className="fa-regular fa-message me-2"/>Meldinger</NavDropdown.Item>
                  <NavDropdown.Divider/>
                  <NavDropdown.Item><i className="fa-solid fa-arrow-right-from-bracket me-2"/> Logg Ut</NavDropdown.Item>
              </NavDropdown>
        </>
    )
}

export default Navigation;

/*{
  userDoc ? returnProfileDropdown(userDoc.username)
  :
  <>
    
  </>
}*/
