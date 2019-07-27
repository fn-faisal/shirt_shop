import { Component } from 'react';
import { connect } from 'react-redux';

import productDispatch from '../../../redux/product/product.dispatch';

import view from './ItemFull.jsx';

class ItemFull extends Component {
    state = {
        image: '', 
        updateImage: ( val ) => this.setState({ image: val }),
        imageRef: (img) => `${process.env.API_HOST}:${process.env.API_PORT}/img/products/${img}`
    }
    componentDidUpdate = () => {
        if ( Object.keys(this.props.product.single).length > 0 && this.state.image === '' )
            this.setState({ image: this.props.product.single.image })
    }
    componentWillMount = () => {
        let { match : { params : { product_id } } } = this.props;
        productDispatch.getProduct( product_id );
    }
    render = () => view({ ...this.props, ...this.state });
}

const mapStateToProps = state => state;

export default connect( mapStateToProps ) ( ItemFull );