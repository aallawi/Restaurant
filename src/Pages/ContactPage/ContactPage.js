import React from 'react'

import Basic from '../../components/Basic/Basic';
import { images } from '../../constants';


import "./ContactPage.css";
import Suggestion from './../../container/Suggestion/Suggestion';
import Footer from './../../container/Footer/Footer';

function ContactPage() {
  return (
    <div className="ContactPage bg_black" >  
      <Basic pageName={"Contact"} url={"main"}  />
      <div className="map bg_black">
        <img src={images.map} alt='map' />
      </div> 
      <Suggestion />
      <Footer />
    </div>
  )
}

export default ContactPage
