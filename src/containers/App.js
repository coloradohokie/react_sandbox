import React, { Component } from 'react';
import classes from './App.module.css';
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'
import WithClass from '../hoc/WithClass';
import AuthContext from '../context/auth-context'

class App extends Component {

  state = {
    persons: [
      {id: 1, name: "Traci", age: 16},
      {id: 2, name: "Christy", age: 22},
      {id: 3, name: "Victoria", age: 23}
    ],
    otherState: "some other value",
    showPersons: false,
    showCockpit: true,
    authenticated: false
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js getDerivedStateFromProps');
    return state;
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate');
  }

  deletePersonHandler = (index) => {
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    })
    const person = {...this.state.persons[personIndex]};
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({persons: persons})

  }

  loginHandler = () => {
    this.setState({authenticated: true});
  }



  render() {
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
          isAuthenticated={this.state.authenticated}
        />
      );
    }


    return (
      <WithClass classes={classes.App}>
        <button onClick={()=> {
          this.setState({ showCockpit: false});
        }}>          
          Remove Cockpit
        </button>
        <AuthContext.Provider value={{authenticated: this.state.authenticated, login: this.loginHander}}>
        {this.state.showCockpit ? (
            <Cockpit
            personsLength={this.state.persons.length}
            showPersons={this.state.showPersons}
            clicked={this.togglePersonsHandler}
            title={this.props.title}
            />) : null}
          {persons}
        </AuthContext.Provider>         
      </WithClass>

    );
  }
}

export default App;
