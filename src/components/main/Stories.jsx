import React from 'react';
import PropTypes from 'prop-types';

function Stories(props) {
  return (
    <div>
      <style jsx>{`
        div {
          background-color: '';
        }
      `}</style>
      <h3>Title: {props.title}</h3>
      <h6>By: {props.author}</h6>
      <ul>
        <li>url {props.url}</li>
      </ul>
    </div>
  );
}

Stories.propTypes = {
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

export default Stories;
