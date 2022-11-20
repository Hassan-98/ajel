import React from 'react';
//= Components
import Navbar from '../components/Layout/Navbar';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';


type Props = {
  children: JSX.Element | JSX.Element[];
};

const DefaultLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Navbar />
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default DefaultLayout