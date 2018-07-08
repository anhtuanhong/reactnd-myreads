import React, { Component } from 'react'
import OpenSearch from './OpenSearch'
import BooksList from './BooksList'
import SearchForm from './SearchForm'

import * as BooksAPI from './BooksAPI'

import { Route } from 'react-router-dom'

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

  statusChange = ( book, shelf ) => {
    BooksAPI.update( book, shelf )
      .then( () => {
        BooksAPI.getAll()
          .then( (books) => {
            if( books.length > 0 ){
              this.setState( () => ({
                books
              }))
            }
          })
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
                <BooksList 
                  title={ 'Currently Reading' }
                  books={ books.filter( (book) => ( book.shelf === 'currentlyReading' ))} 
                  onStatusChange={ this.statusChange } 
                />
                <BooksList 
                  title={ 'Want to Read' }
                  books={ books.filter( (book) => ( book.shelf === 'wantToRead' ))} 
                  onStatusChange={ this.statusChange }
                />
                <BooksList 
                  title={ 'Read' }
                  books={ books.filter( (book) => ( book.shelf === 'read' ))}
                  onStatusChange={ this.statusChange } 
                />
              </div>
            </div>
            <OpenSearch />
          </div> 
        )} />

        <Route path='/search' render={ ( {history} ) => (
          <SearchForm onStatusChange={ this.statusChange } />
        )} />
      </div>
    )
  }
}

export default App
