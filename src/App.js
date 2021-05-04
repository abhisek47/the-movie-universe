import React from 'react';
import Search from './components/Search';

const App = () => {
  return (
    <>
      <section className='bg-gray-800'>
        <div className='container mx-auto'>
          <h1 className='text-2xl text-gray-50 text-center p-5'>
            The Movie Universe
          </h1>
        </div>
      </section>
      <Search />
    </>
  );
};

export default App;
