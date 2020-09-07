import React, { useState } from 'react';
import {
  Route,
  Switch,
  useLocation,
  Redirect
} from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import AlertMessage from './components/AlertMessage';
import HomePage from './pages/HomePage';
import MovieList from './components/MovieList';
import NominationModal from './components/NominationModal';

import './styles/App.scss';

const App = () => {
  const location = useLocation();

  const [nominations, setNominations] = useState([]);
  const [showAlert, setShowAlert] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleSelect = movie => {
    setNominations(
      currentNoms => {
        if (currentNoms.find(nom => nom.imdbID === movie.imdbID)) {
          if (currentNoms.length <= 5) {
            setShowAlert(false);
          }
          return currentNoms.filter(nom => nom.imdbID !== movie.imdbID)
        } else {
          if (currentNoms.length === 5) {
            setShowAlert(true);
          } else if (currentNoms.length <= 4) {
            if (currentNoms.length === 4) {
              setShowAlert(true);
            }
            return [...currentNoms, movie]
          }

          return currentNoms;
        }
      }
    )
  }

  return (
    <div className='app'>
      <AlertMessage
        key='alert-message'
        showAlert={showAlert}
        showModal={() => setShowModal(true)}
        onClose={() => setShowAlert(false)}
      />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route exact path='/home' render={
            () => (
              <HomePage
                nominations={nominations}
                setShow={setShowModal}
              />
            )
          } />
          <Route path='/movies' render={
            () => {
            return (
              <MovieList
                handleSelect={handleSelect}
                nominations={nominations}
              />
            )
          }} />
          <motion.div exit={{ opacity: 0 }}>
            <Redirect exact from='/' to='/home' />
          </motion.div>
        </Switch>
      </AnimatePresence>
      <NominationModal
        key='nomination-modal'
        show={showModal}
        onHide={() => setShowModal(false)}
        nominations={nominations}
        handleSelect={handleSelect}
      />
    </div>
  );
}

export default App;
