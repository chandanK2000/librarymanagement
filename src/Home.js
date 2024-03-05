import React from 'react';
import Header from './components/header/Header';
import './Home.css'; 
import Footer from './components/footer/Footer';
import ScrollToTopButton from './ScrollToTopButton';
import ScrollIndicator from './ScrollIndicator';

const Home = () => {
  return (
    <div className="home-page">

      <Header />
      <ScrollIndicator />
      <div className="background-image">
        {/* Content */}
      </div>
    <Footer/>
    <ScrollToTopButton />

    </div>
  );
};

export default Home;
