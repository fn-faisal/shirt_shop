import React from 'react';
import './Filter.scss'

export default props => (
    <div className="top-controls card mt-5 d-flex justify-content-between">
        <div className="filter d-flex flex-row p-3 align-items-center">
            <h4>Filter</h4>
            <div className="dropdown mx-3">
                <h6 className="pt-1 dropdown-toggle" data-toggle="dropdown">Gender</h6>
                <div className="dropdown-menu dropdown-primary mt-2">
                    <a className="dropdown-item" href="#">Male</a>
                    <a className="dropdown-item" href="#">Femal</a>
                </div>
            </div>
            <div className="dropdown mx-3">
                <h6 className="pt-1 dropdown-toggle" data-toggle="dropdown">Casual</h6>
                <div className="dropdown-menu dropdown-primary mt-2">
                    <a className="dropdown-item" href="#">Formal</a>
                </div>
            </div>
            <div className="dropdown mx-3">
                <h6 className="pt-1 dropdown-toggle" data-toggle="dropdown">Color</h6>
                <div className="dropdown-menu dropdown-primary mt-2">
                    <a className="dropdown-item" href="#">Green</a>
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
