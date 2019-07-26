import { Component } from 'react';
import { connect } from 'react-redux';

import dispatch from '../../../redux/filter/filter.dispatch';

// view.
import view from './FilterSide.jsx';

class FilterSide extends Component {

    state = {
        curMaxValue: this.props.config.max_value || 0,
        curMinValue: 1,
        updateFilter : ( data ) => dispatch.updateFilter( data ),
        updateDepartmentFilter: ( departmentName, add ) => {
            let departments = this.props.filter.departments ? this.props.filter.departments : '';
            let departmentsArray = departments.length > 0 ? departments.split(',') : [];
            // add to array.
            if ( !departmentsArray.includes(departmentName) && add === true ) 
                departmentsArray.push(departmentName);
            // remove from array.
            if ( departmentsArray.includes(departmentName) && add === false )
                departmentsArray = departmentsArray.filter( d => d !== departmentName );
            this.state.updateFilter({ departments: departmentsArray.length > 0 ? departmentsArray.join(',') : undefined })
        },
        clearFilter : () => dispatch.clearFilter()
    }

    componentDidUpdate = () => {
        console.log(this.props.filter.departments);
        $('#filter-range').slider({
            formatter: (value) => {
                if ( value instanceof Array ) {
                    this.setState({ curMaxValue: value[1], curMinValue: value[0] })
                }
                return value;
            }
        });
    }

    render = () => view({ ...this.state, ...this.props })
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(FilterSide);
