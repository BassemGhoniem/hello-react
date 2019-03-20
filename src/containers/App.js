import React, { Component } from 'react';
import styles from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: [
        { id: 1, name: 'Bassem', age: 27 },
        { id: 2, name: 'Asmaa', age: 28 },
        { id: 3, name: 'Sarah', age: 0 },
      ],
      showPersons: false,
    };
    console.log('[App.js] constructor');
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount')
  }

  componentWillMount() {
    console.log('[App.js] componentWillMount')
  }
  togglePersonsHandler = () => this.setState({showPersons: !this.state.showPersons})
  deletePersonHandler = (index) => this.setState({persons: [...this.state.persons].filter((v, i) => i !== index)})

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => p.id === id);
    const person = {...this.state.persons[personIndex]};
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({persons});
  }

  render() {
    console.log('[App.js] render');
    let persons = null;
    if(this.state.showPersons) {
      persons =
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}/>;
    }

    return (
      <div className={styles.App}>
        <Cockpit
          title={this.props.title}
          personsLength={this.state.persons.length}
          showPersons={this.state.showPersons}
          clicked={this.togglePersonsHandler} />
        { persons }
      </div>
    );
  }
}

export default App;
