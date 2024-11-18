import React, { useState } from "react";
import { Nav } from 'react-bootstrap'

import Account from './Account.js'
import Favorites from './Favorites.js'
import PublishedProducts from './PublishedProducts.js'
import VerifyAlert from './VerifyAlert.js'


const DashboardScreen = ({ userDoc }) => {

    const [activeSection, setActiveSection] = useState('account');

    function handleSectionChange(section) {
        setActiveSection(section)
    }

  return (
    
    <div>
            {!userDoc && <VerifyAlert /> }

          <Nav  variant="tabs" defaultActiveKey='tab-1'>
                <Nav.Link  eventKey='tab-1' tabIndex={1} onClick={() => handleSectionChange('account')}>
                    <i className="fa-solid fa-circle-plus" /> Account</Nav.Link>
                <Nav.Link  eventKey='tab-2' tabIndex={2} onClick={() => handleSectionChange('favorites')} >
                    <i className="fa-solid fa-thumbs-up" /> Favorites</Nav.Link>
                <Nav.Link  eventKey='tab-3' tabIndex={3} onClick={() => handleSectionChange('published')}>
                    <i className="fa-regular fa-bookmark" /> Published Products</Nav.Link>
          </Nav>

            {activeSection === 'account' && <Account />}
            {activeSection === 'favorites' && <Favorites />}
            {activeSection === 'published' && <PublishedProducts />}

    </div>
  );
};

export default DashboardScreen;

/*
      <Row className="profilelink-row">
          <Col lg={6} className="profilelink-col">
              <a href='/profil'>
                  <div className="profilelink-box">
                      <i className="fa-regular fa-user profilelink-box-icon"/>
                      <h3>Profil</h3>
                      <p>Se din profil</p>
                  </div>
              </a>
              <a href='/meldinger'>
                  <div className="profilelink-box" >
                      <i className="fa-regular fa-message profilelink-box-icon"/>
                      <h3>Meldinger</h3>
                      <p>Se meldingene dine</p>
                  </div>
              </a>
              <a href='/nyannonse'>
                  <div className="profilelink-box">
                      <i className="fa-regular fa-square-plus profilelink-box-icon"/>
                      <h3>Ny Annonse</h3>
                      <p>Danne og publisere en ny annonse</p>
                  </div>
              </a>
          </Col>
          <Col lg={6} className="profilelink-col">
              <a href='/favoritter'>
                  <div className="profilelink-box">
                      <i className="fa-regular fa-heart profilelink-box-icon"/>
                      <h3>Favoritter</h3>
                      <p>Se og endre dine favoritte annonser</p>
                  </div>
              </a>
              <a href='/mine-annonser'>
                  <div className="profilelink-box">
                      <i className="fa-solid fa-receipt profilelink-box-icon"/>
                      <h3>Annonsene Mine</h3>
                      <p>Se og endre annonsene dine</p>
                  </div>
              </a>
          </Col>
      </Row>
*/
