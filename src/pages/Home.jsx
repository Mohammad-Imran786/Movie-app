import React from 'react'
import MoviesList from '../components/MoviesList'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Header from '../components/Header'

const Home = () => {
  return (
    <div>
      <Header />
      <MoviesList />
      <Footer />
    </div>
  )
}

export default Home