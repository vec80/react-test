import React from 'react';
import './App.css';
import { Stage, Text } from '@inlet/react-pixi'
import { TextStyle } from 'pixi.js';

function App() {
  return (
    <Stage>
      <Text text="Hello World" x={100} y={100} style={new TextStyle({fill:'white'})}/>
    </Stage>
  )
}
export default App;
