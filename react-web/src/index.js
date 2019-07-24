import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

//-------------------------------------------
// Styles
//-------------------------------------------

import './styles/style.scss';

//-------------------------------------------
// Layout.
//-------------------------------------------

import Header from './components/layouts/header/Header';
import HeaderAuth from './components/layouts/header-auth/HeaderAuth';
import Footer from './components/layouts/footer/Footer';

//-------------------------------------------
// Screens.
//-------------------------------------------

import Home from './components/screens/home/Home';
import Checkout from './components/screens/checkout/Checkout';

//-------------------------------------------
// Dialogs.
//-------------------------------------------

import AuthDia from './components/dialogs/auth/AuthDia';

//-------------------------------------------
// Render.
//-------------------------------------------

ReactDOM.render(
    <Router>
        <HeaderAuth />
        <Header />
        <AuthDia />
        {/* <Link to={'checkout'}>Checkout</Link> */}
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/checkout" component={Checkout} />
        </Switch>
        <Footer />
    </Router> , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
