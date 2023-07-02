import React from 'react';

function Home() {
  return (
    <>
      <aside
        className={` 'translate-x-0' '-translate-x-full sm:translate-x-0' } fixed left-0 top-0 z-40 h-screen w-64 transform 
          overflow-y-auto border-r bg-white transition-all duration-300 ease-in-out
        dark:bg-gray-800 sm:static sm:left-auto`}
        aria-label="Sidebar"
      ></aside>
    </>
  );
}

export default Home;
