import { Component } from "react";
import { connect } from "react-redux";

// view.
import view from './Cart.jsx';

// cart dispatch.
import dispatch from '../../redux/cart/cart.dispatch';

class Cart extends Component {
    state = {
        toggleCart: this.props.toggleCart
    }

    componentWillUpdate = () => {
        if ( this.props.auth.token && !this.props.cart.cart_id )
            dispatch.initCart(this.props.auth.token);
    }

    render = () => view({ ...this.state, ...this.props })
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(Cart);