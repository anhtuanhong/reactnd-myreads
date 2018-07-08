import React, { Component } from 'react'
import Book from './Book'

class BookList extends Component{

  render(){
    const{ statusChange } = this.props

    return ( 
      <div className="bookshelf">
        <h2 className="bookshelf-title">Currently Reading</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            { books.map( (book) => (
              <li key={ book.id }>
                <Book book={ book } onStatusChange={ statusChange } />
              </li>
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default BookList;