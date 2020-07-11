import React from 'react';
import ProjectThumbs from '../components/ProjectThumbs';

export const ProjectMiddleRow = () => {
  return (
    <>
     <div className="row d-flex justify-content-center align-items-center text-center mx-auto">
         <ProjectThumbs
        link="https://ssh1sharma.github.io/Work-Day-Scheduler/"
        image="../../images/workday-scheduler-ui-204x175.jpg"
        projectName="Day Planner"
        projectDescription="A Javascript and jQuery based app that helps create a daily schedule. Moment time and date object used."
        githubLink="Details in GitHub"
      />
         <ProjectThumbs
        link="https://ssh1sharma.github.io/Weather-Dashboard/"
        image="../../images/weather-dashboard-ui-204x175.jpg"
        projectName="Weather Dashboard"
        projectDescription="This app helps to search a city weather. It displays current weather and 5-days forecast. It was built using a third-party API."
        githubLink="Details in GitHub"
      />
         <ProjectThumbs
        link="https://ssh1sharma.github.io/Password-Generator/"
        image="../../images/password-generator-ui-204x175.jpg"
        projectName="Password Generator"
        projectDescription="An html-validated password generator app. It randomly creates a password based on letters, numbers and special characters. "
        githubLink="Details in GitHub"
      />
      </div> 
    </>
  )
}
