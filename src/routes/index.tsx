import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//= Layouts
import MainLayout from '../layouts/Main.layout';
import InnerPagesLayout from '../layouts/InnerPages.layout';
//= Pages
import Home from '../pages/Home';
import AboutUs from '../pages/AboutUs';
import Features from '../pages/Features';
import HowTo from '../pages/HowTo';
import Partners from '../pages/Partners';
import Contact from '../pages/Contact';
import NotFound from '../pages/NotFound';

type LayoutProps = {
  children: JSX.Element | JSX.Element[];
};

type PageWrapperProps = {
  Layout?: React.FC<LayoutProps>;
  Page: React.FC;
}

const PageWrapper = ({ Layout = MainLayout, Page }: PageWrapperProps) => (<Layout><Page /></Layout>);

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PageWrapper Page={Home} />} />
        <Route path="/about-us" element={<PageWrapper Page={AboutUs} Layout={InnerPagesLayout} />} />
        <Route path="/features" element={<PageWrapper Page={Features} Layout={InnerPagesLayout} />} />
        <Route path="/how-to" element={<PageWrapper Page={HowTo} Layout={InnerPagesLayout} />} />
        <Route path="/partners" element={<PageWrapper Page={Partners} Layout={InnerPagesLayout} />} />
        <Route path="/contact-us" element={<PageWrapper Page={Contact} Layout={InnerPagesLayout} />} />
        <Route path="*" element={<PageWrapper Page={NotFound} Layout={InnerPagesLayout} />} />
      </Routes>
    </Router>
  )
}

export default AppRoutes