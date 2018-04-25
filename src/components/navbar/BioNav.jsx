import React from 'react';
import { Link } from 'react-router-dom';

function BioNav() {
  return (
    <div>
      <Link to="/about"><h3>Bio</h3></Link>
    </div>
  );
}

export default BioNav;
