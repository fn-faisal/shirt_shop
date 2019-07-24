import { Component } from "react";
import view from './HeaderAuth.jsx';
export default class HeaderAuth extends Component {
    render = () => view({ ...this.state, ...this.props })
}