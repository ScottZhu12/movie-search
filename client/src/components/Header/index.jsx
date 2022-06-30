import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='header'>
      <h1 className='heading'>welcome to application</h1>

      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/create'>Add a Movie</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
