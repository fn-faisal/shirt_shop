import { Component } from "react";
import { connect } from "react-redux";

// view.
import view from './Cart.jsx';

class Cart extends Component {
    state = {
        toggleCart: this.props.toggleCart
    }
    render = () => view({ ...this.state, ...this.props })
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(Cart);