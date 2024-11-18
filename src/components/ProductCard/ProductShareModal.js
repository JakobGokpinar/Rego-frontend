import React from 'react';
import { Modal, Form, Button } from 'react-bootstrap'
import { copyTextToClipboard } from '../../services/copyTextToClipboard.js'

export default function ProductShareModal ({ displayModal, onHide, title, id }) {
  
    function handleCopyLink () {
        copyTextToClipboard(`https://www.rego.live/produkt/${id}`, 
          function () {
            onHide();
            alert('Copied!')
        }
    )};

        return(
            <Modal show={displayModal} onHide={onHide}>

                    <Modal.Header closeButton> Del annonsen </Modal.Header>

                    <Modal.Body>
                          <div className="d-flex" style={{ whiteSpace: 'nowrap', gap: "1rem" }}>
                                <Form.Control type="text" value={title} disabled/>
                                <Button type='button' onClick={handleCopyLink}>
                                    <i className="bi bi-plus-lg" /> Kopi lenken
                                </Button>
                          </div>
                    </Modal.Body>

            </Modal>  
        )
}