import React from 'react'
import './FilterSide.scss';

export default props => (
    <div className="well">
        <div className="card bg-transparent norder-0 shadow-sm mt-3">
            <div className="card-header border-0">
                <span>
                        Filter Items
                </span>
            </div>
            <div className="card-body">
                <h5 className="card-title text-muted">Color</h5>
                <div className="row mx-2 d-flex justify-conten-between my-3">
                { props.config.colors.map( (color, key) => <span key={key} className={`filter-color badge rounded-circle p-1 ${ props.filter.color === color.value ? 'color-active' : '' }`} onClick={ () => props.updateFilter({ color: color.value, color_id: color.attribute_value_id }) } style={{ backgroundColor: color.value }}> { color.value.slice(0, 1).toUpperCase() } </span> ) }                    
                </div>
                <h5 className="card-title text-muted mt-4">Size</h5>
                <ul className="nav nav-pills filter-size">
                    { props.config.sizes.map( (size, key) => (
                        <li className="nav-item" key={key} onClick={ () => props.updateFilter({ size: size.value, size_id: size.attribute_value_id }) }>
                            <a className="filter-size-btn nav-link text-white m-2 filter-size-item" href="javascript:void(0)#">{ size.value }</a>
                        </li>
                    )) }
                </ul>
                <h5 className="card-title text-muted mt-4">Price Range</h5>
                <div className="filter-range">
                    <input id="filter-range" type="text" className="align-self-center"
                     data-slider-min="1" data-slider-max={ props.config.max_value } data-slider-step="1" data-slider-value={`[1, ${props.config.max_value}]`}/>
                    <div className="filter-range-price-text d-flex justify-content-between">
                        <span className="filter-range-price-min">&#163; { props.curMinValue } </span>
                        <span className="filter-range-price-min">&#163; { props.curMaxValue }</span>
                    </div>
                </div> 
                <h5 className="card-title text-muted mt-4">Departments</h5>
                <div className="brand-list list-group pl-0">
                    { props.config.departments.map ( ( dept, k ) => (
                        <button key={k} type="button" className="list-group-item list-group-item-action border-0">
                            <div className="form-check">
                                <input className="form-check-input" onClick={ (e) => props.updateDepartmentFilter(dept.name, dept.department_id, e.target.checked) } type="checkbox" id="defaultCheck1"/>
                                <label className="form-check-label" data-toggle="tooltip" title="Default tooltip">
                                    { dept.name }
                                </label>
                            </div>
                        </button>
                    )) }
                </div> 
            </div>
            <div className="card-footer border-0 d-flex justify-content-around">
                <button className="action btn btn-danger badge-pill p-1" onClick={ () => props.applyFilter() }>Apply</button>
                <button className="btn btn-transparent p-0 m-0 shadow-none text-danger bg-transparent" onClick={ () => props.clearFilter() }> <i className="fa fa-times text-danger"></i> Clear All</button>
            </div>
        </div>
    </div>
);