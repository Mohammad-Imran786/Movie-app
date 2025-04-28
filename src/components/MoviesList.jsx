import { useEffect, useState } from 'react';
import { fetchFromTMDB } from '../api/tmdb';
import Spinner from './Spinner';
import MovieSection from './MovieSection';

const MoviesList = () => {

  const [nowPlaying, setNowPlaying] = useState([]);
  const [popular, setPopular] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const fetchMovies = async () => {
      try {
        const [popularData, topRatedData, nowPlayingData, upcomingData] = await Promise.all([
          fetchFromTMDB('/movie/now_playing'),
          fetchFromTMDB('/movie/popular'),
          fetchFromTMDB('/movie/top_rated'),
          fetchFromTMDB('/movie/upcoming'),
        ]);

        setNowPlaying(nowPlayingData.results);
        setPopular(popularData.results);
        setTopRated(topRatedData.results);
        setUpcoming(upcomingData.results);
      } 
      catch (error) {
        console.error('Error fetching movies:', error);
      } 
      finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [])

  if (loading) {
    <div className="flex justify-center items-center h-screen">
        <Spinner />
    </div>
  }

  return (
    <div className="p-4">
      <MovieSection title="Now Playing" movies={nowPlaying} />
      <MovieSection title="Popular Movies" movies={popular} />
      <MovieSection title="Top Rated Movies" movies={topRated} />
      <MovieSection title="Upcoming Movies" movies={upcoming} />
    </div>
  )
};

export default MoviesList;
