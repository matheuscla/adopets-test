import React from 'react';

const socialsInfo = ({onChangeInput, form}) => {
  const { description, facebook, twitter, instagram } = form;

  return(
    <div>
      <h3 className="subtitle">Okay!</h3>
      <p className="text">Now, connect your Shelter with the world</p>
      <input  value={description} className="input--full" placeholder="Brief description(120 characters)" onChange={val => onChangeInput('description', val)} />
      <label className="label">Social media</label>
      <input value={facebook} className="input--full" placeholder="Facebook (optional)"onChange={val => onChangeInput('facebook', val)} />
      <input value={twitter} className="input--full" placeholder="Twitter (optional)" onChange={val => onChangeInput('twitter', val)} />
      <input value={instagram} className="input--full" placeholder="Instagram (optinal)"onChange={val => onChangeInput('instagram', val)} />
    </div>
  )
}

export default socialsInfo;
