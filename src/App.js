import React, { Component } from 'react';
import BaseInfo from './components/wizard/BaseInfo/BaseInfo';
import PetInfo from './components/wizard/PetInfo/PetInfo';
import SocialsInfo from './components/wizard/SocialsInfo/SocialsInfo';
import AccountInfo from './components/wizard/AccountInfo/AccountInfo';
import Controls from './components/wizard/Controls/Controls';
import Card from './components/wizard/Card/Card';

class App extends Component {
  state = {
    steps: 4,
    currentStep: 1,
    firstName: '',
    lastName: '',
    petName: '',
    profit: false,
    petNumber: '',
    description: '',
    facebook: '',
    twitter: '',
    instagram: '',
    email: '',
    password: '',
    confirmPassword: ''
  }

  onInputChangeHandler = (key, e) => {
    const value = e.target.value;
    this.setState(prevState => {
      return {
        ...prevState,
        [key]: value
      }
    })
  }

  nextStep = () => {
    if (this.state.currentStep < this.state.steps) {
      this.setState(prevState => prevState.currentStep++)
    }
  }

  prevStep = () => {
    if (this.state.currentStep > 1) {
      this.setState(prevState => prevState.currentStep--)
    }
  }

  progressBarHandler = () => {
    switch (this.state.currentStep) {
      case 1:
        return 'w-25'
        break;
      case 2:
        return 'w-50'
        break;
      case 3:
        return 'w-75'
        break
      case 4:
        return 'w-100'
        break;
      default:
        return ''
    }
  }

  render() {
    let currentStep = null;
    let currentCard = null;
    switch (this.state.currentStep) {
      case 1:
        currentStep = <BaseInfo onChangeInput={this.onInputChangeHandler} form={this.state} />
        currentCard = <Card title="About us" description="Knock over christmas tree. Nap all day
                            Scoot butt on the rug. Making sure that fluff gets
                            into the owner's eyes"/>
        break;
      case 2:
        currentStep = <PetInfo onChangeInput={this.onInputChangeHandler} name={`${this.state.firstName} ${this.state.lastName}`} form={this.state} />
        currentCard = <Card title="About us" description="Knock over christmas tree. Nap all day
                              Scoot butt on the rug. Making sure that fluff gets
                              into the owner's eyes"/>
        break;
      case 3:
        currentStep = <SocialsInfo onChangeInput={this.onInputChangeHandler} form={this.state} />
        currentCard = <Card title="Shelter picture tip" description="Knock over christmas tree. Nap all day
                              Scoot butt on the rug. Making sure that fluff gets
                              into the owner's eyes"/>
        break;
      case 4:
        currentStep = <AccountInfo onChangeInput={this.onInputChangeHandler} form={this.state} />
        currentCard = <Card title="About us" description="Knock over christmas tree. Nap all day
                              Scoot butt on the rug. Making sure that fluff gets
                              into the owner's eyes"/>
        break;
      default:
        currentStep = null
    }

    return (
      <div className="h-100">
        <div className="container padding-container h-100">
          <div className="d-flex justify-content-between align-items-baseline">
            <h1 className="title">Create an Account</h1>
            <img src={require('./images/close.svg')} />
          </div>
          <div className="row d-flex align-items-end">
            <div className="col-xs-12 col-md-6">
              {currentStep}
              <Controls prev={this.prevStep} next={this.nextStep} step={this.state.currentStep} />
            </div>
            <div className="col d-none d-lg-flex justify-content-end ">
              {currentCard}
            </div>
          </div>
        </div>
        <div class="progress">
          <div class={`progress-bar ${this.progressBarHandler()}`}  role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
      </div>
    );
  }
}

export default App;
