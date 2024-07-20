import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={setName} />
      <input type="tel" value={phone} onChange={setPhone} pattern="[1-9][0-9]{2}-[1-9][0-9]{2}-[0-9]{4}" />
      <input type="email" value={email} onChange={setEmail} />
      <button type="submit" >Submit</button>
    </form>
  );
};

