import React from "react";

export default function LeftSide() {
        return (
          <Modal show={true}>
            <Modal.Header>
              <Modal.Title>Verifiser din email</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>
                Du må verifisere din e-mailadresse først for å legge ut en
                annonse
              </p>
              <a href="/profil">
                <Button variant="primary">Gå til min profil</Button>
              </a>
            </Modal.Body>
          </Modal>
        );
}