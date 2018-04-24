import React from 'react';
import Header from './Header';
import Photos from './Photos';
import Bio from './Bio';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <Header />
      <div>
        <Link to="/stories">Stories</Link>
      </div>
      <Photos />
      <Bio />
    </div>
  );
}
export default Navbar;
