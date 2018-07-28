import React from 'react';

const accountInfo = ({onChangeInput, form}) => {
  const { email, password, confirmPassword } = form;
  return(
    <div>
      <h3 className="subtitle">Safety first!</h3>
      <p className="text">It's time to set your password. must be at least 8 characters long, with at least one capital letter</p>
      <input className="input--full" placeholder="E-mail" onChange={val => onChangeInput('email', val)} value={email} />
      <div className="row">
        <div className="col-xs-12 col-md-6">
          <input className="input--full" type="password" placeholder="Password" onChange={val => onChangeInput('password', val)} value={password} />
        </div>
        <div className="col-xs-12 col-md-6">
          <input className="input--full" type="password" placeholder="Confirm password" onChange={val => onChangeInput('confirmPassword', val)} value={confirmPassword} />
        </div>
      </div>
    </div>
  )
}

export default accountInfo;
