import React from 'react';
import './Checkout.scss';

import GooglePlacesAutocomplete from 'react-google-places-autocomplete';

export default props => (
    <div className="content">
        <div id="stepper1" className="bs-stepper">
          <div className="bs-stepper-header">
            <div className="step" data-target="#checkout-order">
              <button className="step-trigger">
                <span className="bs-stepper-circle">1</span>
                <span className="bs-stepper-label">Order</span>
              </button>
            </div>
            <div className="line"></div>
            <div className="step" data-target="#checkout-address">
              <button className="step-trigger">
                <span className="bs-stepper-circle">2</span>
                <span className="bs-stepper-label">Delivery Address</span>
              </button>
            </div>
            <div className="line"></div>
            <div className="step" data-target="#checkout-payment-shipping">
              <button className="step-trigger">
                <span className="bs-stepper-circle">3</span>
                <span className="bs-stepper-label">Payment & Shipping</span>
              </button>
            </div>
          </div>
          <div className="bs-stepper-content">
            <div id="checkout-order" className="content">
              <div className="cart-title mx-3 d-flex justify-content-between align-items-center">
                  <h6 className="font-weight-bold">{ props.cart.cart.length } Items In Your Cart </h6>
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
                                <a href="javascript:void(0)" onClick={ () => props.stepper.next() } className="btn btn-flat btn-white rounded-pill text-danger">Continue</a>
                            </td>
                            
                        </tr>
                    </tfoot>
                </table>
            </div>
                {/* <div className="form-group">
                  <label for="exampleInputEmail1">Email address</label>
                  <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter email" />
                </div>
                <button className="btn btn-primary" onClick={() => props.stepper.next()}>Next</button> */}
            </div>
            <div id="checkout-address" className="content">
                <GooglePlacesAutocomplete
                  onSelect={ props.updatePlace }
                />
                
                <div className="md-form form-sm">
                    <select class="form-control" onChange={ e => props.setRegion(e.target.value) }>
                        { props.config.shipping_regions.map( (r, k) => 
                            ( <option key={k} disabled={k === 0} selected={ k === 0 } value={JSON.stringify(r)}>{ r.shipping_region }</option>)
                        ) }
                    </select>
                </div>
                <div className="md-form form-sm">
                    <input type="text" className={`form-control form-control-sm`} />
                    <label> { props.address.address_1 === '' ? 'Address 1' : props.address.address_1 } </label>
                </div>
                <div className="md-form form-sm">
                    <input type="text" className={`form-control form-control-sm`} />
                    <label> { props.address.address_2 === '' ? 'Address 2' : props.address.address_2 } </label>
                </div>
                <div className="md-form form-sm">
                    <input type="text" className={`form-control form-control-sm`} />
                    <label> { props.address.city === '' ? 'City' : props.address.city } </label>
                </div>
                <div className="md-form form-sm">
                    <input type="text" className={`form-control form-control-sm`} />
                    <label> { props.address.state === '' ? 'State' : props.address.state } </label>
                </div>
                <div className="md-form form-sm">
                    <input type="text" className={`form-control form-control-sm`} />
                    <label> { props.address.country === '' ? 'Country' : props.address.country } </label>
                </div>
                <div className="md-form form-sm">
                    <input type="text" className={`form-control form-control-sm`} />
                    <label> { props.address.postalcode === '' ? 'Postal Code' : props.address.postalcode } </label>
                </div>
                <button className="btn btn-primary" onClick={() => { props.updateAddress(); props.stepper.next();}}>Continue</button>
              </div>
            <div id="checkout-payment-shipping" className="content text-center">
                <div className="md-form form-sm">
                    <input type="text" className={`form-control form-control-sm`} data-inputmask="'mask': '9999 - 9999 - 9999 - 9999'" />
                    <label> CREDIT CARDT NUMBER </label>
                </div>
                <div className="d-flex justify-content-between">
                    <div className="md-form form-sm w-100">
                        <input type="text" className={`form-control form-control-sm`} data-inputmask="'mask': '9 9 9 9'"/>
                        <label> CVV </label>
                    </div>
                    <div className="md-form form-sm w-100">
                        <input type="text" className={`form-control form-control-sm`} data-inputmask-inputformat="mm / yyyy" data-inputmask-alias="datetime"/>
                        <label> Expiry </label>
                    </div>
                </div>
                <select class="form-control" onChange={ (e) => props.setShipping(e.target.value) }>
                    { props.config.shipping.map( (r, k) => 
                        r.shipping_region_id === props.address.shipping_region_id && <option key={k} disabled={k === 0} selected={ k === 0 } value={JSON.stringify(r)}>{ `${r.shipping_type}` } </option>
                    ) }
                </select>
                <div className="md-form form-sm">
                    <input type="text" className={`form-control form-control-sm disabled`} />
                    <label> { props.config.tax.tax_percentage } </label>
                </div>
                <hr/>
                <div className="md-form form-sm">
                    <input type="text" className={`form-control form-control-sm disabled`} />
                    <label> SUBTOTAL : &pound; {props.getTotalPrice()} </label>
                </div>
                <div className="d-flex justify-content-between mx-2">
                    <small> Sales Tax </small>
                    <h6> &pound; { (props.getTotalPrice() * (props.config.tax.tax_percentage / 100)).toFixed(2) } </h6>
                </div>
                <div className="d-flex justify-content-between mx-2">
                    <small> Shipping </small>
                    <h6> &pound; { props.getShippingCost() } </h6>
                </div>
                <div className="d-flex justify-content-between mx-2">
                    <small> Total </small>
                    <h5> &pound; { (props.getTotalPrice() + parseFloat(props.getShippingCost()) + (props.getTotalPrice() * (props.config.tax.tax_percentage / 100)) ).toFixed(2) } </h5>
                </div>
              </div>
          </div>
        </div>
      </div>

);