import React from 'react';
import Header from './Header';
import StoryList from './StoryList';
import Photos from './Photos';
import Bio from './Bio';

function Navbar() {
  return (
    <div>
      <Header />
      <StoryList />
      <Photos />
      <Bio />
    </div>
  );
}
export default Navbar;
