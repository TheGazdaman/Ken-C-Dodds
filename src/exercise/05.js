// Styling
// http://localhost:3000/isolated/exercise/05.js


import * as React from 'react';
import '../box-styles.css';

function Box({className = '', style = '', size, ...otherProps}) {
    const sizeClassname = size ? `box--${size}` : '';
    return <div className={`box ${className} ${sizeClassname}`} style={{fontStyle: 'italic', ...style}} {...otherProps} />
}

function App() {
  return (
    <div>
        <Box size={"small"} style={{fontStyle: 'italic', backgroundColor: 'lightblue'}}>bla bla lightblue box</Box>;
        <Box size={"medium"} style={{fontStyle: 'italic', backgroundColor: 'pink'}}>medium pink box</Box>;
        <Box size={"large"} style={{fontStyle: 'italic', backgroundColor: 'orange'}}>large orange box</Box>;
        <Box>SizeLessBox</Box>
    </div>
  )
}

export default App
