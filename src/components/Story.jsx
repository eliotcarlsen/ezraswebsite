import React from 'react';
import PropTypes from 'prop-types';

function Story(props) {
  return (
    <div>
      <h3>Story by {props.author}</h3>
      <ul>
        <li>link {props.url}</li>
      </ul>
    </div>
  );
}

Story.propTypes = {
  author: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

export default Story;
