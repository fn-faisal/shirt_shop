import React from 'react';
import './HeaderAuth.scss';

export default props => (
<nav className="navbar navbar-light shadow-none">
    <div className="header-auth">
        <strong>
            Hi! 
            { Object.keys(props.auth.profile).length <= 0 && <a className="auth-link" href="javascript:void(0)" data-toggle="modal" data-target="#auth-dia"> Sign in or Register</a> }
            { Object.keys(props.auth.profile).length > 0 && <a className="auth-link" href="javascript:void(0)"> { props.auth.profile.name }</a> }
        </strong>
    </div>
    <div className="header-links">
        <ul className="nav">
            
            <li className="nav-item">
                <a className="nav-link hl" href="javascript:void(0)">Daily Deals</a>
            </li>
            <li className="nav-item">
                <a className="nav-link hl" href="javascript:void(0)">Help & Contact</a>
            </li>
            { Object.keys(props.auth.profile).length > 0 && <li className="h-100 p-3 mt-1 border-left"></li> }
            { 
                Object.keys(props.auth.profile).length > 0 && 
                <li className="nav-item">
                    <a className="nav-link hl" href="javascript:void(0)" onClick={ () => props.logout() }>LOGOUT</a>
                </li>
            }
        </ul>
    </div>
</nav> 
);