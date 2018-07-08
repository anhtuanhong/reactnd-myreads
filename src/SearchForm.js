import React, { Component } from 'react'
import BooksList from './BooksList'
import * as BooksAPI from './BooksAPI'

import { Link } from 'react-router-dom'

class SearchForm extends Component {
  state = {
    books: [],
    query: ''
  }

  queryBooks = (query) => {
    this.setState( () => ({
      query: query
    }))
    BooksAPI.search( query )
      .then( (books) => {
        if( books && books.length > 0 ){
          this.setState( () => ({
            books: books
          }))
        }else{
          this.setState( () => ({
            books: []
          }))
        }
      })
  }

  render() {
    const { books, query } = this.state
    const { savedBooks, onStatusChange } = this.props


    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link 
            to='/'
            className='close-search'
          >Close</Link>
          <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
            <input 
              type="text"
              className="SearchField" 
              placeholder="Search by title or author"
              value={ query }
              onChange={(event) => this.queryBooks( event.target.value )}
            />
          </div>
        </div>
        <div className="search-books-results">
          <BooksList 
            title={ `Search Results | Count=${books.length}` }
            books={ books }
            onStatusChange={ onStatusChange } 
          />
        </div>
      </div>
    )
  }
}

export default SearchForm
