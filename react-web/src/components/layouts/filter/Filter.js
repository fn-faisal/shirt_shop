import { Component } from 'react';
import { connect } from 'react-redux';

// view.
import view from './Filter.jsx';

class Filter extends Component {
    render = () => view({ ...this.state, ...this.props })
}

const mapStateToProps = state => state;

export default connect( mapStateToProps ) (Filter);