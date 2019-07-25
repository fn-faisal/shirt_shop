import { Component } from "react";
import view from './HeaderAuth.jsx';

// connect redux
import { connect } from 'react-redux';
// import dispatch.
import authDispatch from '../../../redux/auth/auth.dispatch';


class HeaderAuth extends Component {

    state = {
        logout: () => authDispatch.logout()
    }

    //-------------------------------------------
    // Render.
    //-------------------------------------------

    render = () => view({ ...this.state, ...this.props })
}

const mapStateToProps = state => state;
export default connect(mapStateToProps)(HeaderAuth);