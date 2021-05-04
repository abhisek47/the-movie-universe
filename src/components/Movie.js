import React from 'react';

const Movie = ({ movie }) => {
  return (
    <div className='my-2 w-full bg-gray-50 p-5' key={movie.id}>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
          alt={movie.title + ' poster'}
        />
      </div>
      <div className='py-4'>
        <h1 className='text-base md:text-lg'>{movie.title}</h1>
        <p className='my-2 text-gray-500 text-sm'>{movie.release_date} </p>
      </div>
    </div>
  );
};

export default Movie;
