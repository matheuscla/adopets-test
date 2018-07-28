import React from 'react';

const controls = (props) => (
  <div className="actions">
    {
      (props.step === 4) ? <button onClick={props.next} className="btn button-next">Confirm E-mail</button> : <button onClick={props.next} className="btn button-next">Next</button>
    }
    {
      (props.step > 1 && props.step < 4) ? <button onClick={props.prev} className="button-back">Return to the previous step</button> : null
    }
  </div>
)

export default controls;
