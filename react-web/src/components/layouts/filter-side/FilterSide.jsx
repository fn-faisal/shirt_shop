import React from 'react'
import './FilterSide.scss';

export default props => (
    <div className="well">
        <div className="card bg-transparent norder-0 shadow-sm mt-3">
            <div className="card-header border-0">
                <span>
                        Filter 468 items
                </span>
                <ul className="list-group my-3">
                    <li className="my-1 filter-item list-group-item p-0 bg-transparent border-0"> <a href="#"> <span className="fa fa-times text-dark mx-2 filter-cancel-small"></span></a> <span className="filter-type">Gender:</span> Woman </li>
                    <li className="my-1 filter-item list-group-item p-0 bg-transparent border-0"> <a href="#"> <span className="fa fa-times text-dark mx-2 filter-cancel-small"></span></a> <span className="filter-type">Category:</span> Dresses </li>
                </ul>
            </div>
            <div className="card-body">
                <h5 className="card-title text-muted">Color</h5>
                <div className="row mx-2 d-flex justify-conten-between my-3">
                { props.config.colors.map( (color, key) => <span key={key} className="filter-color badge rounded-circle p-1" style={{ backgroundColor: color.value }}> { color.value.slice(0, 1).toUpperCase() } </span> ) }                    
                </div>
                <h5 className="card-title text-muted mt-4">Size</h5>
                <ul className="nav nav-pills filter-size">
                    { props.config.sizes.map( (size, key) => (
                        <li className="nav-item" key={key}>
                            <a className="filter-size-btn nav-link text-white m-2 filter-size-item" href="#">{ size.value }</a>
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
                    <button type="button" className="list-group-item list-group-item-action border-0">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="defaultCheck1"/>
                            <label className="form-check-label">
                                Abercrombie &
                            </label>
                        </div>
                    </button>
                    <button type="button" className="list-group-item list-group-item-action border-0">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="defaultCheck1"/>
                            <label className="form-check-label" >
                                Fitch
                            </label>
                        </div>
                    </button>                                       
                    <button type="button" className="list-group-item list-group-item-action border-0">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="defaultCheck1"/>
                            <label className="form-check-label" >
                                Adidas Originals
                            </label>
                        </div>
                    </button> 
                    <button type="button" className="list-group-item list-group-item-action border-0">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="defaultCheck1"/>
                            <label className="form-check-label" >
                                ASOS
                            </label>
                        </div>
                    </button>
                    <button type="button" className="list-group-item list-group-item-action border-0">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="defaultCheck1"/>
                            <label className="form-check-label">
                                Cheap Monday
                            </label>
                        </div>
                    </button> 
                </div> 
            </div>
            <div className="card-footer border-0 d-flex justify-content-around">
                <button className="action btn btn-danger badge-pill p-1">Apply</button>
                <button className="btn btn-transparent p-0 m-0 shadow-none text-danger bg-transparent"> <i className="fa fa-times text-danger"></i> Clear All</button>
            </div>
        </div>
    </div>
);