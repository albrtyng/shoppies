import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import axios from 'axios';
import qs from 'query-string';
import { motion } from 'framer-motion';

import MovieListItem from './MovieListItem';
import { movieList, staggerMovies } from '../assets/animations.js';

import '../styles/components/MovieList.scss';

const MovieList = (props) => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');

  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    const queryParams = qs.parse(location.search);
    if ('search' in queryParams) {
      axios.get(
        `${process.env.REACT_APP_OMDB_URL}?s=${queryParams.search}&type=movie&apikey=${process.env.REACT_APP_API_KEY}`
      )
      .then(res => {
        setSearch(queryParams.search);
        setMovies(res.data.Search || []);
      })
    }
  }, [location.search])

  return (
    <div className='movies'>
      <motion.div
        className='movies__list'
        variants={movieList}
        initial='hide'
        animate='show'
        exit='hide'
      >
        <svg className='btn--back' onClick={() => {history.push('/home')}}>
          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5.5a.5.5 0 0 0 0-1H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5z"/>
        </svg>
        <p className='movies__text'>Search results for "{search}"</p>
        <motion.div
          variants={staggerMovies}
          initial='hide'
          animate={movies.length > 0 ? 'show' : 'hide'}
          exit='hide'
        >
          {
            movies.map(movie => (
              <MovieListItem
                key={movie.imdbID}
                {...movie}
                handleSelect={props.handleSelect}
                isChecked={
                  props.nominations.findIndex(
                    nom => nom.imdbID === movie.imdbID
                  ) !== -1
                }
              />
            ))
          }
        </motion.div>
        {
          movies.length === 0 ? (
            <p className='movies__text'>No movies found</p>
          ) : null
        }
      </motion.div>
    </div>
  );
}

export default MovieList;