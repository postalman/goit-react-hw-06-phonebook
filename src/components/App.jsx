import React from 'react';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import { BodyDivCSS, DivCSS } from 'components/Styles.styles';

const App = () => {
  return (
    <BodyDivCSS>
      <DivCSS>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </DivCSS>
    </BodyDivCSS>
  );
};

export default App;
