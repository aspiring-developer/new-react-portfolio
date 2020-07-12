import React from 'react';
import Header from '../components/Header';
import { Footer } from '../components/Footer';
import { ContactSocialMediaSection } from '../components/ContactSocialMediaSection';
import { ContactResumeSection } from '../components/ContactResumeSection';

const Contact = () => {
  return (
    <>
      <Header />
      <h1 className="text-center text-info text-capitalize mt-2 mb-4 pageTitle"> contact/about </h1>
      <hr />
      <div className="col-sm-12 contactColumn-1 text-center">
        <h4 className="text-info py-4"> A little about me: </h4>
        <p className="aboutPara"> I am a full stack web developer and graphic designer. </p>
        <p className="aboutPara"> I have working knowledge of Web Development, Digital Marketing and Graphic Design. <br /> HTML5, CSS3, Bootstrap-4, Media Query, JavaScript, JQuery, NodeJS, Express, MySQL, Sequelize, MongoDB, React.js, Git, GitHub, GitHub Pages, Heroku are my web development tools. <br /> Similarly, Adobe CS5 Design Premium (Photoshop, Illustrator, InDesign) are my main graphic design tools.</p> <br />

        <ContactSocialMediaSection />

        <hr className="contactHr" />

        <ContactResumeSection />
      </div>
      <Footer />
    </>
  )
}
export default Contact;