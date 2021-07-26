import React from 'react';
import './ContactForm.css'
import { useForm, ValidationError } from '@formspree/react';

export const ContactForm: React.FC = () => {
  const [state, handleSubmit] = useForm("myyldape");
  if (state.succeeded) {
      return <p>Thanks for contacting me!</p>;
  }
  return (
      <>
    <form onSubmit={handleSubmit} className="contactForm">
      <label htmlFor="name">
        Name
      </label>
      <input
        id="name"
        type="name" 
        name="name"
        placeholder="Full name"
        required
      />
      <ValidationError 
        prefix="Name" 
        field="name"
        errors={state.errors}
      />
      <label htmlFor="email">
        Email Address
      </label>
      <input
        id="email"
        type="email" 
        name="email"
        placeholder="example@example.com"
        required
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <label htmlFor="message">
        Message
      </label>
      <textarea
        id="message"
        name="message"
        placeholder="Write your message here!"
        required
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button className="submitBtn" type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
    </>
  );
}