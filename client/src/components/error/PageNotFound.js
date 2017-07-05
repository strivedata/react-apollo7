import React from 'react';
import { Link } from 'react-router';

const PageNotFound = () => {
  return (
  <div className="center p-t-lg">
    <h1 className="color-headline">"Houston, we've had a problem"</h1>
    <div>
      <h2 className="color-error m-a-md">Ups. Something went wrong.</h2>
      <Link to="/"> Go back to homepage </Link>
    </div>
  </div>
  );
};

export default PageNotFound;
