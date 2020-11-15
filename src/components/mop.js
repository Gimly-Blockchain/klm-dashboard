import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import MobModal from "./mobModal";
import '../scss/components/mob.scss';


const Mop = (mop) => {
  const { id, currentStatus, statusText, custodian, custodianColor} = mop;

  if (!statusText){
    return false
  }

  return (
    <div className="mopContainer">
      <Popup
        className="mopPopup"
        trigger={
        <div className={'mop'} style={{backgroundColor: custodianColor}}>
        <div className="id">{id}</div>
        <div className="label">{statusText.process}</div>
      </div>
      } modal
        nested
      >
        {close => (
          <MobModal close={close}/>
        )}
      </Popup>
      <div className="custodian">
        <div className="custodianId">{custodian}</div>
      </div>
    </div>
  );
}

export default Mop;
