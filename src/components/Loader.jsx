import React, { useState, useEffect } from 'react';
import './Loader.css';

const Loader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className={`loader-container ${!isLoading ? 'fade-out' : ''}`}>
      <div className="loader">
        <div className="loader-circle"></div>
        <div className="loader-circle"></div>
        <div className="loader-circle"></div>
        <div className="loader-text">
          <h1>VR</h1>
          <p>Loading Portfolio...</p>
        </div>
      </div>
    </div>
  );
};

export default Loader;
