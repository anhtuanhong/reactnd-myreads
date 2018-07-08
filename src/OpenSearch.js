import React from 'react'
import { Link } from 'react-router-dom'

const OpenSearch = (props) => (
	<div className="open-search">
    <Link 
      to='/search'
      className='to-search'
    >Add a book</Link>
  </div>
);

export default OpenSearch;