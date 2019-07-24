import React from 'react';
import './HeaderAuth.scss';

export default props => (
    <nav class="navbar navbar-light shadow-none">
    <div class="header-auth">
        <strong>
            Hi! <a class="auth-link" href="javascript:void(0)" data-toggle="modal" data-target="#auth-dia">Sign in or Register</a>
        </strong> 
    </div>
    <div class="header-links">
        <ul class="nav">
            <li class="nav-item">
                <a class="nav-link hl" href="#">Daily Deals</a>
            </li>
            <li class="nav-item">
                <a class="nav-link hl" href="#">Sell</a>
            </li>
            <li class="nav-item">
                <a class="nav-link hl" href="#">Help & Contact</a>
            </li>
        </ul>
    </div>
</nav> 
);