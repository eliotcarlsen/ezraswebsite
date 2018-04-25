import React from 'react';
import HeaderNav from './HeaderNav';
import StoryNav from './StoryNav';
import PhotoNav from './PhotoNav';
import BioNav from './BioNav';

function Navbar() {
  var styles = {
  };
  return (
    <div style={styles}>
      <HeaderNav />
      <StoryNav />
      <PhotoNav />
      <BioNav />
    </div>
  );
}
export default Navbar;
