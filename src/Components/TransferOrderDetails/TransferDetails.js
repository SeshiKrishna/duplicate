import React from 'react'

function TransferDetails() {
  return (
    <div class="main-wrapper">
        <div class="container-fluid">
            <div class="page-section">
                <div class="page-head">
                    <div class="clearfix">
                        <div>
                            <h1>Transfer Order Details</h1>
                        </div>
                        <div class="float-right">
                            <a href="#"><img src="images/back.svg" class="head-icon"/></a>
                        </div>
                    </div>  
                </div>
                <div class="page-body">
                    <h2 class="section-title">Overview</h2>
                    <div class="overview">
                        <div class="row my-3">
                            <div class="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                                <div class="row my-3">
                                    <div class="col-6 col-lg-6 col-xl-5">
                                        <label class="label-item">Sales Order ID</label>
                                    </div>
                                    <div class="col-6 col-lg-6 col-xl-7">
                                        <label class="label-value">USDM-000131</label>
                                    </div>
                                </div>
                                <div class="hr-line"></div>
                                <div class="row my-3">
                                    <div class="col-6 col-lg-6 col-xl-5">
                                        <label class="label-item">Transfer Order</label>
                                    </div>
                                    <div class="col-6 col-lg-6 col-xl-7">
                                        <label class="label-value">TSDM-968031</label>
                                    </div>
                                </div>
                                <div class="hr-line"></div>
                                <div class="row my-3">
                                    <div class="col-6 col-lg-6 col-xl-5">
                                        <label class="label-item">From Warehouse</label>
                                    </div>
                                    <div class="col-6 col-lg-6 col-xl-7">
                                        <label class="label-value">FNT</label>
                                    </div>
                                </div>
                                <div class="hr-line"></div>
                                <div class="row my-3">
                                    <div class="col-6 col-lg-6 col-xl-5">
                                        <label class="label-item">To Warehouse</label>
                                    </div>
                                    <div class="col-6 col-lg-6 col-xl-7">
                                        <label class="label-value">NTX</label>
                                    </div>
                                </div>
                                <div class="hr-line"></div>
                                <div class="row my-3">
                                    <div class="col-6 col-lg-6 col-xl-5">
                                        <label class="label-item">Ship Date</label>
                                    </div>
                                    <div class="col-6 col-lg-6 col-xl-7">
                                        <label class="label-value">11/12/2021</label>
                                    </div>
                                </div>
                                <div class="hr-line"></div>
                                <div class="row my-3">
                                    <div class="col-6 col-lg-6 col-xl-5">
                                        <label class="label-item">Est. Receipt Date</label>
                                    </div>
                                    <div class="col-6 col-lg-6 col-xl-7">
                                        <label class="label-value">11/12/2021</label>
                                    </div>
                                </div>
                                <div class="hr-line"></div>
                                <div class="row my-3">
                                    <div class="col-6 col-lg-6 col-xl-5">
                                        <label class="label-item">Status</label>
                                    </div>
                                    <div class="col-6 col-lg-6 col-xl-7">
                                        <span class="status-o">Shipped</span>
                                    </div>
                                </div>
                                <div class="hr-line"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>    
  )
}

export default TransferDetails