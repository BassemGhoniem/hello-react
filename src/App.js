import React, { Component } from 'react';
import styles from './App.module.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: 1, name: 'Bassem', age: 27 },
      { id: 2, name: 'Asmaa', age: 28 },
      { id: 3, name: 'Sarah', age: 0 },
    ],
    showPersons: false,
  };

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
    let persons = null;
    let btnClass = '';

    if(this.state.showPersons) {
      persons =
      (
        <div>
          {this.state.persons
            .map((person, index) =>
              <Person
                key={person.id}
                age={person.age}
                name={person.name}
                click={()=> this.deletePersonHandler(index)}
                changed={(event) => this.nameChangedHandler(event, person.id)}
              />
            )
          }
        </div>
      );
      btnClass = styles.Red;
    }

    let classes = [];

    if(this.state.persons.length <= 2) {
      classes.push(styles.red);
    }

    if(this.state.persons.length <= 1) {
      classes.push(styles.bold);
    }

    return (
      <div className={styles.App}>
        <h1>Hello React</h1>
        <p className={classes.join(' ')}>This is really working </p>
        <button className={btnClass} onClick={this.togglePersonsHandler}>Toggle Persons</button>
        { persons }
      </div>
    );
    // return React.createElement(
    //   'div',
    //    {className: 'App'},
    //    React.createElement('h1', null, 'Hello React')
    // );
  }
}

export default App;
