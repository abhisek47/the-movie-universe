import React, { useState } from 'react';
import Movie from './Movie';

const Search = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const searchMovies = async (event) => {
    event.preventDefault();
    console.log('Submitting');

    const url = `https://api.themoviedb.org/3/search/movie?api_key=5f88a029034edb7208100a16c90d89c3&language=en-US&query=${query}&page=1&include_adult=false`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      setMovies(data.results);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <section>
        <div className='container mx-auto py-5 px-5 md:px-10'>
          <form
            action=''
            className='grid grid-cols-1 items-center'
            onSubmit={searchMovies}>
            <input
              type='text'
              name='query'
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className='py-2 px-3 border-2 border-gray-100  focus:outline-none'
              placeholder='i.e Iron Man'
            />
            <button
              type='submit'
              className='py-2 px-6 bg-blue-600 text-gray-50 focus:outline-none mt-4 w-max mx-auto hover:bg-blue-700'
              disabled={query.length < 1}>
              Search Movies
            </button>
          </form>
          <div className='my-10 grid grid-cols-2 md:grid-cols-4 gap-4'>
            {movies
              .filter((movie) => movie.poster_path)
              .map((movie) => (
                <Movie movie={movie} key={movie.id} />
              ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Search;
