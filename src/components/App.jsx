import React from 'react';
import Navbar from './Navbar';

function App(){
  var mainStyles = {
    backgroundColor: 'blue',
    backgroundImage: "../../assets/ElCaminoShasta.jpg"
  };
  return (
    <div style={mainStyles}>
      <Navbar/>
    </div>
  );
}

export default App;
