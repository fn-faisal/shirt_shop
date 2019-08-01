import React from 'react';
import './Header.scss';

import { Link } from 'react-router-dom';

import Cart from '../../cart/Cart';

export default props => (
    <nav className="nav navbar navbar-light shadow-sm bg-secondary">
        <div className="header-auth">
            <div className="header-brand">
                <h4 className="accent title"><Link to="/">SHOPMATE</Link> </h4>
            </div>
        </div>
        <div className="header-curr d-flex align-items-center">
            <div className="md-form m-1 w-50">
                <input type="text" id="search" onChange={ e => props.updateSearch(e.target.value) } className="form-control" data-toggle="dropdown" aria-haspopup="true"
                aria-expanded="false"/>
                <label htmlFor="search" >Search for shirts...</label>
                <div class="dropdown-menu dropdown-menu-right w-50">
                    { props.product.searching === true && <a class="dropdown-item text-center" href="javascript:void(0)">
                        <div class="spinner-border text-light" role="status">
                            <span class="sr-only">Loading...</span>
                        </div>
                    </a>}
                    { props.product.search_result.map( result => 
                        <Link class="dropdown-item" to={`item/${result.product_id}`}>{ result.name }</Link> ) }
                </div>
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