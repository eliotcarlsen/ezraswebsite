import React from 'react';
import Stories from './Stories';

var masterStoryList = [
  {
    author:'Ezra Carlsen',
    title:'star wars',
    url:'www.star.com'
  },
  {
    author:'Ezra Carlsen',
    title:'back to the future',
    url:'www.future.com'
  },
  {
    author:'Ezra Carlsen',
    title:'star trek',
    url:'www.trek.com'
  },
  {
    author:'Ezra Carlsen',
    title:'potter',
    url:'www.potter.com'
  }
];

function StoryList() {
  return (
    <div>
      <hr />
      {masterStoryList.map((stories, index) =>
        <Stories author={stories.author}
          title={stories.title}
          url={stories.url}
          key={index} />
      )}
    </div>
  );
}

export default StoryList;
