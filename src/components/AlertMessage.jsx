import React from 'react';
import { Alert} from 'react-bootstrap';

import '../styles/components/AlertMessage.scss';

const AlertMessage = ({ showAlert, showModal, onClose }) => {
  return (
    <Alert
      className='alert-message' 
      show={showAlert}
      onClose={onClose}
      dismissible
    >
      <h2 className='alert-message__header'>Looks like you're done!</h2>
      <button 
        className='btn btn--show-noms'
        onClick={showModal}
      >Show nominations</button>
    </Alert>
  )
}
export default AlertMessage;