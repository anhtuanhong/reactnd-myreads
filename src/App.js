import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import OpenSearch from './OpenSearch'
import BooksList from './BooksList'

import { Route, Link } from 'react-router-dom'

import './App.css'

class App extends Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */

    books: [],
  }

  componentDidMount(){ /** Load Books **/
    BooksAPI.getAll()
      .then( (books) => {
        this.setState( () => ({
          books
        }))
      })
  }

  render() {
    const{ books } = this.state

    return (
      <div className="app">

        <Route exact path='/' render={ () => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                  <div className="bookshelf-books">
                    <BooksList books={ books.filter( (book) => (
                      book.shelf === 'currentlyReading'
                    ))} />
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                  <div className="bookshelf-books">
                    <BooksList books={ books.filter( (book) => (
                      book.shelf === 'wantToRead'
                    ))} />
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <div className="bookshelf-books">
                    <BooksList books={ books.filter( (book) => (
                      book.shelf === 'read'
                    ))} />
                  </div>
                </div>
              </div>
            </div>
            <OpenSearch />
          </div> 
        )} />

        <Route path='/search' render={ ( {history} ) => (
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
                <input type="text" placeholder="Search by title or author"/>
              </div>
            </div>
            <div className="search-books-results">
              <BooksList books={ books } />
            </div>
          </div>
        )} />
      </div>
    )
  }
}

export default App
