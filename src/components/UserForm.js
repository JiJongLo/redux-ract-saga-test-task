import React, { Component } from 'react';
import { FormControl, FormGroup, ControlLabel } from 'react-bootstrap';
import RaisedButton from 'material-ui/RaisedButton';

class UserForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                name: '',
                colors: []
            },
            form: {
                isValid: false
            }

        };
        this.onChecked = this.onChecked.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onSubmitForm = this.onSubmitForm.bind(this)
    };

    onChecked(event) {
        const checked = event.target.checked;
        const id = event.target.id;
        this.setState((prevState) = > {
            const colors = checked ? [...prevState.user.colors, id
    ] :
        prevState.user.colors.filter(color = > color !== id
    )
        ;
        return Object.assign(prevState, {
            user: { name: prevState.user.name, colors: colors }
        });
    })
        ;
    }

    onChangeName(event) {
        const name = event.target.value;
        const isValid = /^([a-zA-Z0-9 _-]+)$/.test(name) && name.length > 3 && name.length < 9;
        this.setState((prevState) = > {
            return Object.assign(prevState, {
                user: { name: name, colors: prevState.user.colors },
                form: {
                    isValid: isValid
                }
            });
    })
        ;
    }

    onSubmitForm(event) {
        event.preventDefault();
        this.props.onAddUser(this.state.user)
    }

    render() {
        return (
            < div
        className = "container" >
            < form
        onSubmit = { this.onSubmitForm
    }>
    <
        FormGroup
        controlId = "formBasicText"
            >
            < ControlLabel > Enter
        your
        name < / ControlLabel >
        < FormControl
        type = "text"
        value = { this.state.name
    }
        onChange = { this.onChangeName
    }
        placeholder = "Enter name"
            / >
            < FormControl.Feedback / >
            < / FormGroup >
            < div
        className = "row" >
            < div
        className = "col s4" >
            < p >
            < input
        onChange = { this.onChecked
    }
        type = "checkbox"
        className = "filled-in"
        id = "red" / >
            < label
        htmlFor = "red" > Red < / label >
            < / p >
            < / div >
            < div
        className = "col s4" > < p >
            < input
        onChange = { this.onChecked
    }
        type = "checkbox"
        id = "blue"
        className = "filled-in" / >
            < label
        htmlFor = "blue" > Blue < / label >
            < / p > < / div >
            < div
        className = "col s4" > < p >
            < input
        onChange = { this.onChecked
    }
        type = "checkbox"
        id = "green"
        className = "filled-in" / >
            < label
        htmlFor = "green" > Green < / label >
            < / p > < / div >
            < / div >
            < RaisedButton
        type = "submit"
        label = "Add user"
        primary = { true }
        disabled = {
        !this.state.form.isValid
    }/>
    </
        form >
        < / div >
    )
        ;
    }
};

export default UserForm;