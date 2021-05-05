import React from 'react';
import Search from './components/Search';
import { motion } from 'framer-motion';

const App = () => {
  return (
    <>
      <section className='bg-gray-800'>
        <div className='container mx-auto'>
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
                transition: {
                  delay: 0.5,
                },
              },
            }}>
            <h1 className='text-2xl text-gray-50 text-center p-5'>
              The Movie Universe
            </h1>
          </motion.div>
        </div>
      </section>
      <Search />
    </>
  );
};

export default App;
