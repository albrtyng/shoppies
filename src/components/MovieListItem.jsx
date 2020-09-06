import React from 'react';
import { Form } from 'react-bootstrap';
import { motion } from 'framer-motion';

import '../styles/components/MovieListItem.scss';

const movieItem = {
  hide: {
    x: 1000, opacity: 0,
    transition: { duration: 1 }
  },
  show: {
    x: 0, opacity: 1, scale: 1,
    transition: { ease: 'easeInOut', duration: 1 }
  }
}

const MovieListItem = ({ imdbID, Poster, Title, Year, handleSelect, isChecked }) => {
  return (
    <motion.div
      className={`movie ${isChecked ? 'movie--selected' : ''}`}
      variants={movieItem}
    >
      <img
        className='movie__poster'
        src={Poster === 'N/A' ? require('../assets/no-poster.jpg') : Poster}
        alt='A movie poster'
      />
      <h3 className='movie__title'>{Title}</h3>
      <p className='movie__year'>{Year}</p>
      <Form.Check
        checked={isChecked}
        className='movie__radio'
        onChange={e => handleSelect({
          imdbID,
          Poster,
          Title,
          Year
        })}
      />
    </motion.div>
  )
}

export default MovieListItem;