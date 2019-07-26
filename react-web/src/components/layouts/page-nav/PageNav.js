import { Component } from 'react';
import { connect } from 'react-redux';

// the view.
import view from './PageNav.jsx';

class PageNav extends Component {
    render = () => view({ ...this.state, ...this.props });
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(PageNav);