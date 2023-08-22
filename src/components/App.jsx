import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';
import { Card } from './Card.styled';

import { Component } from 'react';

import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { name: 'Rosie Simpson', number: '459-12-56' },
      { name: 'Hermione Kline', number: '443-89-12' },
      { name: 'Eden Clements', number: '645-17-79' },
      { name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  findContacts = filtered => {
    this.setState(prevState => ({
      filter: filtered,
    }));
  };

  addContact = newContact => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  render() {
    const { filter, contacts } = this.state;

    const visibleContact = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <Layout>
        <Card>
          <h2>Phonebook</h2>
          <ContactForm onAdd={this.addContact} />
          <h2>Contacts</h2>
          <Filter filteredItems={filter} onFind={this.findContacts} />
          <ContactList contacts={visibleContact} />
        </Card>
        <GlobalStyle />
      </Layout>
    );
  }
}
