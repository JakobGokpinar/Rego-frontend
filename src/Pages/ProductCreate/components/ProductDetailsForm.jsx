import { Form } from "react-bootstrap"

export default function ProductDetailsForm ({ title, price, desc, updateTitle, updatePrice, updateDesc}) {
        return (
            <div>
                    <Form.Control 
                        type="text" 
                        placeholder="Title" 
                        value={title} 
                        onChange={(e) => updateTitle(e.target.value)}
                    />
                    <Form.Control 
                        type="number" 
                        placeholder="Price" 
                        value={price}
                         onChange={(e) => updatePrice(e.target.value)}
                    />
                    <Form.Control
                        placeholder="Beskrivelse" 
                        as="textarea" 
                        value={desc} 
                        rows={4}
                        onChange={(e) => updateDesc(e.target.value)}
                    />
            </div>
        )
}