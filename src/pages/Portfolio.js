import React from 'react'
import Header from '../components/Header';
import { Footer } from '../components/Footer';
import { ProjectTopRow } from '../components/ProjectTopRow';
import { ProjectMiddleRow } from '../components/ProjectMiddleRow';
import { ProjectBottomRow } from '../components/ProjectBottomRow';
import { WebThumbWrapper } from '../components/WebThumbWrapper';

const Portfolio = (props) => {
  return (
    <>
      <Header />

      <h1 className="text-center text-info text-capitalize mt-2 mb-4 pageTitle"> Portfolio </h1>
      <hr />
      <ProjectTopRow />
      <hr />
      <ProjectMiddleRow />
      <hr />
      <ProjectBottomRow />
      <hr />
      <WebThumbWrapper />
      <Footer />
    </>
  )
}
export default Portfolio;
