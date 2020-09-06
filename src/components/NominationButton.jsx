import React from 'react';

import Ballot from '../assets/images/ballot.svg';

import '../styles/components/NominationButton.scss';

const NominationButton = ({ count, openModal }) => {
  return (
    <div  className='nom-button' onClick={openModal}>
      <img
        className='nom-button__ballot'
        src={Ballot}
        alt='The ballot icon'
      />
      <div className={
        `nom-button__count ${
          count > 0 ? 'nom-button__count--enabled' : ''}`
      }>
        {count}
      </div>
    </div>
  )
}

export default NominationButton;