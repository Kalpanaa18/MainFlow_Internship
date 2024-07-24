// App.js
import React, { useState } from 'react';
import axios from 'axios';
import Search from './Search';
import MovieList from './MovieList';
import './App.css';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');
  const handleSearch = async (query) => {
    const API_KEY = 'YOUR_OMDB_API_KEY';
    const URL = `http://www.omdbapi.com/?i=tt3896198&apikey=98173c47`;

    try {
      const response = await axios.get(URL);
      if (response.data.Response === 'True') {
        setMovies(response.data.Search);
        setError('');
      } else {
        setMovies([]);
        setError(response.data.Error);
      }
    } catch (error) {
      setError('An error occurred while fetching data.');
    }
  };

  return (
    
    <div className="App">
      <h1>Movie Land </h1>
      <h1>Search your movie here:</h1>
      <Search onSearch={handleSearch} />
      {error && <p className="error">{error}</p>}
      <MovieList movies={movies} />
    </div>
  );
};

export default App;
