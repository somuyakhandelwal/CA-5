import React from 'react';
import './BookListStyle.css';
import CircularProgress from '@mui/material/CircularProgress';

const BooksList = ({ data, isLoading, isError, searchTerm }) => {

  const filteredBooks = data?.books?.filter((book) =>
  book.title.toLowerCase().startsWith(searchTerm.toLowerCase())
);

  return (
    <div className='books-list-container'>
      <h1 className='books-list-header'>Books List</h1>
      {isLoading && <CircularProgress className='loading' />}
      {isError && <h1 className='books-loading-error'>Error loading books</h1>}
      {filteredBooks && filteredBooks.length > 0 && (
        <div className='books-grid'>
          {filteredBooks.map((book) => (
            <div key={book.id} className='book-card'>
              <img
                src={book.imageLinks?.thumbnail || 'placeholder-image-url'}
                alt={book.title}
                className='book-image'
              />
              <p className='book-title'>{book.title}</p>
              <div className='book-details'>
                <p>★{book.averageRating || "N/A"} · {book.price || 'Free'}</p>
              </div>
            </div>
          ))}
        </div>
      )}
      {filteredBooks && filteredBooks.length === 0 && (
        <p>No matching books found.</p>
      )}
    </div>
  );
};

export default BooksList;
