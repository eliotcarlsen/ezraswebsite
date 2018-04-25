import React from 'react';
import Navbar from './navbar/Navbar';
import Main from './main/Main';
import StoryList from './main/StoryList';
import Gallery from './main/Gallery';
import About from './main/About';
import elCamino from '../assets/images/ElCaminoShasta.jpg';
import { Switch, Route } from 'react-router-dom';

function App(){
  var mainStyles = {
    flex: 1,
    resizeMode: 'cover',
    backgroundImage: 'url(' + elCamino + ')'
  };
  return (
    <div style={mainStyles}>
      <Navbar/>
      <Switch>
        <Route exact path='/' component={Main} />
        <Route path='/stories' component={StoryList} />
        <Route path='/photos' component={Gallery} />
        <Route path='/about' component={About} />
      </Switch>
    </div>
  );
}

export default App;
