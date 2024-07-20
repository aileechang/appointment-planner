import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({ contactsData, addNewContact }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [isDuplicate, setIsDuplicate] = useState(false);

  const handleNameChange = (e) => {
    const newName = e.target.value;
    setName(newName);

    setIsDuplicate(contactsData.some((contact) => contact.name === newName));
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isDuplicate) {
      addNewContact(name, phone, email);
      setName("");
      setPhone("");
      setEmail("");
    }
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm 
          name={name}
          phone={phone}
          email={email}
          setName={handleNameChange}
          setPhone={handlePhoneChange}
          setEmail={handleEmailChange}
          handleSubmit={handleSubmit}
        /> 
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList contactsData={contactsData} />
      </section>
    </div>
  );
};
