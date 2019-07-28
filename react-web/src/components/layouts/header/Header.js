import { Component } from 'react';
import vHeader from './Header.jsx';

// connect redux
import { connect } from 'react-redux';

class Header extends Component {
    state = {
        toggleCart: () => $('.cart-dropdown').css('display', $('.cart-dropdown').css('display') === 'none' ? 'block' : 'none')
    }
    render = () => vHeader({...this.state, ...this.props})
}

const mapStateToProps = state => state;
export default connect(mapStateToProps)(Header);