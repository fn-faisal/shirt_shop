import { Component } from 'react';
import { connect } from 'react-redux';

// view.
import view from './FilterSide.jsx';

class FilterSide extends Component {
    componentDidMount = () => $('#filter-range').slider({
        formatter: (value) => {
            return 'Current value: ' + value;
        }
    });
    render = () => view({ ...this.state, ...this.props })
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(FilterSide);
