import React, { Component } from "react";

import Person from "./Person/Person"
class Persons extends Component {
  state = {};
  static getDerivedStateFromProps(props, state) {
    console.log('[Persons.js] getDerivedStateFromProps', props);
    return state;
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[Persons.js] shouldComponentUpdate');
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevSate){
    console.log('[Persons.js] getSnapshotBeforeUpdate')
    return {message: 'hi there'};
  }

  componentDidUpdate(prevProps, prevSate, snapshots) {
    console.log('[Persons.js] componentDidUpdate')
    console.log(snapshots);
  }
  
  render() {
    console.log('[Persons.js] rendering...');
    return this.props.persons
              .map((person, index) =>
                <Person
                  key={person.id}
                  age={person.age}
                  name={person.name}
                  click={()=> this.props.clicked(index)}
                  changed={(event) => this.props.changed(event, person.id)}
                />
              );
  }
};
export default Persons;
