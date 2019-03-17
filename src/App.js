import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Bassem', age: 27 },
      { name: 'Asmaa', age: 28 },
      { name: 'Sarah', age: 0 },
    ]
  };

  switchNameHandler = () =>{

    // DON'T do this this.state.persons[0].name = 'Bassem Ghoniem';
    this.setState({
      persons: [
        { name: 'Bassem Ghoniem', age: 27 },
        { name: 'Asmaa', age: 28 },
        { name: 'Sarah', age: 0 },
      ]
    })
  }

  nameChangedHandler = (event) => this.setState({
    persons: [
      { name: 'Bassem Ghoniem', age: 27 },
      { name: 'Asmaa', age: 28 },
      { name: event.target.value, age: 0 },
    ]
  })
  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hello React</h1>
        <button style={style} onClick={this.switchNameHandler}>Switch Name </button>
        <Person
          age={this.state.persons[0].age}
          name={this.state.persons[0].name}
          click={this.switchNameHandler}/>
        <Person
          age={this.state.persons[1].age}
          name={this.state.persons[1].name}/>
        <Person
          age={this.state.persons[2].age}
          name={this.state.persons[2].name}
          changed={this.nameChangedHandler}/>
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
