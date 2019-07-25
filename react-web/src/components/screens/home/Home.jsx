import React from 'react';

// the product filter.
import Filter from '../../layouts/filter/Filter';
import FilterSide from '../../layouts/filter-side/FilterSide';

// import item card.
import Item from '../../item/Item';

export default props => (
    <div className="container-fluid">
        <Filter />
        <div className="col-12">
            <div className="row my-4">
                <div className="col-md-3">
                    <FilterSide />
                </div>
                <div className="col-md-8">
                    <div className="row">
                        <div className="col-md-4">
                            <Item />
                        </div>
                        <div className="col-md-4">
                            <Item />
                        </div>
                        <div className="col-md-4">
                            <Item />
                        </div>
                        <div className="col-md-4">
                            <Item />
                        </div>
                        <div className="col-md-4">
                            <Item />
                        </div>
                        <div className="col-md-4">
                            <Item />
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mr-5">
                <div className="col-md-4">
                    <Item />
                </div>
                <div className="col-md-4">
                    <Item />
                </div>
                <div className="col-md-4">
                    <Item />
                </div>
                <div className="col-md-4">
                    <Item />
                </div>
                <div className="col-md-4">
                    <Item />
                </div>
            </div>
        </div>
    </div>
); 