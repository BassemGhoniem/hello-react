import React from "react";
import styles from "./Cockpit.module.css"

const cockpit = (props) => {
    let classes = [];
    let btnClass = '';

    if(props.personsLength <= 2) {
      classes.push(styles.red);
    }

    if(props.personsLength <= 1) {
      classes.push(styles.bold);
    }

    if(props.showPersons)
        btnClass = styles.Red;

    return (
        <div className={styles.Cockpit}>
            <h1>{props.title}</h1>
            <p className={classes.join(' ')}>This is really working </p>
            <button className={btnClass} onClick={props.clicked}>Toggle Persons</button>
        </div>
    );
}

export default cockpit;