import React from 'react';
import classes from './Cockpit.module.css';

const cockpit = (props) => {

    const assignedClasses = [];
    let btnClass = '';

    if (props.showPersons) {
        btnClass = classes.Red
    }

    if (props.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }
    if (props.persons.length <=1) {
      assignedClasses.push(classes.bold);
    }


    return (
        <div className={classes.Cockpit}>
            <h1>Welcome to react</h1>
            <p className={assignedClasses.join(' ')}>Let's test classes</p>
            <button
                className={btnClass}
                onClick={props.clicked}>
                    Toggle Persons
            </button>            
        </div>

    );
}

export default cockpit;