import React from "react";
import './Cart.scss';

import { Link } from 'react-router-dom';

export default props => (
    <div className="cart dropdown">
        <a href="javascript:void(0)" className="cart-btn mx-4 bg-transparent text-dark dropdown-toggle" 
        onClick={ () => props.toggleCart() }
        aria-haspopup="true" aria-expanded="false" >
            <img src="/assets/img/icons-bag.png"/><span className="badge rounded-circle badge-danger position-absolute header-cart-count">{ props.cart.cart.length }</span>
        </a>
        <div className="cart-dropdown mt-3 dropdown-menu dropdown-menu-right">
            <div className="cart-title mx-3 d-flex justify-content-between align-items-center">
                <h6 className="font-weight-bold">{ props.cart.cart.length } Items In Your Cart </h6>
                <a href="javascript:void(0)" onClick={ () => props.toggleCart() } >
                    <i className="fa fa-times"></i>
                </a>
            </div>
            <div className="cart-items">
                <table className="table">
                    <thead>
                        <tr>
                            <th><small>Item</small></th>
                            <th><small>Size</small></th>
                            <th><small>Quantity</small></th>
                            <th><small>Price</small></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            props.cart.cart.map( (i, k) => 
                            { 
                                let product = props.products.filter( p => p.product_id == i.product_id );
                                if ( product.length === 0 )
                                    props.loadProduct(i.product_id);
                                else product = product.pop();      
                                return (
                                    <tr key={k}>
                                        <td className="d-flex">
                                            <img className="border cart-item-img" src={`${process.env.API_HOST}:${process.env.API_PORT}/img/products/${product.image}`} alt=""/>
                                            <div className="cart-item-info mx-4 align-self-center d-flex flex-column justify-content-center">
                                                <h6 className="cii-title">{ product.name }</h6>
                                                <span className="cii-description text-muted">{ product.description }</span>
                                                <a href="javascript:void(0)" onClick={ () => props.removeItem(i.item_id) }> <i className="fa fa-times text-danger mr-1"></i> <small className="text-muted">Remove</small>  </a>
                                            </div>
                                        </td>
                                        <td>{ i.attributes.split(' ')[0] }</td>
                                        <td>
                                            <div className="itf-quantity">
                                                <button className="btn btn-sm rounded-circle px-1 py-0" onClick={ () => i.quantity > 1 ? props.updateQuantity( i.item_id, --i.quantity ) : {} }>
                                                    <i className="fa fa-minus cart-icon-mutate-qt"></i>
                                                </button>
                                                <button className="btn btn-sm btn-disabled shadow-sm border bg-transparent rounded-pill px-3 py-0">
                                                    <span className="itf-quantity">{ i.quantity }</span>
                                                </button>
                                                <button className="btn btn-sm rounded-circle px-1 py-0" onClick={ () => props.updateQuantity( i.item_id, ++i.quantity ) }>
                                                    <i className="fa fa-plus cart-icon-mutate-qt"></i>
                                                </button>
                                            </div>
                                        </td>
                                        <td>
                                            <h5>&pound;{ (props.getProductPrice(product) * i.quantity).toFixed(2) }</h5>
                                            
                                        </td>
                                    </tr>
                                )}
                            )
                        }
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan="3"><h4>TOTAL</h4></td>
                            <td> &pound; { props.getTotalPrice().toFixed(2) } </td>
                        </tr>
                        <tr>
                            <td className="text-left" colSpan="2">
                                <a href="javascript:void(0)" onClick={ () => props.toggleCart() } className="btn btn-flat btn-white rounded-pill text-danger">Back to Shop</a>
                            </td>
                            <td className="text-right" colSpan="2">
                                <Link to={`checkout`} className="btn btn-flat btn-danger rounded-pill white-text"> Checkout </Link>
                                {/* <a href="#" className="btn btn-flat btn-danger rounded-pill white-text">Checkout</a> */}
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    </div>
);