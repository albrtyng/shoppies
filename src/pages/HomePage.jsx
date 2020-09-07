import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useHistory } from 'react-router-dom';

import Footer from '../components/Footer';
import SearchBar from '../components/SearchBar';

import '../styles/pages/HomePage.scss';
import Header from '../components/Header';

const HomePage = ({ nominations, setShow }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const history = useHistory();

  const handleSearchChange = e => {
    e.preventDefault(); 
    setSearchQuery(e.target.value)
  }

  const handleSearchSubmit = e => {
    e.preventDefault();
    if (searchQuery.length >= 3) {
      history.push(`/movies?search=${searchQuery}`);
    }
  }
  return (
    <div className='home'>
      <motion.div
        className='home__hero'
        initial={{ y: -550 }}
        animate={{ y: 0 }}
        exit={{ y: -550 }}
        transition={{ duration: 1.5 }}
      >
        <Header
          count={nominations.length}
          openModal={() => setShow(true)}
        />
        <h1 className='home__title'>Nominate up to 5 movies</h1>
        <p className='home__boast'>Trusted by over 1 person worldwide</p>
        <SearchBar
          handleChange={e => { handleSearchChange(e) }}
          handleSubmit={e => { handleSearchSubmit(e) }}
          searchQuery={searchQuery}
        />
        <p className='home__disclaimer'>
          Hire Albert Yang for 4-8 months, no maintenance required.
          By checking out this submission, you agree to follow-up with Albert on his Life Story.
        </p>
      </motion.div>
      <Footer />
    </div>
  )
}

export default HomePage