import { Component } from 'react';
import vHeader from './Header.jsx';

// connect redux
import { connect } from 'react-redux';

class Header extends Component {
    render = () => vHeader(this.state)
}

const mapStateToProps = state => state;
export default connect(mapStateToProps)(Header);