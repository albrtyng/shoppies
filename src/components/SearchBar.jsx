import React from 'react';
import { Form, Button } from 'react-bootstrap';

import '../styles/components/SearchBar.scss';

const SearchBar = ({ searchQuery, handleChange, handleSubmit }) => {
  return (
    <Form className='search' onSubmit={handleSubmit}> 
      <Form.Control
        className='search__input'
        placeholder='Search for movies...'
        value={searchQuery}
        onChange={handleChange}
      />
      <Button onClick={handleSubmit}>Search</Button>
    </Form>
  )
}

export default SearchBar;