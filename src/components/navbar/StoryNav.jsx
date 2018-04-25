import React from 'react';
import { Link } from 'react-router-dom';

function StoryNav() {
  return (
    <div>
      <Link to="/stories"><h3>Stories</h3></Link>
    </div>
  );
}

export default StoryNav;
