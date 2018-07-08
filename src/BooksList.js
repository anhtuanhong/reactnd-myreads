import React, { Component } from 'react'
import Book from './Book'

class BooksList extends Component{

  render(){
    const{ title, books, onStatusChange } = this.props

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{ title }</h2>
        <div className="bookshelf-books">      
          <ol className="books-grid">
            { books.map( (book) => (
              <li key={ book.id }>
                <Book 
                  book={ book } 
                  onStatusChange={ onStatusChange } />
              </li>
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default BooksList