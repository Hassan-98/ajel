import React from 'react';
//= Components
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';


type Props = {
  children: JSX.Element | JSX.Element[];
};

const InnerPagesLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

export default InnerPagesLayout