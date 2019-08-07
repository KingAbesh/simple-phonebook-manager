import React, { useState } from 'react';
import Filter from './Filter';
import Form from './Form';
import Numbers from './Numbers';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [sortedPersons, setSortedPersons] = useState('');

  const onSort = e => {
    setSortedPersons(e.target.value);
    const capital = e.target.value.toUpperCase();
    console.log(e.target.value);
    setPersons(persons.filter(x => x.name[0] === capital[0]));
  };

  const onChangeClick = e => {
    setNewName(e.target.value);
    console.log(newName);
  };

  const ChangeClick = e => {
    setNewNumber(e.target.value);
    console.log(newNumber);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const addedName = {
      name: newName,
      number: newNumber
    };

    for (let i in persons) {
      if (persons[i].name === newName) {
        return alert(`${newName} is already added to phonebook`);
      } else {
        setPersons(persons.concat(addedName));
        setNewName('');
        setNewNumber('');
      }
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={sortedPersons} onChange={onSort} />
      <br />
      <h3>Add a New</h3>
      <br />
      <Form
        onSubmit={handleSubmit}
        text="name"
        value={newName}
        onChange={onChangeClick}
        text1="number"
        value1={newNumber}
        onChange1={ChangeClick}
        type="submit"
      />
      <h2>Numbers</h2>
      <Numbers persons={persons} />
    </div>
  );
};

export default App;
