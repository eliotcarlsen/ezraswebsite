import React from 'react';
import Header from './Header';
import Stories from './Stories';
import Photos from './Photos';
import Bio from './Bio';

function Navbar() {
  return (
    <div>
      <Header/>
      <Stories/>
      <Photos/>
      <Bio/>
    </div>
  );
}
export default Navbar;
