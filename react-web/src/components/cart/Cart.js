import { Component } from "react";
import { connect } from "react-redux";

// view.
import view from './Cart.jsx';

import axios from 'axios';

// cart dispatch.
import dispatch from '../../redux/cart/cart.dispatch';

class Cart extends Component {
    state = {
        products: [],
        toggleCart: this.props.toggleCart,
        updateQuantity: ( item_id, quantity ) => {
            dispatch.updateCart( this.props.auth.token, item_id, quantity );
        },
        removeItem : ( item_id ) => {
            dispatch.removeCartItem( this.props.auth.token, item_id );
        },
        updateCart: () => {
            if ( this.props.auth.token && this.props.cart.cart_id )
                dispatch.getCart( this.props.auth.token, this.props.cart.cart_id )
        },
        loadProduct: async ( pId ) => {
            let product = this.state.products.filter( p => p.product_id === pId );
            if ( product.length === 0 ) {
                try {
                    let response = await axios.get( `${process.env.API_HOST}:${process.env.API_PORT}/api/products/${pId}` );
                    if ( response.status === 200 ) {
                        this.setState( prev => {
                            let state = { ...prev };
                            state.products.push(response.data);
                            return state;
                        });
                    } else console.error(response);
                } catch( e ) {
                    console.error(e);
                    return undefined;
                }
            } 
        },
        getProductPrice : ( product ) => {
            return parseFloat(product.discounted_price == 0.00 ? product.price : product.discounted_price);
        },
        getTotalPrice : (  ) => {
            let total = 0;
            this.props.cart.cart.map( c => {
                let product = this.state.products.filter( p => p.product_id === c.product_id );
                if ( product.length > 0 ){
                    total += this.state.getProductPrice( product[0] ) * c.quantity;
                }
            });
            return total;
        }
    }


    componentWillUpdate = () => {
        if ( this.props.auth.token && !this.props.cart.cart_id ) {
            dispatch.initCart(this.props.auth.token);
        }
    }

    componentDidUpdate = () => {
        if ( this.props.cart.refresh === true ) {
            this.state.updateCart();
        }
    }

    render = () => view({ ...this.state, ...this.props })
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(Cart);