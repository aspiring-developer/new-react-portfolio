import React from 'react';
import Header from '../components/Header';
import { NameSection } from '../components/NameSection';
import { DrawingMonitor } from '../components/DrawingMonitor';
import { DrawingBase } from '../components/DrawingBase';
import { Footer } from '../components/Footer';


const Home = () => {
  return (
    <>
      <Header />
      <NameSection />
     <DrawingMonitor />
     <DrawingBase /> 
     <Footer />
    

    </>
  )
};
export default Home;