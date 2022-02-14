import React from 'react';
import UserResults from '../Components/Users/UserResults';
import UserSeach from '../Components/Users/UserSeach';

function Home() {
  return (
    <>
      <UserSeach />
      <UserResults />
    </>
  );
}

export default Home;
