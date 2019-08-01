import { Component } from 'react';
import vHeader from './Header.jsx';

// dispatch.
import productDispatch from '../../../redux/product/product.dispatch';

// connect redux
import { connect } from 'react-redux';

class Header extends Component {
    state = {
        product_search_page: 1,
        toggleCart: () => {
            $('.cart-dropdown').css('display', $('.cart-dropdown').css('display') === 'none' ? 'block' : 'none');
        },
        updateSearch: q => { 
            if ( q !== '' ) {
                productDispatch.searching(true);
                productDispatch.searchProduct(q, this.state.product_search_page);
            } else productDispatch.clearSearch();
        }
    }

    render = () => vHeader({...this.state, ...this.props})
}

const mapStateToProps = state => state;
export default connect(mapStateToProps)(Header);