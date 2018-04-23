import React from 'react';
import Navbar from './Navbar';
import Main from './Main';
import StoryList from './StoryList';
import { Switch, Route } from 'react-router-dom';

function App(){
  var mainStyles = {
    backgroundColor: 'blue',
    backgroundImage: '../../assets/ElCaminoShasta.jpg'
  };
  return (
    <div style={mainStyles}>
      <Navbar/>
      <Switch>
        <Route exact path='/' component={Main} />
        <Route path='/stories' component={StoryList} />
      </Switch>
    </div>
  );
}

export default App;
