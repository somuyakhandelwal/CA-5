import React, { useEffect, useState } from 'react';
import './App.css';
import { Route, Routes, Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooks } from './Redux/Slice/Book';
import Form from './components/RegistrationForm/Form';
import BooksList from './components/Books/BookList';
import Logo from './components/Navbar/Logo';
import SearchBox from './components/Navbar/SearchBox';
import Register from './components/Navbar/Register';

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  const state = useSelector((state) => state);
  const { data, isLoading, isError } = state.book;

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const isRegisterFormRoute = window.location.pathname === '/Register-Form';

  return (
    <>
      <nav className='Nav'>
        <Link style={{ textDecoration: 'none' }} className='logo' to="/">
          <Logo />
        </Link>
        {!isRegisterFormRoute && <SearchBox onSearch={handleSearch} />}
        <Link style={{ textDecoration: 'none' }} to="/Register-Form">
          <Register />
        </Link>
      </nav>
      <Routes>
        <Route
          path='/'
          element={<BooksList data={data} isLoading={isLoading} isError={isError} searchTerm={searchTerm} />}
        />
        <Route path='/Register-Form' element={<Form />} />
      </Routes>
    </>
  );
}

export default App;
