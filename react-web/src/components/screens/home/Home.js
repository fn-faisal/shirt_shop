import { Component } from "react";  
import { connect } from 'react-redux';

import view from './Home.jsx';

// dispath.
import dispatch from '../../../redux/product/product.dispatch';

class Home extends Component {
    componentWillMount = () => dispatch.getProducts();
    render = () => view({ ...this.state, ...this.props });
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(Home);