import React from 'react';
import './Filter.scss'

export default props => (
    <div className="top-controls card mt-5 d-flex justify-content-between">
        <div className="filter d-flex flex-row p-3 align-items-center">
            <h4>Filter</h4>
            <div className="dropdown mx-3">
                <h6 className="pt-1 dropdown-toggle" data-toggle="dropdown">Category { props.filter.category && <small>{ ` : ${props.filter.category}` }</small> }</h6>
                <div className="dropdown-menu dropdown-primary mt-2">
                    { props.config.categories.map( (category, key) => <a key={key} onClick={ () => props.updateFilter({ category: category.name, category_id: category.category_id }) } className="dropdown-item" href="javascrip:void(0)">{category.name}</a> ) }
                </div>
            </div>
            <div className="dropdown mx-3">
                <h6 className="pt-1 dropdown-toggle" data-toggle="dropdown">Sizes { props.filter.size && <small>{ ` : ${props.filter.size}` }</small> }</h6>
                <div className="dropdown-menu dropdown-primary mt-2">
                    { props.config.sizes.map( (size, key) => <a key={key} onClick={ () => props.updateFilter({ size: size.value }) } className="dropdown-item" href="javascrip:void(0)">{size.value}</a> ) }
                </div>
            </div>
            <div className="dropdown mx-3">
                <h6 className="pt-1 dropdown-toggle" data-toggle="dropdown">Color { props.filter.color && <small>{ ` : ${props.filter.color}` }</small> }</h6>
                <div className="dropdown-menu dropdown-primary mt-2" style={{ backgroundColor: 'lightgrey' }}>
                    { props.config.colors.map( (color, k ) => <a key={k} onClick={ () => props.updateFilter({ color: color.value }) } className="dropdown-item" href="javascrip:void(0)" style={{ color: color.value }}><i className="fas fa-paint-brush" ></i> {color.value}</a> ) }
                </div>
            </div>

        </div>
        <div className="sort d-flex p-3 justify-content-center">
            <h4>Sort</h4>
            <div className="dropdown mx-3">
                <h6 className="pt-1 dropdown-toggle" data-toggle="dropdown">Most relevent</h6>
                <div className="dropdown-menu dropdown-primary">
                    <a className="dropdown-item" href="#">Top rated</a>
                    <a className="dropdown-item" href="#">Hot</a>
                </div>
            </div>
        </div>
    </div>
)