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
        {/* <div className="header-links">
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
        </div> */}
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
            <Cart toggleCart={ () => props.toggleCart() } update={props.updateCart} />
            
        </div>
    </nav> 
);