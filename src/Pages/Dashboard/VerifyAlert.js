import React from "react";
import { Alert } from 'react-bootstrap'

export default function VerifyAlert(sendVerificationEmail) {
    return(
        <Alert variant="danger" className="padding-0">
            <Alert.Heading>
                <i className="fa-solid fa-circle-exclamation me-2"/> Your account has not been verified
            </Alert.Heading>
            <p>
              To verify your account, you need to follow the steps in the email sent to you. 
              If you need to receive a new email, <Alert.Link onClick={sendVerificationEmail}>you can click here</Alert.Link>.
              By having a verified account, you can create and publish your announcements.
            </p>
        </Alert>
    )
}