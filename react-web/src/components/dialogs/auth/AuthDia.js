import { Component } from "react";
import view from './AuthDia.jsx';

export default class AuthDia extends Component {
    render = () => view({ ...this.state, ...this.props })
}