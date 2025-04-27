import React from 'react';
import { useMyList } from '../contexts/MyListContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MyList = () => {
  const { myList, removeFromMyList } = useMyList();

  return (
    <div className="min-h-screen px-10 py-4 bg-black text-white">
      <Navbar />
      <h1 className="text-3xl flex items-center justify-center font-bold mt-12 mb-8">🎬 My List</h1>

      {myList.length === 0 ? (
        <p className="text-gray-400">No movies in your list yet.</p>
      ) : (
        <div className="flex flex-col gap-6">
          {myList.map(movie => (
            <div key={movie.id} className="flex items-center gap-4 bg-gray-800 p-4 rounded-lg">
              <img
                src={movie.poster_path ? `https://image.tmdb.org/t/p/w200${movie.poster_path}` : '/no-movie.png'}
                alt={movie.title}
                className="w-24 h-36 object-cover rounded"
              />
              <div className="flex-1">
                <h2 className="text-xl font-bold">{movie.title}</h2>
                <p className="text-yellow-400 mt-1">⭐ {movie.vote_average.toFixed(1)}</p>
              </div>
              <button
                onClick={() => removeFromMyList(movie.id)}
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full cursor-pointer"
              >
                ❌ Remove
              </button>
            </div>
          ))}
        </div>
      )}
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default MyList;
