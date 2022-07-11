import React from 'react'; 
import './App.css';

import Container from 'react-bootstrap/Container';
import Court from './component/court';


function App() {
  return (
  
    <Container className="p-3"> 
        <Court courtlayoutid='1' /> 
    </Container>
  );
}

export default App;
