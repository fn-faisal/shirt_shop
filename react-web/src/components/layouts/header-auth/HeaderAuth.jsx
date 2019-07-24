import React from 'react';
import './HeaderAuth.scss';

export default props => (
<nav className="navbar navbar-light shadow-none">
    <div className="header-auth">
        <strong>
            Hi! <a className="auth-link" href="javascript:void(0)" data-toggle="modal" data-target="#auth-dia">Sign in or Register</a>
        </strong> 
    </div>
    <div className="header-links">
        <ul className="nav">
            <li className="nav-item">
                <a className="nav-link hl" href="#">Daily Deals</a>
            </li>
            <li className="nav-item">
                <a className="nav-link hl" href="#">Sell</a>
            </li>
            <li className="nav-item">
                <a className="nav-link hl" href="#">Help & Contact</a>
            </li>
        </ul>
    </div>
</nav> 
);