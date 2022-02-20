import React from "react";
import ContactForm from "./component/ContactForm/ContactForm";
import Filter from "./component/Filter/Filter";
import Contacts from "./component/Contacts/Contacts";
import Title from "./component/TemplateTitle/TemplateTitle";

export default function App() {
  return (
    <>
      <Title title="Phonebook" />
      <ContactForm />
      <Title title="Contacts" />
      <Filter />
      <Contacts />
    </>
  );
}
