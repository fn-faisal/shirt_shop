import { Component } from 'react';
import { connect } from 'react-redux';

import dispatch from '../../../redux/filter/filter.dispatch';

// view.
import view from './Filter.jsx'; 

class Filter extends Component {
    state = {
        updateFilter : ( data ) => dispatch.updateFilter( data ),
        clearFilter : () => dispatch.clearFilter()
    }
    render = () => view({ ...this.state, ...this.props })
}

const mapStateToProps = state => state;

export default connect( mapStateToProps ) (Filter);