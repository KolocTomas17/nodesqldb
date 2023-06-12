import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
function ContactForm() {
  const [state, handleSubmit] = useForm("xgebjjwe");
  if (state.succeeded) {
      return <p>Úspěšně odesláno!</p>;
  }
  return (
      <form onSubmit={handleSubmit}>
      <label htmlFor="email">
        Email Address
      </label>
      <input
        id="email"
        type="email" 
        name="email"

        className="input"
        placeholder="email"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <textarea
        id="message"
        name="message"

        className="textarea"
        placeholder="zpráva"
        defaultValue={""}
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting}>
      poslat&nbsp;&nbsp;
      </button>
    </form>
  );
}
function Form() {
  return (
    <ContactForm />
  );
}
export default Form;