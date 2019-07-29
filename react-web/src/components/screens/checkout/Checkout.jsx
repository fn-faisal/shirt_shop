import React from 'react';
import './Checkout.scss';

export default props => (
    <div className="content">
        <div id="stepper1" class="bs-stepper">
          <div class="bs-stepper-header">
            <div class="step" data-target="#test-l-1">
              <button class="step-trigger">
                <span class="bs-stepper-circle">1</span>
                <span class="bs-stepper-label">Email</span>
              </button>
            </div>
            <div class="line"></div>
            <div class="step" data-target="#test-l-2">
              <button class="step-trigger">
                <span class="bs-stepper-circle">2</span>
                <span class="bs-stepper-label">Password</span>
              </button>
            </div>
            <div class="line"></div>
            <div class="step" data-target="#test-l-3">
              <button class="step-trigger">
                <span class="bs-stepper-circle">3</span>
                <span class="bs-stepper-label">Validate</span>
              </button>
            </div>
          </div>
          <div class="bs-stepper-content">
            <form onSubmit={props.onSubmit}>
              <div id="test-l-1" class="content">
                <div class="form-group">
                  <label for="exampleInputEmail1">Email address</label>
                  <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter email" />
                </div>
                <button class="btn btn-primary" onClick={() => props.stepper.next()}>Next</button>
              </div>
              <div id="test-l-2" class="content">
                <div class="form-group">
                  <label for="exampleInputPassword1">Password</label>
                  <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>
                <button class="btn btn-primary" onClick={() => props.stepper.next()}>Next</button>
              </div>
              <div id="test-l-3" class="content text-center">
                <button type="submit" class="btn btn-primary mt-5">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>

);