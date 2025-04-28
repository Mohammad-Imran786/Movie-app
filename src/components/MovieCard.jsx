import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie: { id, title, vote_average, poster_path } }) => {

  return (
    <Link to={`/movie/${id}`}>
      <div className="bg-gray-800 p-3 rounded-lg hover:scale-105 transition-transform duration-300 shadow-lg">
        <img
          src={poster_path ? `https://image.tmdb.org/t/p/w300${poster_path}` : '/no-movie.png'}
          alt={title}
          className="rounded-md w-full h-auto object-cover"
        />
        <div className="mt-4">
          <h3 className="text-white text-center text-sm font-semibold">{title}</h3>
          <div className="flex items-center justify-center gap-1 mt-2">
          <p className="text-yellow-400 text-lg">⭐</p>
            <p className="text-white text-sm">{vote_average ? vote_average.toFixed(1) : 'N/A'}</p>
          </div>
        </div>
      </div>
    </Link>
  )
};

export default MovieCard;
