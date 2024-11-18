import React, { useState } from "react";

import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Avatar from "@mui/material/Avatar";

const Profile = () => {
  
  const [readerResult, setReaderResult] = useState(null);
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [profilePicture, setProfilePicture] = useState("");


  return (
    <div className="d-flex" style={{height: '35vh'}}>
          <Col className="d-flex flex-column align-items-center justify-content-evenly p-3">
              <Avatar alt="avatar"
                  src={ readerResult ? readerResult : profilePicture}
                  sx={{ width: 90, height: 90 }}
                />
              Endre : <Form.Control type="file" accept="image/*"/>
          </Col>

          <Col>
                <Form.Control type="Email" disabled />

                <Form.Control type="text" value={name || ""} onChange={(e) => setName(e.target.value)} />

                <Form.Control type="text" value={lastName || ""} onChange={(e) => setLastName(e.target.value)} />

                 <Button variant="dark">
                    Lagre
                </Button>
          </Col>
    </div>
  );
};

export default Profile;
