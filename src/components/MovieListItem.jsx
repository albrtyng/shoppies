import React from 'react';
import { Form } from 'react-bootstrap';
import { motion } from 'framer-motion';

import { movieItem } from '../assets/animations.js';

import '../styles/components/MovieListItem.scss';

const MovieListItem = ({ imdbID, Poster, Title, Year, handleSelect, isChecked }) => {
  return (
    <motion.div
      className={`movie ${isChecked ? 'movie--selected' : ''}`}
      variants={movieItem}
    >
      <img
        className='movie__poster'
        src={Poster === 'N/A' ? require('../assets/images/no-poster.jpg') : Poster}
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