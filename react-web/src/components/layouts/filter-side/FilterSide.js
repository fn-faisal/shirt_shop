import { Component } from 'react';
import { connect } from 'react-redux';

// view.
import view from './FilterSide.jsx';

class FilterSide extends Component {

    state = {
        curMaxValue: this.props.config.max_value || 0,
        curMinValue: 1
    }

    componentDidUpdate = () => $('#filter-range').slider({
        formatter: (value) => {
            if ( value instanceof Array ) {
                this.setState({ curMaxValue: value[1], curMinValue: value[0] })
            }
            return value;
        }
    });
    render = () => view({ ...this.state, ...this.props })
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(FilterSide);
