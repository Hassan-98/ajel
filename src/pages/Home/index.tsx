import React, { useEffect } from 'react';
//= Components
import About from '../../components/Home/About';
import Grow from '../../components/Features/Grow';
import Steps from '../../components/Home/Steps';
import JoinUs from '../../components/Home/JoinUs';
import StepsMarchant from '../../components/Home/StepsMarchant';
import Stats from '../../components/Home/Stats';
import Download from '../../components/Home/Download';
import Testimonials from '../../components/Home/Testimonials';
import Partners from '../../components/Home/Partners';

const Home: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <About />
      <Grow />
      <Steps />
      <JoinUs />
      <StepsMarchant />
      <Stats />
      <Download />
      <Testimonials />
      <Partners />
    </main>
  )
}

export default Home;