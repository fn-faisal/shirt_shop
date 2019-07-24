import { Component } from "react";
import view from './Checkout.jsx';

export default class Checkout extends Component {
    render = () => view({...this.state, ...this.props})
}