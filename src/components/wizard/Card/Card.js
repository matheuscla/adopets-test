import React from 'react';

const card = ({title, description}) => (
  <div className="card">
    <div className="card-body">
      <img src={require('../../../images/logo.jpg')} className="logo" />
      <span className="card-title">{title}</span>
      <p class="card-description">{description}</p>
      <div className="d-flex justify-content-end">
        <button className="card-dismiss">Dismiss</button>
        <button className="card-next">Next</button>
      </div>
    </div>
  </div>
)

export default card;
