import React from 'react'
import Header from '../components/Header';
import { Footer } from '../components/Footer';
import { ProjectTopRow } from '../components/ProjectTopRow';
import { ProjectMiddleRow } from '../components/ProjectMiddleRow';
import { ProjectBottomRow } from '../components/ProjectBottomRow';

const Portfolio = (props) => {
  return (
    <>
      <Header />
      <h1 className="text-center"> Portfolio </h1>
      <hr />
      <ProjectTopRow />
      <hr />
      <ProjectMiddleRow />
      <hr />
      <ProjectBottomRow />
      <Footer />
    </>
  )
}
export default Portfolio;