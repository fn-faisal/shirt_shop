import { Component } from "react";  
import view from './Home.jsx';

export default class Home extends Component {
    render = () => view({ ...this.state, ...this.props });
}