import React from 'react';
import ProjectThumbs from '../components/ProjectThumbs';

export const ProjectTopRow = () => {
  return (
    <>
     <div className="row d-flex justify-content-center align-items-center text-center mx-auto">
         <ProjectThumbs
        link="https://burger-app-sh.herokuapp.com/"
        image="../../images/burger-mysql-ui-204x175.jpg"
        projectName="Burger App-1"
        projectDescription="A MySQL app that lets users virtually create, view, edit, save and delete their favorite burgers."
        githubLink="Details in GitHub"
      />
         <ProjectThumbs
        link="https://richardkessler.github.io/Job-and-News-Search/"
        image="../../images/job-news-search-api-ui-204x175.jpg"
        projectName="Job & Article Search"
        projectDescription="An app that helps web-dev related job and article search. It was built using two third-party APIs."
        githubLink="Details in GitHub"
      />
         <ProjectThumbs
        link="https://sequelize-burger-app-sh.herokuapp.com/"
        image="../../images/burger-sequelize-ui-204x175.jpg"
        projectName="Burger App-2"
        projectDescription="A Sequelize app that functions like the Burger-1 on the left, but it was built using ORM technology."
        githubLink="Details in GitHub"
      />
      </div> 
    </>
  )
}
