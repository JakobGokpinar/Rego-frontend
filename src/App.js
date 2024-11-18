import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import './App.css';

import Navbar from './components/Navbar/Navbar.js';
import Footer from './components/Footer/Footer.js';
/*import FeedbackBanner from './FeedbackBanner.js';
import LoginAndRegister from './Pages/LoginAndRegister/LoginAndRegister.js';
import ProductPage from './Pages/ProductPage/ProductPage.js';
import Chat from './Pages/Chat/Chat';
import SearchResult from './Pages/SearchedResultPage/SearchResult.js';
import NewAnnonce from './Pages/NewAnnonce/NewAnnonce.js';
import EmailVerify from './Pages/EmailVerification/EmailVerify';
import Account from './Pages/Profile/Profile.js';
import Profile from './Pages/Profile/Profile/Profile.js';
import Favorites from './Pages/Profile/Favorites/Favorites.js';
import MyAnnonces from './Pages/Profile/MyAnnonces/MyAnnonces.js';
import PrivacyPolicy from './Pages/PrivacyAndAbout/PrivacyPolicy.js';
import AboutUs from './Pages/PrivacyAndAbout/AboutUs.js';
import NotFound from './Pages/NotFound.js';*/

import AppRoutes from "./routes.js"
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000/'
axios.defaults.withCredentials = true; //ensures that cookies are sent with the request. This is important because we want to have users logged in the whole time they are on the website.

const App = () => {
    const [userDoc, setUserDoc] = useState(null);

    useEffect( () => {
      const fetchUserData = async () => {
          try {
              const response = await axios.get('/user/isauth');
              console.log(response)
             // setUser(response.data);
          } catch (error) {
              console.log('Error fetching user data:', error);
              //setUserDoc(null); // Handle user not authenticated
          } 
      };

      fetchUserData();
  }, []);

    return (
     <Router>
            <Navbar userDoc={userDoc} />

            <Container fluid style={{paddingTop: '80px',display:'flex', alignItems: 'center'}}>
                  <AppRoutes updtUserDoc={setUserDoc}></AppRoutes>
            </Container>

            <Footer></Footer>
     </Router>
    );
  }

export default App;

/*
  <Routes>
                  <Route path='/login' element={<LoginAndRegister userDoc={userDoc} updtUserDoc={setUserDoc}/>}/>
                    <Route path="/register" element={<LoginAndRegister userDoc={userDoc} updtUserDoc={setUserDoc}/>}></Route>
                    <AppRoutes />
                    <Route path='/min-konto' element={<Account/>}/>
                    <Route path='/favoritter' element={<Favorites/>}/>
                    <Route path='/mine-annonser' element={<MyAnnonces/>}/>
                    <Route path='/nyannonse' element={<NewAnnonce/>}/>
                    <Route path='/profil' element={<Profile/>}/>
                    <Route  path='/search' element={<SearchResult/>}/>
                    <Route path={'/produkt/:annonceId'} element={<ProductPage/>}/>
                    <Route  path='/chat' element={<Chat/>}/>
                    <Route path='/emailverify' element={<EmailVerify/>}/>
                    <Route path='/privacy-policy' element={<PrivacyPolicy/>}></Route>
                    <Route path='/about-us' element={<AboutUs/>}></Route>
                    <Route path="*" element={<NotFound/>}/>
            </Routes>
  */
