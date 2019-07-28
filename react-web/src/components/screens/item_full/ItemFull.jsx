import React from 'react';
import './ItemFull.scss'

export default props => (
<div className="container-fluid mt-5 w-100">
   <div className="item-full card border-0 shadow-sm">
       <div className="card-body d-flex justify-content-around">
           <div className="item-full-gallery ml-4 w-100 d-flex justify-content-center flex-column">
               <a className="item-cur-image " data-fancybox="gallery" href={ props.image !== '' ? props.imageRef(props.image) : 'https://via.placeholder.com/250' }>
                   { Object.keys(props.product.single).length > 0 ?  
                    (<img className="itf-img-display shine align-self-center w-75 h-75" src={ props.imageRef(props.image) } /> ) :
                    (<div className="placeholder-image shine"></div>)}
               </a>
               <div className="itf-img-set d-flex justify-content-around">
                   { Object.keys(props.product.single).length > 0 ?  
                    (<img className="itf-img-set-item p-3" onClick={ () => props.updateImage(props.product.single.image) } src={ props.imageRef(props.product.single.image) } /> ) :
                    (<div className="placeholder-image-small shine"></div>)}
                   { Object.keys(props.product.single).length > 0 ?  
                    (<img className="itf-img-set-item p-3" onClick={ () => props.updateImage(props.product.single.image_2) } src={ props.imageRef(props.product.single.image_2) } /> ) :
                    (<div className="placeholder-image-small shine"></div>)}
                   { Object.keys(props.product.single).length > 0 ?  
                    (<img className="itf-img-set-item p-3" onClick={ () => props.updateImage(props.product.single.thumbnail) } src={ props.imageRef(props.product.single.thumbnail) } /> ) :
                    (<div className="placeholder-image-small shine"></div>)}
                   
               </div>
           </div>
           <div className="item-full-content w-100">
               <div className="itf-bread-crumbs">
                   <p className="d-flex align-items-center">
                       <a href="#" className="text-muted mb-1"><small>Home</small></a>
                       <i className="fa fa-chevron-right text-muted btn-sm"></i>
                       { Object.keys(props.product.single).length === 0 && (<a href="#" className="active mb-1 shine"><small className="line px-5"></small></a>)}
                        { Object.keys(props.product.single).length > 0 && (<a href="#" className="text-muted mb-1"><small>{ props.config.departments.filter( d => d.department_id === props.product.single.category.department_id ).pop().name }</small></a>)}
                       <i className="fa fa-chevron-right text-muted btn-sm"></i>
                        { Object.keys(props.product.single).length === 0 && (<a href="#" className="active mb-1 shine"><small className="line px-5"></small></a>)}
                        { Object.keys(props.product.single).length > 0 && (<a href="#" className="active mb-1">{ props.product.single.category.name }</a>)}
                   </p>
               </div>
               <hr/>
               <div className="itf-rating">
                   <span className="fa fa-star shine-fa rating-checked"></span>
                   <span className="fa fa-star shine-fa rating-checked"></span>
                   <span className="fa fa-star shine-fa rating-checked"></span>
                   <span className="fa fa-star shine-fa rating-checked"></span>
                   <span className="fa fa-star shine-fa rating"></span>
               </div>
               { Object.keys(props.product.single).length > 0 ? 
                ( <h4 className="itf-title">{ props.product.single.name }</h4> ):
                (<h4 className="itf-title w-100 py-2 shine line"></h4>)}
               <h5 className="itf-price">
                   { Object.keys(props.product.single).length > 0 ? 
                    (   <div>
                            <span className={ props.product.single.discounted_price > 0 && `text-danger text-cut`}> &#163;{ props.product.single.price } </span>
                            { props.product.single.discounted_price > 0 && (<span>  &#163;{ props.product.single.discounted_price } </span>) }
                        </div>
                     )
                    :
                    ( <span className="py-2 shine w-25"></span> )}
                    
               </h5>
               <hr/>
               <h5 className="card-title text-muted mt-4">Color</h5>
               { Object.keys(props.product.single).length === 0 && (<h5 className="itf-price"><span className="py-3 shine w-75"></span></h5>)}
               { Object.keys(props.product.single).length > 0 && 
                    (
                        <div className="d-flex justify-conten-between my-3" >
                            { props.product.single.colors.map( color => <span onClick={ () => props.updateFilter({ color: color.value, color_id: color.attribute_value_id }) } className={`filter-color ${ props.filter.color === color.value ? 'filter-color-active' : '' } badge mx-2 rounded-circle p-1`} style={{ backgroundColor: color.value }}>  </span> ) }
                        </div>
                    )
                }
               <hr/>
               <h5 className="card-title text-muted mt-4 d-flex justify-content-between">Size <a href="#" className="text-muted mr-5"><small>SIZE GUIDE</small></a></h5>
               { Object.keys(props.product.single).length === 0 && (<h5 className="itf-price"><span className="py-3 shine w-75"></span></h5>)}
               { Object.keys(props.product.single).length > 0 && 
                    (
                        <ul className="nav nav-pills filter-size">
                            { props.product.single.sizes.map( size => 
                                <li className="nav-item" onClick={ () => props.updateFilter({ size: size.value, size_id: size.attribute_value_id }) } >
                                    <a className={`filter-size-btn nav-link text-white m-2 filter-size-item ${ props.filter.size === size.value ? 'active' : '' }`} href="#">{size.value}</a>
                                </li>
                            )}
                        </ul>
                    )
                }
               {/* <ul className="nav nav-pills filter-size">
                   <li className="nav-item">
                       <a className="filter-size-btn nav-link text-white m-2 filter-size-item" href="#">XS</a>
                   </li>
                   <li className="nav-item">
                       <a className="filter-size-btn nav-link active m-2 filter-size-item" href="#">S</a>
                   </li>
                   <li className="nav-item">
                       <a className="filter-size-btn nav-link text-white m-2 filter-size-item" href="#">M</a>
                   </li>
                   <li className="nav-item">
                       <a className="filter-size-btn nav-link text-white m-2 filter-size-item" href="#">L</a>
                   </li>
                   <li className="nav-item">
                       <a className="filter-size-btn nav-link text-white m-2 filter-size-item" href="#">XL</a>
                   </li>
               </ul> */}
               <hr/>
               <h5 className="card-title text-muted mt-4">Quantity</h5>
               <div className="itf-quantity">
                   <button className="btn btn-sm rounded-circle px-2 py-2" onClick={ () => props.decQuantity() }>
                       <i className="fa fa-minus"></i>
                   </button>
                   <button className="btn btn-sm btn-disabled shadow-sm border bg-transparent rounded-pill px-3 py-1">
                       <span className="itf-quantity">{ props.quantity }</span>
                   </button>
                   <button className="btn btn-sm rounded-circle px-2 py-2" onClick={ () => props.incQuantity() }>
                       <i className="fa fa-plus"></i>
                   </button>
               </div>
               <div className="itf-actions d-flex justify-content-around mt-4">
                   <a href="javascript:void(0)" id="addToCartBtn" className="btn btn-flat btn-danger rounded-pill">Add To Cart</a>
                   <a href="#" className="btn btn-flat btn-transparent rounded-pill shadow-none"> <i className="fa fa-heart text-light mr-2"></i> Add to wishlist</a>
               </div>
           </div>
       </div>
       <div className="card-footer">
           <h4 className="ml-5 mt-4">Product reviews</h4>
           <h4 className="w-100 py-5 shine text-center"></h4>
           {/* <div className="itf-review-container ml-5 mt-5">
               <div className="itf-review d-flex justify-content-around">
                   <div className="itf-review-left">
                       <div className="itf-rating">
                           <span className="fa fa-star rating-checked"></span>
                           <span className="fa fa-star rating-checked"></span>
                           <span className="fa fa-star rating-checked"></span>
                           <span className="fa fa-star rating-checked"></span>
                           <span className="fa fa-star rating"></span>
                       </div> 
                       <p>Pablo Permins</p>
                       <small className="text-muted">one hour ago</small>
                   </div>
                   <div className="itf-review-right">
                       <p className="review-content text-muted">Got this through the post the other day and right from opening the packet, I knew this was quality.</p>
                       <div className="itf-review-lkcmm d-flex">
                           <div className="review-like ml-4">
                               <button className="btn btn-sm rounded-circle px-2 py-2">
                                   <i className="review-like-icon fa fa-heart text-danger"></i>
                               </button>
                               <span className="review-like-count text-muted">113</span>
                           </div>
                           <div className="review-comments ml-4">
                               <button className="btn btn-sm rounded-circle px-2 py-2">
                                   <i className="review-like-icon fa fa-comment text-muted"></i>
                               </button>
                               <span className="review-like-count text-muted">113</span>
                           </div>
                       </div>
                   </div>
               </div>
           </div> */}
           <hr/>
           <div className="itf-review-form pt-4">
               <h4 className="ml-5 mt-4">Add a review</h4>
               <form className="text-center ml-5 mt-4" style={{ color: '#757575' }} action="#">
                   <div className="md-form mt-0">
                       <input type="text" id="itfNickName" className="form-control"/>
                       <label >Choose a nickname</label>
                   </div>

                   <div className="md-form mt-0">
                       <textarea type="textarea" id="itfReview" className="form-control md-textarea"></textarea>
                       <label >Your review</label>
                       <small id="itfReviewHelpBlock" className="form-text text-muted mb-4">
                           Your review must be at leat 50 characters. <a className="text-danger" href="#">FULL REVIEW GUIDLINES</a>
                       </small>
                   </div>

                   <div className="mt-4 mb-3">
                       <h5 className="align-self-left">Rate the product</h5>
                       <input type="hidden" id="itf-review-rating"/>
                       <div className="itf-rating">
                           <span className="fa fa-star rating-checked"></span>
                           <span className="fa fa-star rating-checked"></span>
                           <span className="fa fa-star rating-checked"></span>
                           <span className="fa fa-star rating-checked"></span>
                           <span className="fa fa-star rating"></span>
                       </div>
                   </div>

                   <button type="submit" className="btn btn-flat btn-danger rounded-pill">Submit</button>
                                           
               </form>
                   
           </div>
       </div>
   </div>

   {/* <div className="recommendations">
       <h5>You may also like</h5>
       <div className="rec-container d-flex">
           <div className="col-md-3">
               <div className="well">
                   <div className="card item-card booking-card m-4" style={{ width: '100%' }}>
                       <div className="view overlay d-flex flex-column">
                           <a href="#" className="item-trending-label btn btn-flat btn-danger">HOT</a>
                           <img className="item-card-img p-4" src="./img/images-shirt17.png" alt="Card image cap"/>
                           <a href="#">
                               <div className="mask rgba-white-slight"></div>
                           </a>
                       </div>
                       
                       <div className="card-body d-flex flex-column align-items-center">
                           <h5 className="card-title text-center pt-4 font-weight-bold"><a>New Look T-Shirt In Gradient Fade</a></h5>
                           <span className="text-danger"> &#163; 14.99 </span>
                       </div>
                       <div className="item-card-top ict-quickview">
                           <a href="#" className="fa fa-heart text-danger bg-transparent"></a> <br/>
                           <a href="#" className="btn btn-flat btn-danger rounded-pill">Quick view</a>
                       </div>
                   </div>
               </div>
           </div>
           <div className="col-md-3">
               <div className="well">
                    <div className="card item-card booking-card m-4" style={{ width: '100%' }}>
                       <div className="view overlay d-flex flex-column">
                           <img className="item-card-img p-4" src="./img/images-shirt16.png" alt="Card image cap"/>
                           <a href="#!">
                               <div className="mask rgba-white-slight"></div>
                           </a>
                       </div>
                       
                       <div className="card-body d-flex flex-column align-items-center">
                           <h5 className="card-title font-weight-bold"><a>Men's Knitwear Offers</a></h5>
                           <a href="#" className="btn btn-flat btn-danger rounded-pill">Buy now</a>
                       </div>
                   </div>
               </div>
           </div>
           <div className="col-md-3">
               <div className="well">
                    <div className="card item-card booking-card m-4" style={{ width: '100%' }}>
                       <div className="view overlay d-flex flex-column">
                           <img className="item-card-img p-4" src="./img/images-shirt15.png" alt="Card image cap"/>
                           <a href="#!">
                               <div className="mask rgba-white-slight"></div>
                           </a>
                       </div>
                       
                       <div className="card-body d-flex flex-column align-items-center">
                           <h5 className="card-title font-weight-bold"><a>Men's Teashirts</a></h5>
                           <span> &#163; 14.99 </span>
                           <div className="d-flex justify-conten-between my-3">
                               <span className="filter-color filter-color-active badge mr-2 shadow-none rounded-circle p-1" style={{ width: '20px', backgroundColor: 'cyan' }}>  </span>
                               <span className="filter-color badge mx-2 shadow-none rounded-circle p-1" style={{ width: '20px', height: '20px', backgroundColor: 'green' }}>  </span>
                               <span className="filter-color badge mx-2 shadow-none rounded-circle p-1" style={{ width: '20px', backgroundColor: 'red' }}>  </span>
                           </div>
                       </div>
                       <div className="item-card-top ict-quickview">
                           <a href="#" className="fa fa-heart text-danger bg-transparent"></a> <br/>
                           <a href="#" className="btn btn-flat btn-danger rounded-pill">Quick view</a>
                       </div>
                   </div>
               </div>
           </div>
           <div className="col-md-3">
               <div className="well">
                    <div className="card item-card booking-card m-4" style={{ width: '100%' }}>
                       <div className="view overlay d-flex flex-column">
                           <h5 className="card-title text-center pt-4 font-weight-bold"><a>Men's Shirt Offers</a></h5>
                           <img className="item-card-img p-4" src="./img/images-shirt14.png" alt="Card image cap"/>
                           <a href="#!">
                               <div className="mask rgba-white-slight"></div>
                           </a>
                       </div>
                       
                       <div className="card-body d-flex flex-column align-items-center">
                           <span className="text-danger"> From &#163; 14.99 </span>
                       </div>
                       <div className="item-card-top ict-quickview">
                           <a href="#" className="fa fa-heart text-danger bg-transparent"></a> <br/>
                           <a href="#" className="btn btn-flat btn-danger rounded-pill">Quick view</a>
                       </div>
                   </div>
               </div>
           </div>
           <div className="col-md-3">
               <div className="well">
                    <div className="card item-card booking-card m-4" style={{ width: '100%' }}>
                       <div className="view overlay d-flex flex-column">
                           <h5 className="card-title text-center pt-4 font-weight-bold"><a>Men's Shirt Offers</a></h5>
                           <img className="item-card-img p-4" src="./img/images-shirt14.png" alt="Card image cap"/>
                           <a href="#!">
                               <div className="mask rgba-white-slight"></div>
                           </a>
                       </div>
                       
                       <div className="card-body d-flex flex-column align-items-center">
                           <span className="text-danger"> From &#163; 14.99 </span>
                       </div>
                       <div className="item-card-top ict-quickview">
                           <a href="#" className="fa fa-heart text-danger bg-transparent"></a> <br/>
                           <a href="#" className="btn btn-flat btn-danger rounded-pill">Quick view</a>
                       </div>
                   </div>
               </div>
           </div>
       </div>
   </div> */}
</div>
);