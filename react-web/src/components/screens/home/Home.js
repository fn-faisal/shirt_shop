import { Component } from "react";  
import { connect } from 'react-redux';

import view from './Home.jsx';

// dispath.
import productDispatch from '../../../redux/product/product.dispatch';

class Home extends Component {
    state = {
        page: 1,
        nextPage: () => this.setState( prev => {
            productDispatch.getProducts( this.state.page + 1, this.props.filter );
            return {
                ...prev,
                page: this.state.page + 1
            } 
        }),
        prevPage: () => this.setState( prev => { 
            productDispatch.getProducts( this.state.page - 1, this.props.filter );
            return {
                ...prev,
                page: this.state.page - 1 
            };
        }),
        applyFilter : () => {
            productDispatch.getProducts( this.state.page, this.props.filter);
        }
    }
    componentWillMount = () => productDispatch.getProducts();
    render = () => view({ ...this.state, ...this.props });
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(Home);