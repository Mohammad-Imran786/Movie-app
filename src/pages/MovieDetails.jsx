import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Spinner from '../components/Spinner';
import AddToMyListButton from '../components/AddToMyListButton';
import Navbar from '../components/Navbar';

const MovieDetails = () => {

  const { id } = useParams();

  const [movie, setMovie] = useState(null);
  const [credits, setCredits] = useState(null);
  const [loading, setLoading] = useState(true);

  const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
  const BASE_URL = 'https://api.themoviedb.org/3';
  const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const [movieRes, creditsRes] = await Promise.all([
          fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`),
          fetch(`${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}`),
        ]);

        const movieData = await movieRes.json();
        const creditsData = await creditsRes.json();

        setMovie(movieData);
        setCredits(creditsData);
      } catch (error) {
        console.error('Failed to fetch movie details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen text-white text-xl">
        <Spinner />
      </div>
    );
  }

  if (!movie || !credits) {
    return (
      <div className="flex justify-center items-center h-screen text-white text-xl">
        Movie not found.
      </div>
    );
  }

  const director = credits.crew.find(person => person.job === 'Director');
  const topCast = credits.cast.slice(0, 5);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white px-4 py-10">
      <Navbar />
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start mt-12 gap-8">

        <img
          src={movie.poster_path ? `${IMAGE_URL}${movie.poster_path}` : '/no-image.jpg'}
          alt={movie.title}
          className="w-full md:w-1/3 rounded-lg shadow-lg object-cover"
        />


        <div className="flex-1">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{movie.title}</h1>


          <p className="text-yellow-400 text-lg mb-4">
            Rating: {movie.vote_average.toFixed(1)} ⭐
          </p>


          <p className="text-gray-300 mb-6">
            {movie.overview}
          </p>


          {director && (
            <p className="text-lg font-semibold mb-4">
              Director: <span className="text-gray-300">{director.name}</span>
            </p>
          )}


          <div>
            <h2 className="text-2xl font-semibold mb-4">Top Cast</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {topCast.map(cast => (
                <div key={cast.id} className="flex flex-col items-center">
                  <img
                    src={cast.profile_path ? `https://image.tmdb.org/t/p/w185${cast.profile_path}` : '/no-movie.png'}
                    alt={cast.name}
                    className="w-24 h-24 object-cover rounded-full mb-2"
                  />
                  <p className="text-sm text-gray-300 text-center">{cast.name}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <AddToMyListButton movie={movie} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
