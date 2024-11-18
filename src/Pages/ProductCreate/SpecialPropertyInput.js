import React, { useState } from 'react'
import { Modal, Form, Button } from 'react-bootstrap'
import "./css/SpecialPropertyInput.css"

export default function SpecialPropModal({ properties, addToProperties, removeFromProperties }) {

        const [showModal, setShowModal] = useState(false)
        const [key, setKey] = useState('')
        const [value, setValue] = useState('')

        function add() { addToProperties(key, value) }

        function openModal() { setShowModal(true) }
        function hideModal() { setShowModal(false) }

        function remove(property) {
                removeFromProperties(property.key)
        }

        function dragStart() {}
        function dragEnter() {}
        function dragEnd() {}

        return(
                <div className='property-modal'>
                        <Button variant="outline-dark" className="w-100" onClick={openModal} >
                                        <i className="fa-solid fa-plus mx-2" /> Legg til ny nokkelinfo
                                </Button>
            <Modal show={showModal} onHide={hideModal}>
                   <Modal.Header closeButton />
                    <Modal.Body>
                        <div className=''>
                                <Form.Control type='text' placeholder='Key' value={key} onChange={(e) => setKey(e.target.value)}/>
                                <Form.Control type='text' placeholder='Value' value={value} onChange={(e) => setValue(e.target.value)}/>
                                <Button variant="outline-dark" type='button' onClick={add}><i className="fa-solid fa-plus mx-2"/> Legg til</Button>
                        </div>
                        <hr/>
                        <div className='property-preview-container'>
                                {properties.map((property, index) => {
                                       return( 
                                                <div className="property-container" key={index}>
                                                        <div className="property-item" draggable  onDragStart={() => dragStart(index)}   onDragEnter={() => dragEnter(index)}  onDragEnd={dragEnd}  >
                                                                <h6>{property.key}</h6>
                                                                <p>{property.value}</p>
                                                                <div className="delete-icon" onClick={() => remove(property)}>
                                                                        <i className="fa-solid fa-trash" style={{color: 'red', fontSize: '2em'}} />
                                                                </div>  
                                                        </div>   
                                                </div> 
                                       )
                                })}
                        </div>
                    </Modal.Body>
            </Modal>
            </div>
        )

}