import { Component } from "react";
import { connect } from 'react-redux';
import view from './Checkout.jsx';

import axios from 'axios';

import 'bs-stepper/dist/css/bs-stepper.min.css';
import Stepper from 'bs-stepper';
import { geocodeByPlaceId } from 'react-google-places-autocomplete';

import authDispatch from '../../../redux/auth/auth.dispatch';
import cartDispatch from '../../../redux/cart/cart.dispatch';
import orderDispatch from '../../../redux/order/order.dispatch';

import { tError, tSuccess } from '../../dialogs/alert_utils';

class Checkout extends Component {

    state = {
        shipping: {},
        errors: [],
        address: {
            address_1: this.props.auth.profile.address_1 || '',
            address_2: this.props.auth.profile.address_2 || '',
            city: this.props.auth.profile.city || '',
            region: this.props.auth.profile.region || '',
            shipping_region_id: this.props.auth.profile.region || '',
            postalcode: this.props.auth.profile.postalcode || '',
            state: this.props.auth.profile.state || '',
            country: this.props.auth.profile.country || ''
        },
        // for display purposes.
        card: {
            number: '',
            cvv: '',
            expiry: '',
        },
        products: [],
        updateStateAddress: ( field, value ) => this.setState( prev => {
            let state = {...prev};
            state.address[field] = value;
            return state;
        }),
        updateStateCard: ( field, value ) => this.setState( prev => {
            // card number.
            if ( field === 'number' ) {
                let chuncks = value.match(/.{1,4}/g);
                value = chuncks.join(" - ");
            }
            let state = {...prev};
            state.card[field] = value;
            
            // update card in store.
            orderDispatch.setCard( { ...state.card, number: state.card.number.replace(/ - /g, ''), exp_month: state.card.expiry !== '' ? state.card.expiry.split('-')[1] : '', exp_year: state.card.expiry !== '' ? state.card.expiry.split('-')[0] : '' } )
            return state;
        }),
        getShippingCost: () => {
            if ( Object.keys(this.state.shipping).length <= 0 ) return 0;
            return JSON.parse(this.state.shipping).shipping_cost;
        },
        setRegion: ( r ) => this.setState( prev => {
            r = JSON.parse(r);
            let state = { ...prev };
            state.address.region = r.shipping_region;
            state.address.shipping_region_id = r.shipping_region_id;
            return state;
        } ),
        validateAddress : () => {
            let empty = Object.keys(this.state.address).filter( k => this.state.address[k] == '' );
            if ( empty.length > 0 ) {
                let errors = empty.map( e => { return {field: e, message: `The field ${e} is required`} } );
                this.setState({ errors });
                tError(`The fields '${empty.join(',')}' are required`);
                return false;
            }
            return true;
        },
        placeOrderValidation: () => {
            console.log(this.state.shipping);
            // credit cart.
            let empty = Object.keys(this.state.card).filter( k => this.state.card[k] == '' );
            if ( empty.length > 0 ) {
                let errors = empty.map( e => { return {field: e, message: `The field ${e} is required`} } );
                this.setState({ errors });
                tError(`The fields '${empty.join(',')}' are required`);
                return false;
            }
            // shipping.
            if ( Object.keys(this.state.shipping).length == 0 ) {
                this.setState({ field: 'shipping', message: `Please select a shipping method` })
                tError(`Please select a shipping method`);
                return false;
            }
            return true;
        }, 
        placeOrder: () => { 
            orderDispatch.createOrder( this.props.auth.token, this.props.cart.cart_id, JSON.parse(this.state.shipping).shipping_id, this.props.config.tax.tax_id )
        },
        setShipping : ( r ) => this.setState( prev => {
            // r = JSON.parse(r);
            let state = { ...prev };
            state.shipping = r;
            console.log(state);
            return state;
        } ),
        updateQuantity: ( item_id, quantity ) => {
            cartDispatch.updateCart( this.props.auth.token, item_id, quantity );
        },
        removeItem : ( item_id ) => {
            cartDispatch.removeCartItem( this.props.auth.token, item_id );
        },
        updateCart: () => {
            if ( this.props.auth.token && this.props.cart.cart_id )
                cartDispatch.getCart( this.props.auth.token, this.props.cart.cart_id )
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
        },
        getOrderTotal: () => 
            (this.state.getTotalPrice() + parseFloat(this.state.getShippingCost()) + (this.state.getTotalPrice() * (this.props.config.tax.tax_percentage / 100)) ).toFixed(2)
        ,
        updateAddress : () => {
            authDispatch.updateUser( this.props.auth.token, {...this.state.address, name: this.props.auth.profile.name, email: this.props.auth.profile.email } );
        },
        updatePlace : ( place ) => {
             geocodeByPlaceId( place.place_id )
            .then ( decoded => {
                let country = decoded[0].address_components.filter( cmp => cmp.types.includes("country") );
                let postalcode = decoded[0].address_components.filter( cmp => cmp.types.includes('postalcode') );
                let state = decoded[0].address_components.filter( cmp => cmp.types.includes("administrative_area_level_1") );
                let city = decoded[0].address_components.filter( cmp => cmp.types.includes("administrative_area_level_2") );
                let address_2 = decoded[0].address_components.filter( cmp => cmp.types.includes("neighborhood") );
                let address_1 = decoded[0].formatted_address;
                
                this.setState({ address: {
                    country : country.length > 0 ? country[0].long_name : '',
                    state : state.length > 0 ? state[0].long_name : '',
                    city : city.length > 0 ? city[0].long_name : '',
                    postalcode : postalcode.length > 0 ? postalcode[0].long_name : '',
                    address_1,
                    region: this.state.address.region,
                    shipping_region_id: this.state.address.shipping_region_id,
                    address_2 : address_2.length > 0 ? address_2[0].long_name : ''
                } });
            })
            .catch( err => console.error(err) )
        }
    }

    componentDidMount = () => {
        this.stepper = new Stepper(document.querySelector('#stepper1'), {
            linear: false,
            animation: true
        });
    }

    componentWillUpdate = () => {
        if ( this.props.cart.refresh === true ) {
            this.state.updateCart();
        }
    }

    componentDidUpdate = () => {
        // get token.
        if ( this.props.order.getToken === true ) {
            // generate token.
            orderDispatch.generateToken( this.props.auth.token, {...this.props.order.card});
        }
        // make payment.
        else if ( this.props.order.makePayment === true ) {
            orderDispatch.makePayment( this.props.auth.token, this.props.order.order_id, this.props.order.token, 'Test', this.state.getOrderTotal() );
        }
    }

    render = () => view({...this.state, stepper: this.stepper, ...this.props})
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(Checkout);