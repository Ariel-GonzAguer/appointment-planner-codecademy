import React, { useState } from "react";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Navigate } from "react-router-dom"
import Root, { ROUTES } from "./components/root/Root";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  /*
  Define state variables for 
  contacts and appointments 
  */
  const [contacts, setContacts] = useState([]);
  const [appointments, setAppointments] = useState([]);

  /*
  Implement functions to add data to
  contacts and appointments
  */
  //  Esto debería hacerse dentro de cada componente.

  function addContact(newContact) {
    const newContactObject = {
      name: newContact.name,
      phone: newContact.phone,
      email: newContact.email
    };

    setContacts([...contacts, newContactObject]);
  }

  function addAppointment(newAppointment) {
    const newAppointmentObject = {
      name: newAppointment.name,
      contact: newAppointment.contact,
      date: newAppointment.date,
      time: newAppointment.time
    };
    setAppointments([...appointments, newAppointmentObject]);
  }

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Navigate to={ROUTES.CONTACTS} replace />} />
      <Route path={ROUTES.CONTACTS} element={<ContactsPage contacts={contacts} addContact={addContact} /> /* Add props to ContactsPage */} />
      <Route path={ROUTES.APPOINTMENTS} element={<AppointmentsPage appointments={appointments} addAppointment={addAppointment} contacts={contacts} /> /* Add props to AppointmentsPage */} />
    </Route>
  ));

  return (
    <RouterProvider router={router} />
  );
}

export default App;
