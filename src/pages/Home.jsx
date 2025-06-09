import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className='home'>
      <h1>Welcome to Plantify 🌿</h1>
      <p>Your trusted store for houseplants. Fresh, green, and delivered to your door!</p>
      <button onClick={() => navigate('/products')}>Get Started</button>
    </div>
  );
};

export default Home;