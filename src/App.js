import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component {
    state = {
        persons: [
            {id:  'vsfsd', name: 'Justin', age: 33},
            {id:  'vhdfd', name: 'Josh', age: 33},
            {id:  'vhfgb', name: 'Nikki', age: 30},
            {id:  'njuyg', name: 'Justin', age: 33},
            {id:  'vadad', name: 'Josh', age: 33},
            {id:  'fghgfh', name: 'Nikki', age: 30}
        ],
        showPersons: false
    }

    deletePersonHandler = (personIndex) => {

        // const persons = this.state.persons.slice();
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({persons: persons});
    }

    nameChangedHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        });

        const person = {
            ...this.state.persons[personIndex]
        };

        person.name = event.target.value;

        const persons = [...this.state.persons];
        persons[personIndex] = person;

       this.setState({persons: persons})
    }

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons : !doesShow});
    }

    render() {
        const style = {
            backgroundColor: "green",
            color: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer',
            
        };

        let persons = null;

        if (this.state.showPersons) {
            persons = (
                <div >
                    {this.state.persons.map((person, index) => {
                        return <Person 
                                    click={() => this.deletePersonHandler(index)}
                                    name={person.name} 
                                    age={person.age}
                                    key={person.id}
                                    changed={(event) => this.nameChangedHandler(event, person.id)} />
                    })}
                </div>
            );

            style.backgroundColor = 'red';
            
        }

        const classes = [];
        if (this.state.persons.length <= 2) {
            classes.push('red'); // classes = ['red]
        } 

        if (this.state.persons.length <=1) {
            classes.push('bold'); // classes = ['red', 'bold']
        }

        return (
            
            <div className="App">
                <h1>Hello, I'm a React App</h1>
                <p className={classes.join(' ')}>Is this working?</p>
                <button 
                    // className="testButton"
                    style={style}
                    onClick={this.togglePersonsHandler}>Switch Name</button>
                {persons}
            </div>
          

        );
    }
}

export default App;