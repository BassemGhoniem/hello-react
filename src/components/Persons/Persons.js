import React from "react";

import Person from "./Person/Person"
const persons = props => {
  console.log('[Persons.js] rendering...');
  return props.persons
            .map((person, index) =>
              <Person
                key={person.id}
                age={person.age}
                name={person.name}
                click={()=> props.clicked(index)}
                changed={(event) => props.changed(event, person.id)}
              />
            );
};
export default persons;
