import React, { Component } from 'react';
import Radium, { StyleRoot } from 'radium';
import './App.css';
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
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };

    let persons = null;

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
      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      }
    }

    let classes = [];

    if(this.state.persons.length <= 2) {
      classes.push('red');
    }

    if(this.state.persons.length <= 1) {
      classes.push('bold');
    }

    return (
      <StyleRoot>
        <div className="App">
          <h1>Hello React</h1>
          <p className={classes.join(' ')}>This is really working </p>
          <button style={style} onClick={this.togglePersonsHandler}>Toggle Persons</button>
          { persons }
        </div>
      </StyleRoot>
    );
    // return React.createElement(
    //   'div',
    //    {className: 'App'},
    //    React.createElement('h1', null, 'Hello React')
    // );
  }
}

export default Radium(App);
