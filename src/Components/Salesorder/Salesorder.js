import React, { useState } from 'react'
import './salesorder.css'
import Salessearch from './Salessearch';
import BookData from "./data.json";


function Salesorder(){
    return(
        <div className="bg-container">
            <div className="sales-order-page">
                <nav className="nav">
                    <h3 className="heading">Sales Order</h3>
                    <img className="img" src="" alt="img"/>
                </nav>
                <hr/>
                <div>
                    <Salessearch data = {BookData}/>
                </div>
                
                <div className="overview">
                        <div className="row my-3">
                            <div className="col-6 col-xl-3">
                                <label className="label-item">Customer Name</label>
                            </div>
                        </div>
                        <div className="hr-line"></div>
                        <div className="row my-3">
                            <div className="col-6 col-xl-3">
                                <label className="label-item">Job Name</label>
                            </div>
                        </div>
                        <div className="hr-line"></div>
                        <div className="row my-3">
                            <div class="col-6 col-xl-3">
                                <label class="label-item">Carrier Type</label>
                            </div>
                        </div>
                        <div class="hr-line"></div>
                        <div class="row my-3">
                            <div class="col-6 col-xl-3">
                                <label class="label-item">Terms</label>
                            </div>
                        </div>
                        <div class="hr-line"></div>
                        <div class="row my-3">
                            <div class="col-6 col-xl-3">
                                <label class="label-item">Sales ID</label>
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
                <h3>Attach Images</h3>
                <div className="button-div">
                    <button className="transfer-btn">Transfer Order</button>
                    <button className="ship-btn">Ship</button>
                </div>
            </div>
        </div>
    )
}

export default Salesorder;