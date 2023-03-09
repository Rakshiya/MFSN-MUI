import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
function Popup(props) {
  return (
    <Popup trigger={<button> Trigger</button>} position="right center">
    <div>{props.message}</div>
  </Popup>
  )
}

export default Popup