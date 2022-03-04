import React from 'react'
import './Salesdetails.css'

function Salesorder(){
    return(
        <div className="bg-container">
            <div className="sales-order-page">
                <nav className="nav">
                    <h3 className="heading">Sales Order</h3>
                    <img className="img" src="" alt="img"/>
                </nav>
                <hr/>
                <div className="search-item">
                    <div className="input-group input-group-border mb-4 blue-border rounded-pill">
                        <input type="search" placeholder="Search by Sales Order ID..." className="form-control bg-none border-0"/>
                        <div className="input-group-append border-0">
                            <button type="button" className="btn btn-search"><i class="fa fa-search"></i></button>
                        </div>
                    </div>
                </div>
                    <div className="overview">
                        <div className="row my-3">
                            <div className="col-6 col-xl-3">
                                <label className="label-item">Customer Name</label>
                            </div>
                            <div className="col-6 col-xl-9">
                                <label className="label-value">John Smith</label>
                            </div>
                        </div>
                        <div className="hr-line"></div>
                        <div className="row my-3">
                            <div className="col-6 col-xl-3">
                                <label className="label-item">Job Name</label>
                            </div>
                            <div className="col-6 col-xl-9">
                                <label className="label-value">Split 2 Testing - Frame 18</label>
                            </div>
                        </div>
                        <div className="hr-line"></div>
                        <div className="row my-3">
                            <div class="col-6 col-xl-3">
                                <label class="label-item">Carrier Type</label>
                            </div>
                            <div class="col-6 col-xl-9">
                                <label class="label-value">W/C</label>
                            </div>
                        </div>
                        <div class="hr-line"></div>
                        <div class="row my-3">
                            <div class="col-6 col-xl-3">
                                <label class="label-item">Terms</label>
                            </div>
                            <div class="col-6 col-xl-9">
                                <label class="label-value">Check</label>
                            </div>
                        </div>
                        <div class="hr-line"></div>
                        <div class="row my-3">
                            <div class="col-6 col-xl-3">
                                <label class="label-item">Sales ID</label>
                            </div>
                            <div class="col-6 col-xl-9">
                                <label class="label-value">Test_SO_02</label>
                            </div>
                        </div>
                        <div class="hr-line"></div>
                        <div class="row my-3">
                            <div class="col-6 col-xl-3">
                                <label class="label-item">Check Received</label>
                            </div>
                            <div class="col-6 col-xl-9">
                                <div class="form-check-inline">
                                    <label class="form-check-label">
                                      <input type="radio" class="form-check-input" name="checksales"/>Yes
                                    </label>
                                  </div>
                                  <div class="form-check-inline">
                                    <label class="form-check-label">
                                      <input type="radio" class="form-check-input" name="checksales"/>No
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="clearfix my-3">
                        <div class="float-left">
                            <div class="custom-control form-control-lg custom-checkbox">
                                <input type="checkbox" class="custom-control-input" id="selectall"/>
                                <label class="custom-control-label" for="selectall">Select All</label>
                            </div>
                        </div>
                        <div class="float-right">
                            <button class="btn btn-add">Transfer Order</button>
                        </div>
                    </div>
                    <div class="list-item">
                        <div class="row">
                            <div class="col-1 col-sm-1 col-md-1 col-lg-1 col-xl-1 px-1 px-lg-4 col-check">
                                <div class="custom-control form-control-lg custom-checkbox">
                                    <input type="checkbox" class="custom-control-input" id="checkvalues"/>
                                    <label class="custom-control-label" for="checkvalues"></label>
                                  </div>
                            </div>
                            <div class="col-11 col-sm-11 col-md-11 col-lg-11 col-xl-11">
                                <div class="row">
                                    <div class="col-12 col-md-12 col-lg-4 col-xl-3">
                                        <div class="row py-2">
                                            <div class="col-6 col-sm-6 col-md-6 col-lg-12 col-xl-12">
                                                <label class="label-item">Product Name</label>
                                            </div>
                                            <div class="col-6 col-sm-6 col-md-6 col-lg-12 col-xl-12">
                                                <label class="label-value">Metal Doors</label>
                                            </div>
                                        </div>
                                        <div class="border-dash"></div>
                                    </div>
                                    <div class="col-12 col-md-12 col-lg-4 col-xl-3">
                                        <div class="row py-2">
                                            <div class="col-6 col-sm-6 col-md-6 col-lg-12 col-xl-12">
                                                <label class="label-item">Site Location</label>
                                            </div>
                                            <div class="col-6 col-sm-6 col-md-6 col-lg-12 col-xl-12">
                                                <label class="label-value">FNT</label>
                                            </div>
                                        </div>
                                        <div class="border-dash"></div>
                                    </div>
                                    <div class="col-12 col-md-12 col-lg-4 col-xl-3">
                                        <div class="row py-2">
                                            <div class="col-6 col-sm-6 col-md-6 col-lg-12 col-xl-12">
                                                <label class="label-item">Quantity</label>
                                            </div>
                                            <div class="col-6 col-sm-6 col-md-6 col-lg-12 col-xl-12">
                                                <label class="label-value">10.00</label>
                                            </div>
                                        </div>
                                        <div class="border-dash"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 pt-lg-2">
                                <button type="button" class="btn btn-block btn-view" data-toggle="collapse" data-target="#viewitem1">View More</button>
                                <div id="viewitem1" class="collapse view-content">
                                    <div class="row">
                                        <div class="col-12 col-md-12 col-lg-4 col-xl-3">
                                            <div class="row py-2">
                                                <div class="col-6 col-sm-6 col-md-6 col-lg-12 col-xl-12">
                                                    <label class="label-item">Units</label>
                                                </div>
                                                <div class="col-6 col-sm-6 col-md-6 col-lg-12 col-xl-12">
                                                    <label class="label-value">PCS</label>
                                                </div>
                                            </div>
                                            <div class="border-dash"></div>
                                        </div>                                            
                                        <div class="col-12 col-md-12 col-lg-4 col-xl-3">
                                            <div class="row py-2">
                                                <div class="col-6 col-sm-6 col-md-6 col-lg-12 col-xl-12">
                                                    <label class="label-item">Carrier Type</label>
                                                </div>
                                                <div class="col-6 col-sm-6 col-md-6 col-lg-12 col-xl-12">
                                                    <label class="label-value">W/C</label>
                                                </div>
                                            </div>
                                            <div class="border-dash"></div>
                                        </div>
                                        <div class="col-12 col-md-12 col-lg-4 col-xl-3">
                                            <div class="row py-2">
                                                <div class="col-6 col-sm-6 col-md-6 col-lg-12 col-xl-12">
                                                    <label class="label-item">Carrier Service</label>
                                                </div>
                                                <div class="col-6 col-sm-6 col-md-6 col-lg-12 col-xl-12">
                                                    <label class="label-value">Outbound Service</label>
                                                </div>
                                            </div>
                                            <div class="border-dash"></div>
                                        </div>
                                        <div class="col-12 col-md-12 col-lg-4 col-xl-3">
                                            <div class="row py-2">
                                                <div class="col-6 col-sm-6 col-md-6 col-lg-12 col-xl-12">
                                                    <label class="label-item">KD Required</label>
                                                </div>
                                                <div class="col-6 col-sm-6 col-md-6 col-lg-12 col-xl-12">
                                                    <label class="label-value"></label>
                                                </div>
                                            </div>
                                            <div class="border-dash"></div>
                                        </div>
                                        <div class="col-12 col-md-12 col-lg-4 col-xl-3">
                                            <div class="row py-2">
                                                <div class="col-6 col-sm-6 col-md-6 col-lg-12 col-xl-12">
                                                    <label class="label-item">KD Completed</label>
                                                </div>
                                                <div class="col-6 col-sm-6 col-md-6 col-lg-12 col-xl-12">
                                                    <label class="label-value"></label>
                                                </div>
                                            </div>
                                            <div class="border-dash"></div>
                                        </div>
                                        <div class="col-12 col-md-12 col-lg-4 col-xl-3">
                                            <div class="row py-2">
                                                <div class="col-6 col-sm-6 col-md-6 col-lg-12 col-xl-12">
                                                    <label class="label-item">Crating Required</label>
                                                </div>
                                                <div class="col-6 col-sm-6 col-md-6 col-lg-12 col-xl-12">
                                                    <label class="label-value"></label>
                                                </div>
                                            </div>
                                            <div class="border-dash"></div>
                                        </div>
                                        <div class="col-12 col-md-12 col-lg-4 col-xl-3">
                                            <div class="row py-2">
                                                <div class="col-6 col-sm-6 col-md-6 col-lg-12 col-xl-12">
                                                    <label class="label-item">Crating Completed</label>
                                                </div>
                                                <div class="col-6 col-sm-6 col-md-6 col-lg-12 col-xl-12">
                                                    <label class="label-value"></label>
                                                </div>
                                            </div>
                                            <div class="border-dash"></div>
                                        </div>
                                        <div class="col-12 col-md-12 col-lg-4 col-xl-3">
                                            <div class="row py-2">
                                                <div class="col-12 col-sm-12 col-md-6 col-lg-12 col-xl-12">
                                                    <label class="label-item">Special Shipping Notes</label>
                                                </div>
                                                <div class="col-12 col-sm-12 col-md-6 col-lg-12 col-xl-12">
                                                    <textarea class="form-control" row="3"></textarea>
                                                </div>
                                            </div>
                                            <div class="border-dash"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default Salesorder;