import React from 'react';
import { Modal } from 'react-bootstrap';

import '../styles/components/NominationModal.scss';
import MovieListItem from './MovieListItem';
import { motion } from 'framer-motion';

const staggerMovies = {
  hide: {
    opacity: 0,
    transition: {
      when: 'afterChildren',
      staggerChildren: 0.2
    }
  },
  show: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.2
    }
  }
}

const NominationModal = ({ show, onHide, nominations, handleSelect }) => {
  return (
    <Modal
      className='modal'
      show={show}
      onHide={onHide}
    >
      <motion.div
        variants={staggerMovies}
        initial='hide'
        animate='show'
        exit='hide'
      >
        <Modal.Header className='modal__header' closeButton>
          <Modal.Title className='modal__title'>
            {
              nominations.length < 5 ?
              'Nominations' : 'You\'re done!'
            }
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className='modal__body'>
          { nominations.map(movie => (
            <MovieListItem
              key={movie.imdbID}
              {...movie}
              handleSelect={handleSelect}
              isChecked={
                nominations.findIndex(
                  nom => nom.imdbID === movie.imdbID
                ) !== -1
              }
            />
          ))}
        </Modal.Body>
      </motion.div>
    </Modal>
  )
}

export default NominationModal;
