import React from 'react';

import NominationButton from '../components/NominationButton';

import Logo from '../assets/logo.svg';

import '../styles/components/Header.scss';

const Header = ({ count, openModal }) => {
  return (
    <div className='header'>
      <img
        className='header__logo'
        src={Logo}
        alt='The shoppies logo'
      />
      <NominationButton count={count} openModal={openModal} />
    </div>
  )
}

export default Header;