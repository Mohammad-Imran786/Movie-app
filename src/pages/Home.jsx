import React from 'react';
import MoviesList from '../components/MoviesList';
import Footer from '../components/Footer';
import Hero from '../components/Hero';

const Home = () => {

  return (
    <div>
      <Hero />
      <MoviesList />
      <Footer />
    </div>
  )
};

export default Home;