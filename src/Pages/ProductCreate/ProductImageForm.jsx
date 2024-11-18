import React, { useState, useRef } from "react";
import './css/ProductImageForm.css'
import { Modal, Button, Form, Image } from 'react-bootstrap'

export default function ProductImageForm({ images, addToImages, removeFromImages, updateImages }) {

    const draggedImg = useRef();
    const draggedOverImg = useRef();
    const [showModal, setShowModal] = useState(false);

    function openModal() { setShowModal(true) }
    function closeModal() { setShowModal(false) }

    function onImagePick(e) {
        Array.from(e.target.files).forEach(async file => { 
            var reader = new FileReader();  //Yüklenen resmin datasını oku.
            reader.readAsDataURL(file);
            reader.addEventListener('load', async () => { 
                addToImages({name: file.name, data: reader.result })
            })
        })
    }

        function handleDelete(image) {
            removeFromImages(image)
        }

        const dragStart = (index) => { draggedImg.current = index } 
        const dragEnter = (index) => { draggedOverImg.current = index }

        const dragEnd = () => {
            const imagesClone = [...images];
            const dragItemContent = imagesClone[draggedImg.current];
            imagesClone.splice(draggedImg.current, 1);
            imagesClone.splice(draggedOverImg.current, 0, dragItemContent);
            draggedImg.current = null;
            draggedOverImg.current = null;
            updateImages(imagesClone);
        }; 

        function slideImageLeft(img, index) {
                if (index <= 0) return;
                var imagesClone = [...images]
                var previousImage = images[index-1]
                imagesClone[index-1] = img;
                imagesClone[index] = previousImage;
                updateImages(imagesClone)
        }

        function slideImageRight(img, index) {
                if (index+1 >= images.length) return;
                var imagesClone = [...images]
                var nextImage = images[index+1]
                imagesClone[index+1] = img;
                imagesClone[index] = nextImage;
                updateImages(imagesClone)
        }
    
        return(
            <div>
                <Button className="w-100" variant="outline-dark" onClick={openModal}>
                <i className="fa-solid fa-upload mx-2" /> Upload Image </Button>
                <Modal show={showModal} onHide={closeModal}>
                   <Modal.Header closeButton />
                    <Modal.Body>
                                <div className="file-input-design">
                                        <Form.Control 
                                                type="file" 
                                                accept="image/*" 
                                                multiple 
                                                onChange={onImagePick}
                                        />
                                </div>
                                <div className="image-preview-container" >
                                        {images.map((img, index) => {
                                                        return (
                                                            <div className="image-div" key={index}>
                                                                <div key={index} className="image-container"
                                                                    draggable 
                                                                    onDragStart={() => dragStart(index)} 
                                                                    onDragEnter={() => dragEnter(index)} 
                                                                    onDragEnd={dragEnd} 
                                                                >
                                                                        <Image src={img.data} loading="lazy"/>
                                                                        <div className="delete-icon" onClick={() => handleDelete(img)}>
                                                                            <i className="fa-solid fa-trash" style={{color: 'red', fontSize: '2em'}} />
                                                                        </div>                                                       
                                                                </div>   
                                                               <ImageNavigation img={img} index={index} slideImageLeft={slideImageLeft} slideImageRight={slideImageRight}/>
                                                        </div> 
                                                    )                                                                                                            
                                        })}                                      
                                </div>                               
                    </Modal.Body>
                </Modal>
            </div>
        )
}

export function ImageNavigation ({ img, index, slideImageLeft, slideImageRight }){
    return (
      <div className="image-navigation">
            <button className="navigation-button left-double">
                <i className="fa-solid fa-angles-left"></i> 
            </button>
            <button className="navigation-button left" onClick={() => slideImageLeft(img, index)}>
                <i className="fa-solid fa-arrow-left-long"></i>
            </button>
            <button className="navigation-button right" onClick={() => slideImageRight(img, index)}>
                <i className="fa-solid fa-arrow-right-long"></i>
            </button>
            <button className="navigation-button right-double">
                <i className="fa-solid fa-angles-right"></i>
            </button>
      </div>
    );
  };