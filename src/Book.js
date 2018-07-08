import React, { Component } from 'react'

class Book extends Component{

  updateStatus = ( event ) => {
    this.props.onStatusChange( this.props.book, event.target.value )
  }

  render(){
    const { book } = this.props
    return ( 
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: (book.imageLinks)? `url( ${book.imageLinks.thumbnail} )` : '' }}></div>
          <div className="book-shelf-changer">
            <select value={ book.shelf } onChange={ this.updateStatus }>
              <option value="move" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{ book.title} </div>
        <div className="book-authors">{ ( book.authors ) ? book.authors.map( (author) => ( author ) ) : '' }</div>
      </div>
    )
  }
}

export default Book;