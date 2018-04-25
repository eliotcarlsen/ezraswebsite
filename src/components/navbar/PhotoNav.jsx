import React from 'react';
import { Link } from 'react-router-dom';

function PhotoNav() {
  return (
    <div>
      <Link to="/photos"><h3>Photos</h3></Link>
    </div>
  );
}

export default PhotoNav;
