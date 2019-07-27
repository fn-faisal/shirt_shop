import React from 'react';
import './Item.scss';
import { Link } from 'react-router-dom';

export default props => (
<div className="well">    
    <div className="card item-card booking-card m-4">
        <div className="view overlay d-flex flex-column">
            <img className="item-card-img p-4" src={ `${process.env.API_HOST}:${process.env.API_PORT}/img/products/${props.item.image}` } alt="Card image cap"/>
            <Link to={`/item/${props.item.product_id}`}>
                <div className="mask rgba-white-slight"></div>
            </Link>
        </div>
        
        <div className="card-body d-flex flex-column align-items-center">
            <h5 className="card-title font-weight-bold"><Link to={`/item/${props.item.product_id}`}> { props.item.name } </Link></h5>
            { props.item.discounted_price == 0 && (<span> &#163; { props.item.price } </span>)}  
            { props.item.discounted_price > 0 && (<span> <del className="text-danger">&#163;{ props.item.price }</del> &#163;{props.item.discounted_price}  </span>)}
            {/* <div className="d-flex justify-conten-between my-3">
                <span className="filter-color badge mr-2 shadow-none rounded-circle p-1" style={{ backgroundColor: 'cyan' }}>  </span>
                <span className="filter-color badge mx-2 shadow-none rounded-circle p-1" style={{ backgroundColor: 'green'}}>  </span>
                <span className="filter-color badge mx-2 shadow-none rounded-circle p-1" style={{ backgroundColor: 'red' }}>  </span>
            </div> */}
        </div>
        {/* <!-- Card Top Overlay --> */} 
        <div className="item-card-top ict-quickview">
            <h5 className="card-title font-weight-bold bg-transparent"><a className="text-dark bg-transparent" href="#">{ props.item.name }</a></h5>
            { props.item.discounted_price == 0 && (<span> &#163; { props.item.price } </span>)}  
            { props.item.discounted_price > 0 && (<span> <del className="text-danger">&#163;{ props.item.price }</del> &#163;{props.item.discounted_price}  </span>)}
            {/* <div className="item-orverlay-color-list d-flex justify-conten-between my-3">
                <span className="filter-color badge mr-2 shadow-none rounded-circle p-1 active" style={{ backgroundColor: 'cyan' }}> C </span>
                <span className="filter-color badge mx-2 shadow-none rounded-circle p-1" style={{ backgroundColor: 'green' }}>  </span>
                <span className="filter-color badge mx-2 shadow-none rounded-circle p-1" style={{ backgroundColor: 'red' }}>  </span>
            </div> */}
            <div className="item-card-actions d-flex">
                {/* <a href="#" className="item-size-btn justify-content-between btn btn-flat btn-transparent rounded-pill dropdown-toggle" id="n_item_size" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Size
                    <i className="fa fa-chevron-down ml-3"></i>
                </a>
                <div className="item-size-menu dropdown-menu my-1" aria-labelledby="n_item_size">
                    <h6 className="dropdown-header">Select a size</h6>
                    <a className="dropdown-item" href="#">XS</a>
                    <a className="dropdown-item" href="#">S</a>
                    <a className="dropdown-item" href="#">M</a>
                    <a className="dropdown-item" href="#">L</a>
                    <a className="dropdown-item" href="#">XL</a>
                </div> */ } 
                <Link to={`/item/${props.item.product_id}`} className="btn btn-flat btn-danger rounded-pill">Buy now</Link>
                {/* <a href="#" className="btn btn-flat btn-danger rounded-pill">Buy now</a> */}
            </div> 
            {/* <div className="item-favorite-text mt-4 text-muted">  
                <a href="#" className="mx-2"><i className="fa fa-heart text-danger bg-transparent"></i></a>  Add to favorite
            </div>  */}
        </div>
    </div>
</div>
);