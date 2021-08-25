import React, { Component, Fragment } from 'react';
import './App.css';

import ContactsForm from '../components/ContactsForm';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    // name: '',
    // number: '',
  };

  handleSubmit = (name, number, id) => {
    // console.log(this.state.contacts);
    const newContact = {
      id,
      name,
      number,
    };

    const { contacts } = this.state;
    console.log(contacts);
    this.setState(({ contacts }) => ({
      contacts: [newContact, ...contacts],
    }));
  };
  render() {
    return (
      <Fragment>
        <div>
          <h1>Phonebook</h1>
          <ContactsForm onSubmit={this.handleSubmit} />

          <h2>Contacts</h2>
          {/* <Filter  /> */}
          <label>
            Find contacts by name
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
            />
          </label>
          <ul>
            {Object.keys(this.state.contacts).map(item => (
              <li key={item}></li>
            ))}
          </ul>
          {/* <ContactList  /> */}
        </div>
      </Fragment>
    );
  }
}

export default App;
