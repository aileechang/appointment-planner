import React, { useState } from "react";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Navigate } from "react-router-dom"
import Root, { ROUTES } from "./components/root/Root";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  const [contactsData, setContactsData] = useState([]);
  const [appointmentsData, setAppointmentsData] = useState([]);

  function addNewContact(name, phone, email) {
    const newContact = {
      name,
      phone,
      email,
    };

    setContactsData((prevContacts) => [...prevContacts, newContact]);
  };

  function addNewAppointment(name, contact, date, time) {
    const newAppointment = {
      name,
      contact,
      date,
      time
    };

    setAppointmentsData((prevAppointments) => [...prevAppointments, newAppointment]);
  };

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={ <Root/> }>
      <Route index element={ <Navigate to={ROUTES.CONTACTS} replace/> }/>
      <Route path={ROUTES.CONTACTS} element={ <ContactsPage contactsData={contactsData} addNewContact={addNewContact} /> }/>
      <Route path={ROUTES.APPOINTMENTS} element={ <AppointmentsPage appointmentsData={appointmentsData} contactsData={contactsData} addNewAppointment={addNewAppointment} /> }/>
    </Route>
  ));
  
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
