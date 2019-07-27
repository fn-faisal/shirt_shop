import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

// redux.
import { Provider, connect } from 'react-redux';
import store from './redux/store';
import authDispatch from './redux/auth/auth.dispatch';
import configDispatch from './redux/config/config.dispatch';

const mapStateToProps = state => state;

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
import ItemFull from './components/screens/item_full/ItemFull';

//-------------------------------------------
// Dialogs.
//-------------------------------------------

import AuthDia from './components/dialogs/auth/AuthDia';

//-------------------------------------------
// Render.
//-------------------------------------------

class Index extends Component {

    componentWillMount = () => {
        authDispatch.load(); 
        configDispatch.loadConfig();
    }

    render = () => (
        <Provider store={store}>
            <Router>
                <HeaderAuth />
                <Header />
                <AuthDia />
                {/* <Link to={'checkout'}>Checkout</Link> */}
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/checkout" component={Checkout} />
                    <Route path="/item/:product_id" component={ItemFull} />
                </Switch>
                <Footer />
            </Router> 
        </Provider>
    );
}

const view = connect(mapStateToProps)(Index);
ReactDOM.render( <Index/>, document.getElementById('root'));
