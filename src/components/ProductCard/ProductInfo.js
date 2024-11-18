import React from 'react';
import { Card } from 'react-bootstrap'

export default function ProductInfo ({ title, location, price }) {
        return(
            <>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{location}</Card.Text>
                <Card.Subtitle>{price} nok</Card.Subtitle>
            </>     
        )
}