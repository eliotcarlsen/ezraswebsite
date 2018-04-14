import React from 'react';
import Navbar from './Navbar';

function App(){
  var mainStyles = {
    backgroundImage: 'assets/img/ElCaminoShasta.jpg'
  };
  return (
    <div style={mainStyles}>
      <Navbar/>
    </div>
  );
}

export default App;
