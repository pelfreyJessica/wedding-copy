import React, {useState} from "react";
import axios from 'axios';

import "./rsvp.scss";

const RSVP = (props) => {
  let [rsvpState, setRsvpState] = useState({firstName: '', lastName: '', answer: ''});
  let [contentState, setContentState] = useState('form');

  const formSubmitted = (event) => {
    event.preventDefault();

    axios.post( 'https://my-wedding-website-701bb-default-rtdb.firebaseio.com/rsvp.json', rsvpState )
    .then( response => {
        console.log(response)
        setContentState('success')
    } )
    .catch( error => {
        console.log(error)
        setContentState('error')
    } );
  }

  const inputChangedHandler = (event) => {

    const input = event.target.id

    switch(input) {
      case 'firstName':
        setRsvpState({
          ...rsvpState,
          firstName: event.target.value
        });
        break;
      case 'lastName':
        setRsvpState({
          ...rsvpState,
          lastName: event.target.value
        });
        break;
      case 'rsvp-yes':
        setRsvpState({
          ...rsvpState,
          answer: event.target.value
        });
        break;
      case 'rsvp-no':
        setRsvpState({
          ...rsvpState,
          answer: event.target.value
        });
        break;
    }
  }

  let formContent = (
    <form className="rsvp-form" onSubmit={formSubmitted}>
      <div>
        <label className="rsvp-form__label" htmlFor="firstName">First Name:</label>
        <input className="rsvp-form__input" type="text" id="firstName" placeholder="First Name" onChange={inputChangedHandler}/>
      </div>
      <div>
        <label className="rsvp-form__label" htmlFor="lastName">Last Name:</label>
        <input className="rsvp-form__input" type="text" id="lastName" placeholder="Last Name" onChange={inputChangedHandler}/>
      </div>
      <section className="rsvp-form__radio">
        <label className="rsvp-form__radio-label" htmlFor="rsvp-yes">I Gladly Accept</label>
        <input className="rsvp-form__radio-input" type="radio" id="rsvp-yes" name="rsvp" value="yes" onChange={inputChangedHandler}/>
        <label className="rsvp-form__radio-label" htmlFor="rsvp-no">I Regretfully Decline</label>
        <input className="rsvp-form__radio-input" type="radio" id="rsvp-no" name="rsvp" value="no" onChange={inputChangedHandler}/>
      </section>
      <button className="rsvp-form__btn" type="submit">Submit Form</button>
    </form>
  )

  let successContent = (
    <p className="success-message">Form Submitted Successfully</p>
  )

  let errorContent = (
    <p className="error-message">An error occured</p>
  )

  let mainContent = ''

  if (contentState === 'form') {
    mainContent = formContent
  } else if (contentState === 'success') {
    mainContent = successContent
  } else if (contentState === 'error') {
    mainContent = errorContent
  }

  return (
    <div>
      <h1>RSVP</h1>
      {mainContent}
    </div>
  );
};

export default RSVP;