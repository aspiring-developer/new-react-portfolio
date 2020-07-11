import React from 'react';
import ProjectThumbs from '../components/ProjectThumbs';

export const ProjectBottomRow = () => {
  return (
    <>
      <div className="row d-flex justify-content-center align-items-center text-center mx-auto">
        <ProjectThumbs
          link="https://burger-app-sh.herokuapp.com/"
          image="../../images/nps-visitor-api-ui-204x175.jpg"
          projectName="Park Visitor Guide"
          projectDescription="This app helps visitors find some historic parks in the states. It was built using NPS API."
          githubLink="Details in GitHub"
        />
        <ProjectThumbs
          link="https://richardkessler.github.io/Job-and-News-Search/"
          image="../../images/employee-directory-ui-204x175.jpg"
          projectName="Employee Directory"
          projectDescription="A React.js based employee directory app. It was built using a third-party API at Randomuser.me."
          githubLink="Details in GitHub"
        />
        <ProjectThumbs
          link="https://sequelize-burger-app-sh.herokuapp.com/"
          image="../../images/workout-tracker-ui-204x175.jpg"
          projectName="Burger App-2"
          projectDescription="A Sequelize app that functions like the Burger-1 on the left, but it was built using ORM technology."
          githubLink="Details in GitHub"
        />
      </div>
    </>
  )
}
