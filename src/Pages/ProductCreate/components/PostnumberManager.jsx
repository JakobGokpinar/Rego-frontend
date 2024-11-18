import { useEffect } from "react"
import { Form } from "react-bootstrap"
import { fetchLocationData } from "../api/fetchLocation.js"

export default function PostnumberManager ({ postNumber, postLocation, updatePostNumber, updatePostLocation }) {

        useEffect(() => {
                async function getLocation() {
                        try {
                                if (postNumber !== '') {
                                        const response = await fetchLocationData(postNumber);
                                        updatePostLocation(response)
                                }                            
                        } catch (error) { console.error('Error getting location data', error) }
                }
                getLocation();
        }, [postNumber])
        
        return(
                <div>
                        <Form.Control 
                                type="number" 
                                placeholder="Post number" 
                                value={postNumber} 
                                onChange={(e) => updatePostNumber(e.target.value)}
                        />
                        <p>{postLocation}</p>
                </div>
        )
}