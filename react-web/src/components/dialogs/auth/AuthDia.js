import { Component } from "react";
// the view.
import view from './AuthDia.jsx';

// the dispatchers.
import dispatch from '../../../redux/auth/auth.dispatch';

export default class AuthDia extends Component {
    //-------------------------------------------
    // Component state.
    //-------------------------------------------
    state = { 
        customer: {
            name: '',
            email: '',
            password: '',
            'confirm-password': ''
        },
        errors : {},
        updateCustomer: ( prop, val ) => this.setState( prev => { 
            let state = {...prev};
            state.customer[prop] = val;
            return state;
        }),
        register: () => {
            if (this.validate() === false ) return;
            dispatch.register( this.state.customer )
        },
        hasError: (field) => {
            let error = Object.values(this.state.errors).filter( e => e.field === field );
            return error.length > 0;
        },
        getError: (field) => {
            let error = Object.values(this.state.errors).filter( e => e.field === field );
            return error.length > 0 ? error.pop().message : '';
        }
    }

    //-------------------------------------------
    // Custom methods.
    //-------------------------------------------

    validate () {
        this.setState({errors: {}})
        let errors = [];
        // validate inputs.
        // empty fields
        let emptyFields = Object.keys(this.state.customer).filter( field => this.state.customer[field] == '' );
        if ( emptyFields.length > 0 ) {
            errors = emptyFields.map ( f => { return { field: f, message: `The field ${f} is required` } } );
        }
        // password-conformation.
        if ( this.state.customer.password !== this.state.customer['confirm-password'] ) {
            errors.push({ field: 'confirm-password', message: 'The field doen\'t match password field' })
            errors.push({ field: 'password', message: 'The field doen\'t match confirm-password field' })
        }
        // email format validation.
        if ( !this.state.customer.email.includes('@') || !this.state.customer.email.includes('.com') ){
            errors.push({ field: 'email', message: 'Email is of invalid format' })
        }
        // if errors.
        if ( errors.length > 0 ) {
            this.setState({ errors: errors })
            return false;
        }
        return true;
    }

    //-------------------------------------------
    // Component methods.
    //-------------------------------------------

    //componentDidUpdate = () => console.log(JSON.stringify(this.state.customer))

    //-------------------------------------------
    // Render the view with given attributes.
    //-------------------------------------------
    render = () => view({ ...this.state, ...this.props })
}