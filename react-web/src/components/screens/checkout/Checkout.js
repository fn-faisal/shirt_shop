import { Component } from "react";
import view from './Checkout.jsx';

import 'bs-stepper/dist/css/bs-stepper.min.css';
import Stepper from 'bs-stepper'

export default class Checkout extends Component {
    componentDidMount = () => {
        this.stepper = new Stepper(document.querySelector('#stepper1'), {
            linear: false,
            animation: true
        })
    }
    onSubmit(e) {
        e.preventDefault()
      }

    render = () => view({...this.state, stepper: this.stepper, ...this.props})
}