import React from "react";
import './Cart.scss'

export default props => (
    <div className="cart dropdown">
        <a href="javascript:void(0)" className="cart-btn mx-4 bg-transparent text-dark dropdown-toggle" 
        onClick={ () => props.toggleCart() }
        aria-haspopup="true" aria-expanded="false" >
            <img src="/assets/img/icons-bag.png"/><span className="badge rounded-circle badge-danger position-absolute header-cart-count">6</span>
        </a>
        <div className="cart-dropdown mt-3 dropdown-menu dropdown-menu-right">
            <div className="cart-title mx-3 d-flex justify-content-between align-items-center">
                <h6 className="font-weight-bold">4 Items In Your Cart </h6>
                <a href="javascript:void(0)" onClick={ () => props.toggleCart() } >
                    <i className="fa fa-times"></i>
                </a>
            </div>
            <div className="cart-items">
                <table className="table">
                    <thead>
                        <tr>
                            <th><small>Item</small></th>
                            <th><small>Size</small></th>
                            <th><small>Quantity</small></th>
                            <th><small>Price</small></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="d-flex">
                                <img className="border cart-item-img" src={`${process.env.API_HOST}:${process.env.API_PORT}/img/products/arc-d-triomphe.gif`} alt=""/>
                                <div className="cart-item-info mx-4 align-self-center d-flex flex-column justify-content-center">
                                    <h6 className="cii-title">Green T-shirt 2016</h6>
                                    <span className="cii-category text-muted">Men BK369</span>
                                    <a href="#"> <i className="fa fa-times text-danger mr-1"></i> <small className="text-muted">Remove</small>  </a>
                                </div>
                            </td>
                            <td>XXL</td>
                            <td>
                                <div className="itf-quantity">
                                    <button className="btn btn-sm rounded-circle px-1 py-0">
                                        <i className="fa fa-minus cart-icon-mutate-qt"></i>
                                    </button>
                                    <button className="btn btn-sm btn-disabled shadow-sm border bg-transparent rounded-pill px-3 py-0">
                                        <span className="itf-quantity">2</span>
                                    </button>
                                    <button className="btn btn-sm rounded-circle px-1 py-0">
                                        <i className="fa fa-plus cart-icon-mutate-qt"></i>
                                    </button>
                                </div>
                            </td>
                            <td>
                                <h5>&pound;21</h5>
                                
                            </td>
                        </tr>
                        {/* <tr>
                            <td className="d-flex">
                                <img className="border" src="./img/images-shirt2.png" alt=""/>
                                <div className="cart-item-info mx-4 align-self-center d-flex flex-column justify-content-center">
                                    <h6 className="cii-title">Purple T-shirt 2016</h6>
                                    <span className="cii-category text-muted">Men BK369</span>
                                    <a href="#"> <i className="fa fa-times text-danger mr-1"></i> <small className="text-muted">Remove</small>  </a>
                                </div>
                            </td>
                            <td>XL</td>
                            <td>
                                <div className="itf-quantity">
                                    <button className="btn btn-sm rounded-circle px-1 py-0">
                                        <i className="fa fa-minus cart-icon-mutate-qt"></i>
                                    </button>
                                    <button className="btn btn-sm btn-disabled shadow-sm border bg-transparent rounded-pill px-3 py-0">
                                        <span className="itf-quantity">2</span>
                                    </button>
                                    <button className="btn btn-sm rounded-circle px-1 py-0">
                                        <i className="fa fa-plus cart-icon-mutate-qt"></i>
                                    </button>
                                </div>
                            </td>
                            <td>
                                <h5>&pound;13</h5>
                            </td>
                        </tr> */}
                        {/* <tr>
                            <td className="d-flex">
                                <img className="border" src="./img/images-shirt3.png" alt=""/>
                                <div className="cart-item-info mx-4 align-self-center d-flex flex-column justify-content-center">
                                    <h6 className="cii-title">Yellow T-shirt 2016</h6>
                                    <span className="cii-category text-muted">Men BK369</span>
                                    <a href="#"> <i className="fa fa-times text-danger mr-1"></i> <small className="text-muted">Remove</small>  </a>
                                </div>
                            </td>
                            <td>XL</td>
                            <td>
                                <div className="itf-quantity">
                                    <button className="btn btn-sm rounded-circle px-1 py-0">
                                        <i className="fa fa-minus cart-icon-mutate-qt"></i>
                                    </button>
                                    <button className="btn btn-sm btn-disabled shadow-sm border bg-transparent rounded-pill px-3 py-0">
                                        <span className="itf-quantity">2</span>
                                    </button>
                                    <button className="btn btn-sm rounded-circle px-1 py-0">
                                        <i className="fa fa-plus cart-icon-mutate-qt"></i>
                                    </button>
                                </div>
                            </td>
                            <td>
                                <h5>&pound;42</h5>
                            </td>
                        </tr> */}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colspan="3"><h4>TOTAL</h4></td>
                            <td> &pound; 76 </td>
                        </tr>
                        <tr>
                            <td className="text-left" colspan="2">
                                <a href="javascript:void(0)" onclick="closeCart()" className="btn btn-flat btn-white rounded-pill text-danger">Back to Shop</a>
                            </td>
                            <td className="text-right" colspan="2">
                                <a href="#" className="btn btn-flat btn-danger rounded-pill white-text">Checkout</a>
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    </div>
);