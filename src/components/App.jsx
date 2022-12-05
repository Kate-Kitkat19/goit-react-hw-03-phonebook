import React, { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import { Layout } from './Layout.styled';
import { Contacts } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';
import { nanoid } from 'nanoid';
import { Title } from './Contacts/Contacts.styled';
import { localStore } from './local-storage';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  saveContactInState = data => {
    this.setState(({ contacts }) => {
      return { contacts: [...contacts, data] };
    });
  };

  handleSubmit = (values, { resetForm }) => {
    const contactName = values.name.toLowerCase();
    const isSaved = this.state.contacts.find(
      contact => contact.name.toLowerCase() === contactName
    );
    if (isSaved) {
      alert(`${values.name} is already in contacts`);
    } else {
      this.saveContactInState({ ...values, id: nanoid() });
    }
    resetForm();
  };

  filterContacts = evt => {
    const value = evt.target.value;
    this.setState({ filter: value.trim().toLowerCase() });
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  KEY = 'savedContacts';
  componentDidMount() {
    const savedContacts = localStore.load(this.KEY);

    if (savedContacts) {
      this.setState({ contacts: savedContacts });
    }
  }

  componentDidUpdate(pervProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStore.save(this.KEY, this.state.contacts);
    }
  }

  render() {
    const filteredContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter)
    );

    return (
      <Layout>
        <ContactForm onSubmit={this.handleSubmit}></ContactForm>
        <Filter
          onFilterChange={this.filterContacts}
          filterValue={this.state.filter}
        ></Filter>

        {filteredContacts.length > 0 && (
          <>
            <Title>Contacts</Title>
            <Contacts
              contacts={filteredContacts}
              onDelete={this.deleteContact}
            ></Contacts>
          </>
        )}
      </Layout>
    );
  }
}
