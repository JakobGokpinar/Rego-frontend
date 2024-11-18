import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useLocation } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
    let location = useLocation();

    return(
        <div className='notFound-container'>
            <Row className='row'>
                <Col lg={6} >
                        <div className='notFound-content'>
                        <h1>Side Feil</h1>
                        <p>Det ser ut til at <strong>{location.pathname}</strong> ikke eksisterer</p>
                        <p>Prøv å bruke en gyldig lenke eller gå tilbake til <a href='/'>hovedsiden</a></p>
                    </div>
                </Col>
                <Col lg={6} >
                    <img src="/not-found.gif" className='notFound-gif' alt='page not found'/>             
                </Col>
            </Row>
        </div>
    )  
}

export default NotFound;