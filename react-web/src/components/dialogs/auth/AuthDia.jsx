import React from 'react';
import './AuthDia.scss';

export default props => (
    <div>
        <div class="modal fade show" id="auth-dia">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-c-tabs">
                        <ul class="nav nav-tabs md-tabs tabs-2 light-blue darken-3" role="tablist">
                            <li class="nav-item waves-effect waves-light">
                                <a class="nav-link active" data-toggle="tab" href="#panel17" role="tab" aria-selected="true">
                                <i class="fas fa-user mr-1"></i> Login</a>
                            </li>
                            <li class="nav-item waves-effect waves-light">
                                <a class="nav-link" data-toggle="tab" href="#panel18" role="tab" aria-selected="false">
                                <i class="fas fa-user-plus mr-1"></i> Register</a>
                            </li>
                        </ul>

                        <div class="tab-content">
                            <div class="tab-pane fade in active show" id="panel17" role="tabpanel">

                            <div class="modal-body mb-1">
                                <div class="md-form form-sm">
                                    <i class="form-ico fas fa-envelope prefix"></i>
                                    <input type="text" id="form2" class="form-control form-control-sm"/>
                                    <label for="form2">Your email</label>
                                </div>
                                <div class="md-form form-sm">
                                    <i class="form-ico fas fa-lock prefix"></i>
                                    <input type="password" id="form3" class="form-control form-control-sm"/>
                                    <label for="form3">Your password</label>
                                </div>
                                <div class="text-center mt-4">
                                    <button class="btn bg-accent waves-effect waves-light">Log in
                                        <i class="form-ico fas fa-sign-in ml-1"></i>
                                    </button>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <div class="options text-center text-md-right mt-1">
                                    <p>Forgot <a href="#" class="blue-text"> Password?</a></p>
                                </div>
                                <button type="button" class="btn btn-outline-accent waves-effect ml-auto" data-dismiss="modal">Close</button>
                            </div>
                        </div>

                        <div class="tab-pane fade" id="panel18" role="tabpanel">
                            <div class="modal-body">
                                <div class="md-form form-sm">
                                    <i class="fas fa-envelope prefix"></i>
                                    <input type="text" id="form14" class="form-control form-control-sm"/>
                                    <label for="form14">Your email</label>
                                </div>
                                <div class="md-form form-sm">
                                    <i class="fas fa-lock prefix"></i>
                                    <input type="password" id="form5" class="form-control form-control-sm"/>
                                    <label for="form5">Your password</label>
                                </div>
                                <div class="md-form form-sm">
                                    <i class="fas fa-lock prefix"></i>
                                    <input type="password" id="form6" class="form-control form-control-sm"/>
                                    <label for="form6">Repeat password</label>
                                </div>

                                <div class="text-center form-sm mt-4">
                                    <button class="btn btn-info waves-effect waves-light">Sign up
                                        <i class="fas fa-sign-in ml-1"></i>
                                    </button>
                                </div>

                            </div>
                            <div class="modal-footer">
                                <div class="options text-right">
                                    <p class="pt-1">Already have an account?
                                        <a href="#" class="blue-text">Log In</a>
                                    </p>
                                </div>
                                <button type="button" class="btn btn-outline-info waves-effect ml-auto" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
)