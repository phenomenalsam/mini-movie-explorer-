// src/App.jsx
import React, { useState, useEffect } from 'react';
import './App.css';

// Movie Card Component
const MovieCard = ({ movie }) => {
    const imageUr1 = movie.poster_path ?
    `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    :
    'https://via.placeholder.com/500x750?text =No +Image';

  return (
    <div className="movie-card">
      <img src={imageUr1} alt={movie.title} />
      <h3>{movie.title}</h3>
      <p>{movie.overview}</p>
    </div>
  );
};

const App = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch movie data from TMDb or any other API
    const fetchMovies = async () => {
      try {
        const response = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=YOUR_API_KEY');
        const data = await response.json();
        setMovies(data.results);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data: ', error);
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="app">
      <h1>Mini Movie Explorer</h1>
      <div className="movie-list">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default App;