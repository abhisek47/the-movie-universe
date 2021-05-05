import React from 'react';
import { motion } from 'framer-motion';

const Movie = ({ movie }) => {
  return (
    <motion.div
      initial='hidden'
      animate='visible'
      variants={{
        hidden: {
          scale: 0.8,
          opacity: 0,
        },
        visible: {
          scale: 1,
          opacity: 1,
        },
      }}>
      <div className='my-2 w-full bg-gray-50 p-5' key={movie.id}>
        <motion.div
          whileHover={{
            position: 'relative',
            zIndex: 1,
            background: 'white',
            scale: 1.1,
            transition: {
              duration: 0.2,
            },
          }}>
          <div className='cursor-pointer'>
            <img
              className='w-full'
              src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
              alt={movie.title + ' poster'}
            />
          </div>
        </motion.div>
        <div className='pt-6'>
          <h1 className='text-base md:text-lg'>{movie.title}</h1>
          <p className='my-2 text-gray-500 text-sm'>{movie.release_date} </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Movie;
