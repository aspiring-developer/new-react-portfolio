import React from 'react';
import ProjectThumbs from '../components/ProjectThumbs';

const npsVisitorGithub = "https://github.com/ssh1sharma/Work-Day-Scheduler";
const employeeDirectoryGithub = "https://github.com/ssh1sharma/Weather-Dashboard";
const  workoutTrackerGithub = "https://github.com/ssh1sharma/Password-Generator";
const npsVisitorLink = "https://burger-app-sh.herokuapp.com/";
const employeeDirectoryLink = "https://ssh1sharma.github.io/Weather-Dashboard/";
const workoutTrackerLink = "https://ssh1sharma.github.io/Password-Generator/";

export const ProjectBottomRow = () => {
  return (
    <>
      <div className="row d-flex justify-content-center align-items-center text-center mx-auto">
        <ProjectThumbs
          image="../../images/nps-visitor-api-ui-204x175.jpg"
          projectName={<a href={npsVisitorLink}>Park Visitor Guide</a>}
          projectDescription="This app helps visitors find some historic parks in the states. It was built using NPS API."
          githubLink={<a href={npsVisitorGithub}>Details in GitHub</a>}
        />
        <ProjectThumbs
          image="../../images/employee-directory-ui-204x175.jpg"
          projectName={<a href={employeeDirectoryLink}>Employee Directory</a>}
          projectDescription="A React.js based employee directory app. It was built using a third-party API at Randomuser.me."
          githubLink={<a href={employeeDirectoryGithub}>Details in GitHub</a>}
        />
        <ProjectThumbs
          image="../../images/workout-tracker-ui-204x175.jpg"
          projectName={<a href={employeeDirectoryLink}>Workout Tracker</a>}
          projectDescription="A workout tracker app: built using NodeJs, Express, MongoDB with Mongoose Schema."
          githubLink={<a href={workoutTrackerGithub}>Details in GitHub</a>}
        />
      </div>
    </>
  )
}
