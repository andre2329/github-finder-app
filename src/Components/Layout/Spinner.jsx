import React from 'react';
// import spinner from './Assets/spinner.gif';
function Spinner() {
  return (
    <div className='w-100 mt-20 flex justify-center'>
      <div className='btn btn-lg btn-circle loading text-center mx-auto' />
      {/* <img
        width={180}
        className='text-center mx-auto'
        src={spinner}
        alt='ladong ...'
      /> */}
    </div>
  );
}

export default Spinner;
