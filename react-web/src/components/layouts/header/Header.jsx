import React from 'react';
import './Header.scss';

import Cart from '../../cart/Cart';

export default props => (
    <nav className="nav navbar navbar-light shadow-sm bg-secondary">
        <div className="header-auth">
            <div className="header-brand">
                <h4 className="accent title">SHOPMATE</h4>
            </div>
        </div>
        <div className="header-links">
            <ul className="nav">
                <li className="nav-item">
                    <a className="nav-link h hl" href="#">Women</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link h hl" href="#">Men</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link h hl" href="#">Kids</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link h hl" href="#">Shoes</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link h hl" href="#">Brands</a>
                </li>
            </ul>
        </div>
        <div className="header-curr d-flex align-items-center">
            <div className="md-form m-1">
                <input type="email" id="search" className="form-control" />
                <label htmlFor="search">Search for shirts...</label>
            </div>
            <a href="#" className="cart-btn mx-4 bg-transparent text-dark" 
            aria-haspopup="true" aria-expanded="false">
                <i className="fa fa-search"></i>
            </a>
            {/* Add to a component */}
            <Cart toggleCart={ () => props.toggleCart() } />
            {/* <div className="cart dropdown">
                <a href="javascript:void(0)" className="cart-btn mx-4 bg-transparent text-dark dropdown-toggle" 
                onClick={ () => props.toggleCart() }
                aria-haspopup="true" aria-expanded="false" >
                    <img src="/assets/img/icons-bag.png"/><span className="badge rounded-circle badge-danger position-absolute header-cart-count">6</span>
                </a>
                <div class="cart-dropdown mt-3 dropdown-menu dropdown-menu-right">
                    <div class="cart-title mx-3 d-flex justify-content-between align-items-center">
                        <h6 class="font-weight-bold">4 Items In Your Cart </h6>
                        <a href="javascript:void(0)" onClick={ () => props.toggleCart() } >
                            <i class="fa fa-times"></i>
                        </a>
                    </div>
                    <div class="cart-items">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th><small>Item</small></th>
                                    <th><small>Size</small></th>
                                    <th><small>Quantity</small></th>
                                    <th><small>Price</small></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="d-flex">
                                        <img class="border" src="./img/images-shirt1.png" alt=""/>
                                        <div class="cart-item-info mx-4 align-self-center d-flex flex-column justify-content-center">
                                            <h6 class="cii-title">Green T-shirt 2016</h6>
                                            <span class="cii-category text-muted">Men BK369</span>
                                            <a href="#"> <i class="fa fa-times text-danger mr-1"></i> <small class="text-muted">Remove</small>  </a>
                                        </div>
                                    </td>
                                    <td>XXL</td>
                                    <td>
                                        <div class="itf-quantity">
                                            <button class="btn btn-sm rounded-circle px-1 py-0">
                                                <i class="fa fa-minus cart-icon-mutate-qt"></i>
                                            </button>
                                            <button class="btn btn-sm btn-disabled shadow-sm border bg-transparent rounded-pill px-3 py-0">
                                                <span class="itf-quantity">2</span>
                                            </button>
                                            <button class="btn btn-sm rounded-circle px-1 py-0">
                                                <i class="fa fa-plus cart-icon-mutate-qt"></i>
                                            </button>
                                        </div>
                                    </td>
                                    <td>
                                        <h5>&pound;21</h5>
                                        
                                    </td>
                                </tr>
                                <tr>
                                    <td class="d-flex">
                                        <img class="border" src="./img/images-shirt2.png" alt=""/>
                                        <div class="cart-item-info mx-4 align-self-center d-flex flex-column justify-content-center">
                                            <h6 class="cii-title">Purple T-shirt 2016</h6>
                                            <span class="cii-category text-muted">Men BK369</span>
                                            <a href="#"> <i class="fa fa-times text-danger mr-1"></i> <small class="text-muted">Remove</small>  </a>
                                        </div>
                                    </td>
                                    <td>XL</td>
                                    <td>
                                        <div class="itf-quantity">
                                            <button class="btn btn-sm rounded-circle px-1 py-0">
                                                <i class="fa fa-minus cart-icon-mutate-qt"></i>
                                            </button>
                                            <button class="btn btn-sm btn-disabled shadow-sm border bg-transparent rounded-pill px-3 py-0">
                                                <span class="itf-quantity">2</span>
                                            </button>
                                            <button class="btn btn-sm rounded-circle px-1 py-0">
                                                <i class="fa fa-plus cart-icon-mutate-qt"></i>
                                            </button>
                                        </div>
                                    </td>
                                    <td>
                                        <h5>&pound;13</h5>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="d-flex">
                                        <img class="border" src="./img/images-shirt3.png" alt=""/>
                                        <div class="cart-item-info mx-4 align-self-center d-flex flex-column justify-content-center">
                                            <h6 class="cii-title">Yellow T-shirt 2016</h6>
                                            <span class="cii-category text-muted">Men BK369</span>
                                            <a href="#"> <i class="fa fa-times text-danger mr-1"></i> <small class="text-muted">Remove</small>  </a>
                                        </div>
                                    </td>
                                    <td>XL</td>
                                    <td>
                                        <div class="itf-quantity">
                                            <button class="btn btn-sm rounded-circle px-1 py-0">
                                                <i class="fa fa-minus cart-icon-mutate-qt"></i>
                                            </button>
                                            <button class="btn btn-sm btn-disabled shadow-sm border bg-transparent rounded-pill px-3 py-0">
                                                <span class="itf-quantity">2</span>
                                            </button>
                                            <button class="btn btn-sm rounded-circle px-1 py-0">
                                                <i class="fa fa-plus cart-icon-mutate-qt"></i>
                                            </button>
                                        </div>
                                    </td>
                                    <td>
                                        <h5>&pound;42</h5>
                                    </td>
                                </tr>
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td colspan="3"><h4>TOTAL</h4></td>
                                    <td> &pound; 76 </td>
                                </tr>
                                <tr>
                                    <td class="text-left" colspan="2">
                                        <a href="javascript:void(0)" onclick="closeCart()" class="btn btn-flat btn-white rounded-pill text-danger">Back to Shop</a>
                                    </td>
                                    <td class="text-right" colspan="2">
                                        <a href="#" class="btn btn-flat btn-danger rounded-pill white-text">Checkout</a>
                                    </td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div> 
            </div>*/}
            
        </div>
    </nav> 
);