import React from 'react';

const baseInfo = ({onChangeInput, form}) => {
  const { firstName, lastName } = form;
  return (
    <div>
      <h3 className="subtitle">Nice to meet you!</h3>
      <p className="text">Welcome to adopets! Let's get your organization registered with the app</p>
      <p className="hint">
        Use this form to register a new shelter or rescue.
        If you want join an existing shelter or rescue account,
        please contact Master Account for that organization
      </p>
      <input className="input" placeholder="First name" onChange={val => onChangeInput('firstName', val)} value={firstName} />
      <input className="input" placeholder="Last Name" onChange={val => onChangeInput('lastName', val)} value={lastName} />
      <select className="select">
        <option>What pronoun do you prefer?</option>
        <option>Mr</option>
        <option>Mrs</option>
        <option>Ms</option>
        <option>Miss</option>
      </select>
    </div>
  )
}

export default baseInfo;
