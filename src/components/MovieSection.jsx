import MovieCard from "./MovieCard";

const Section = ({ title, movies }) => {

    return (
        <div className="mt-5 mb-10">
      <h2 className="text-2xl sm:text-3xl text-white font-bold mb-4">{title}</h2>
  
      <div className="flex overflow-x-auto space-x-4 scrollbar-hide">
        {movies.map(movie => (
          <div key={movie.id} className="flex-shrink-0 w-48 sm:w-56">
            <MovieCard movie={movie} />
          </div>
        ))}
      </div>
    </div>
    )
};

export default Section;