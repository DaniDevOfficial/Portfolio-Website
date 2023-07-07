import React from 'react';
import Iframe from 'react-iframe';

function App() {
  return (
    <div >
    <div style={{ border: '1px solid rgba(0, 0, 0, 0.1)' }}>
      <Iframe
        url="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FjnGri2p3JIt1Shemk12h57%2FPortfolio%3Ftype%3Ddesign%26node-id%3D0%253A1%26mode%3Ddesign%26t%3DPHPIifhWg5d5UCBn-1"
        width="800px"
        height="450px"
        allowFullScreen
      />
    </div>   
     </div>
  );
}

export default App;
