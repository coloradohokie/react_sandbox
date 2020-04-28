import React, {Component} from 'react';
import classes from './Person.module.css';
import AuthContext from '../../../context/auth-context';

class Person extends Component {
    render() {
        console.log('[Person.js] rendering...')
        return (
            <AuthContext.Consumer>
                <div className={classes.Person}>           
                    <p onClick={this.props.click}>My name is {this.props.name} and I'm {this.props.age} years old.</p>
                    {(context) => context.authenticated ? <p>Authenticated!</p> : <p>Please log in</p>}
                    <p>{this.props.children}</p>
                    <input type="text" onChange={this.props.changed} value={this.props.name} />
                </div>
            </AuthContext.Consumer>
        )

    }
}

export default Person;