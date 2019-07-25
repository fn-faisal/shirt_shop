import React from 'react';
import './AuthDia.scss';

import FacebookAuth from 'react-facebook-auth';

const FacebookLogin = ({ onClick }) => (
    <button onClick={onClick} type="button" className="btn bg-white btn-sm waves-effect facebook-btn"> <small>Use</small><i className="fab fa-facebook-f ml-2"></i>  Facebook</button>
);
  

export default props => (
    <div>
        <div className="modal fade show" id="auth-dia">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-c-tabs">
                        <ul className="nav nav-tabs md-tabs tabs-2 light-blue darken-3" role="tablist">
                            <li className="nav-item waves-effect waves-light">
                                <a className="nav-link active" data-toggle="tab" href="#panel17" role="tab" aria-selected="true">
                                <i className="fas fa-user mr-1"></i> Login</a>
                            </li>
                            <li className="nav-item waves-effect waves-light">
                                <a className="nav-link" data-toggle="tab" href="#login" role="tab" aria-selected="false">
                                <i className="fas fa-user-plus mr-1"></i> Register</a>
                            </li>
                            <li className="m-2">
                                <h4 className="text-white">OR</h4>
                            </li>
                            <li className="flex-1">
                                <FacebookAuth
                                    appId={process.env.FACEBOOK_APP_ID}
                                    callback={ resp => props.onFacebookLogin(resp) }
                                    component={FacebookLogin} />
                            </li>
                        </ul>

                        <div className="tab-content">
                            <div className="tab-pane fade in active show" id="panel17" role="tabpanel">
                                <div className="modal-body mb-1">
                                    <div className="md-form form-sm">
                                        <i className="form-ico fas fa-envelope prefix"></i>
                                        <input type="text" className={`form-control form-control-sm`} onChange={e => props.updateCustomer('email', e.target.value)}/>
                                        <label>Your email</label>
                                        <small className={`form-text text-muted ${props.hasError('email') === true ? 'error' : 'no-error'}`}>
                                            { props.getError('email') }
                                        </small>
                                    </div>
                                    <div className="md-form form-sm">
                                        <i className="form-ico fas fa-lock prefix"></i>
                                        <input type="password" className={`form-control form-control-sm`} onChange={e => props.updateCustomer('password', e.target.value)}/>
                                        <label>Your password</label>
                                        <small className={`form-text text-muted ${props.hasError('password') === true ? 'error' : 'no-error'}`}>
                                            { props.getError('password') }
                                        </small>
                                    </div>
                                    <div className="text-center mt-4">
                                        <button className="btn bg-accent waves-effect waves-light" onClick={ () => props.login() }>Log in
                                            <i className="form-ico fas fa-sign-in ml-1"></i>
                                        </button>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <div className="options text-center text-md-right mt-1">
                                        <p>Forgot <a href="#" className="link"> Password?</a></p>
                                    </div>
                                    <button type="button" className="btn btn-outline-accent waves-effect ml-auto" data-dismiss="modal">Close</button>
                                </div>
                            </div>

                            <div className="tab-pane fade" id="login" role="tabpanel">
                                <div className="modal-body">
                                    <div className="form md-form form-sm">
                                        <i className="form-ico fas fa-user prefix"></i>
                                        <input type="text" className={`form-control form-control-sm`} onChange={e => props.updateCustomer('name', e.target.value)}/>
                                        <label>Your name</label>
                                        <small className={`form-text text-muted ${props.hasError('name') === true ? 'error' : 'no-error'}`}>
                                            { props.getError('name') }
                                        </small>
                                    </div>
                                    <div className="form md-form form-sm">
                                        <i className="form-ico fas fa-envelope prefix"></i>
                                        <input type="text" className={`form-control form-control-sm`} onChange={e => props.updateCustomer('email', e.target.value)}/>
                                        <label>Your email <span className={props.hasError('email') === true ? 'error' : 'no-error' }>*</span></label>
                                        <small className={`form-text text-muted ${props.hasError('email') === true ? 'error' : 'no-error'}`}>
                                            { props.getError('email') }
                                        </small>
                                    </div>
                                    <div className="form md-form form-sm">
                                        <i className="form-ico fas fa-lock prefix"></i>
                                        <input type="password" className={`form-control form-control-sm`} onChange={e => props.updateCustomer('password', e.target.value) }/>
                                        <label >Your password <span className={props.hasError('password') === true ? 'error' : 'no-error' }>*</span></label>
                                        <small className={`form-text text-muted ${props.hasError('password') === true ? 'error' : 'no-error'}`}>
                                            { props.getError('password') }
                                        </small>
                                    </div>
                                    <div className="form md-form form-sm">
                                        <i className="form-ico fas fa-lock prefix"></i>
                                        <input type="password" className={`form-control form-control-sm`} onChange={ e => props.updateCustomer('confirm-password', e.target.value) } />
                                        <label>Repeat password  <span className={props.hasError('confirm-password') === true ? 'error' : 'no-error' }>*</span></label>
                                        <small className={`form-text text-muted ${props.hasError('confirm-password') === true ? 'error' : 'no-error'}`}>
                                            { props.getError('confirm-password') }
                                        </small>
                                    </div>

                                    <div className="text-center form-sm mt-4">
                                        <button onClick={ () => props.register() } className="btn bg-accent waves-effect waves-light">Sign up
                                            <i className="fas fa-sign-in ml-1"></i>
                                        </button>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <div className="options text-right">
                                        <p className="pt-1">Already have an account?
                                            <a href="#" className="link"> Log In</a>
                                        </p>
                                    </div>
                                    <button type="button" className="btn waves-effect ml-auto" data-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)