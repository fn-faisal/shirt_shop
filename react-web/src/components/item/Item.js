import { Component } from 'react';
import { connect } from 'react-redux';

// view.
import view from './Items.jsx';

class Item extends Component {
    render = () => view({ ...this.state, ...this.props })
}

const mapStateToProps = state => state;

export default connect( mapStateToProps ) (Item);