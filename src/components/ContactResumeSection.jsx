import React from 'react'

export const ContactResumeSection = () => {
  return (
    <>
      <p className="aboutPara text-center"> In my spare time, I like doing natural landscape and portrait oil paintings. <br /> I have some knowledge on chalkboard writing and digital drawing. </p>
      <p className="aboutPara text-center">If you are interested to view some of my works, click the button below. </p>
      <hr className="contactHr" />
      <a href="../../images/Shiva-Resume-Web-Dev.pdf" target="_blank" id="resume-button"> <button type="button" className="btn">Download Resumé</button> </a>
      <a href="https://personal-react-site.netlify.app/" target="_blank" rel="noopener noreferrer" id="personal-webpage-button"> <button type="button" className="btn">Go To My Personal Page</button> </a>
    </>
  )
}