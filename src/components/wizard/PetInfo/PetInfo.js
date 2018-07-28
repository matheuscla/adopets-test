import React from 'react';

const petInfo = ({onChangeInput, form, name}) => {
  const { petName, petNumber, profit } = form;
  return(
    <div>
      <h3 className="subtitle">Nice to meet you, <span className="name">{name}!</span></h3>
      <p className="text">We'll need some information to register your shelter or rescue:</p>
      <input className="input--full" value={petName} placeholder="Name of the Shelter/Rescue" onChange={val => onChangeInput('petName', val)} />
      <div className="row">
        <div className="col-xs-2 col-md-6">
          <select value={profit} className="input--full">
            <option>Is it nonprofit?</option>
            <option>Yes</option>
            <option>No</option>
          </select>
        </div>
        <div className="col-xs-2 col-md-6">
          <input value={petNumber} className="input--full" placeholder="501(c)3 (EIN)" onChange={val => onChangeInput('petNumber', val)}/>
        </div>
      </div>
    </div>
  );
}

export default petInfo;
