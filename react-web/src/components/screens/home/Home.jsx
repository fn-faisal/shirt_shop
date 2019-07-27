import React from 'react';

// the product filter.
import Filter from '../../layouts/filter/Filter';
import FilterSide from '../../layouts/filter-side/FilterSide';

// import item card.
import Item from '../../item/Item';

// page footer.
import PageNav from '../../layouts/page-nav/PageNav';

export default props => (
    <div className="container-fluid"> 
        <Filter />
        <div className="col-12">
            <div className="row my-4">
                <div className="col-md-3">
                    <FilterSide applyFilter={ () => props.applyFilter() } />
                </div>
                <div className="col-md-8">
                    <div className="row">
                        { props.product.data.filter( (p, i) => i < 6 )
                            .map( (product, k) => (
                                <div key={k} className="col-md-4">
                                    <Item item={product}/>
                                </div>
                            )) }
                    </div>
                </div>
            </div>
            <div className="row mr-5">
                { props.product.data.filter( (p, i) => i >= 6 )
                    .map( (product, k) => (
                        <div key={k} className="col-md-4">
                            <Item item={product} />
                        </div>
                    )) }
            </div>
        </div>
        <PageNav page={props.page} nextPage={ () => props.nextPage() } prevPage={ () => props.prevPage() } />
    </div>
); 