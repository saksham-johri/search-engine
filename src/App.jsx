import React, { Suspense } from 'react';
const Landing = React.lazy(() => import('./containers/Landing'));

const App = () => {
  return (
    <div className='app'>
      <Suspense
        fallback={
          <div className='lazy-loading'>
            <p>Loading...</p>
          </div>
        }
      >
        <Landing />
      </Suspense>
    </div>
  );
};

export default App;
