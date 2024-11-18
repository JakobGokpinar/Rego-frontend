import { Image, Modal } from "react-bootstrap"
import "../css/InputModal.css"

export default function InputModal ({ isShow, onHide, type, items, onDelete, onAdd }) {

        
        return (
                <div>
                        <Modal show={isShow} onHide={onHide}>
                                <Modal.Header closeButton/>
                                <Modal.Body>
                                        <div>
                                                {type === 'images' ? <Images /> : <Properties />}
                                        </div>
                                        <div className="items-preview-div">
                                                {items.map((item, index) => {
                                                        return (
                                                                <div>
                                                                        <div className="item-container" draggable>
                                                                                {type === 'images' ?
                                                                                        <Image />
                                                                                        :                                                                                    
                                                                                        <div>
                                                                                                <h6>{property.key}</h6>
                                                                                                <p>{property.value}</p>
                                                                                        </div>
                                                                                }
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

function Images () {}
function Properties () {}