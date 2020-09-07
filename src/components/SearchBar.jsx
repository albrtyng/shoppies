import React from 'react';
import { Form, Button } from 'react-bootstrap';

import '../styles/components/SearchBar.scss';

const SearchBar = ({ searchQuery, handleChange, handleSubmit, errorMessage }) => {
  return (
    <Form className='search' onSubmit={handleSubmit}> 
      <Form.Control
        className='search__input'
        placeholder='Search for movies...'
        value={searchQuery}
        onChange={handleChange}
      />
      <p className='search__error'>{errorMessage}</p>
      <Button onClick={handleSubmit}>Search</Button>
    </Form>
  )
}

export default SearchBar;