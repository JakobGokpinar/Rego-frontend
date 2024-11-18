import React from 'react';
import { ButtonGroup, Button } from 'react-bootstrap'

export default function ProductActionButtons ({  openModal }) {

        return(
            <>
                <ButtonGroup style={{ display: 'flex'}}>
                    <Button variant='outline-dark'>Favorite</Button>
                    <Button variant='outline-dark'>Message</Button>
                    <Button variant='outline-dark' onClick={openModal}>Share</Button>
                </ButtonGroup>    
            </>
        )
}