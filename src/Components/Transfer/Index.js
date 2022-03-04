import React from 'react'
import './Transfer.css'

const Index = props => {
    const {cardDetails} = props
    const {id_no} = cardDetails
    const {transfer_no} = cardDetails
    const {from_adress} = cardDetails
    const {to_adress} = cardDetails
    const {sales_order_id} = cardDetails
    const {status} = cardDetails
    const {ship_date} = cardDetails
    const {rec_date} = cardDetails
  return (
        <div className="list-item">
            <div className="row">
                <div className="col-lg-4 col-xl-3">
                    <div className="row py-2">
                        <label className="label-item">Sales Order ID</label>
                        <label className="label-value">{id_no}</label>
                    </div>
                </div>
                <div className="col-lg-4 col-xl-3" >
                    <div className="row py-2" >
                        <label className="label-item">Transfer Number</label>
                        <label className="label-value">{transfer_no}</label>
                    </div>
                </div>
                <div className="col-lg-4 col-xl-3">
                    <div className="row py-2">
                        <div>
                            <label className="label-item">From Warehouse</label>
                        </div>
                        <div>
                            <label className="label-value">{from_adress}</label>
                        </div>
                    </div>
                    <div className="border-dash"></div>
                </div> 
                <div className="col-lg-4 col-xl-3">
                    <div className="row py-2">
                        <label className="label-item">To Warehouse</label>
                        <label className="label-value">{to_adress}</label>
                    </div>
                    <div className="border-dash"></div>
                </div>
                <div className="col-lg-4 col-xl-3">
                    <div className="row py-2">
                        <label className="label-item">Ship Date</label>
                        <label className="label-value">{ship_date}</label>
                    </div>
                    <div className="border-dash"></div>
                </div>
                <div class="col-lg-4 col-xl-3">
                    <div className="row py-2">
                        <label className="label-item">Est.Receipt Date</label>
                        <label className="label-value">{rec_date}</label>
                    </div>
                    <div className="border-dash"></div>
                </div>
                <div className="col-lg-4 col-xl-3">
                    <div className="row py-2">
                        <label className="label-item">Status</label>
                        <p disabled = {true} className="label-value">{status}</p>
                    </div>
                    <div class="border-dash"></div>
                </div>
                <div className="col-lg-8 col-xl-3">
                    <div className="row py-2">
                        <a style={{textDecoration:"none"}} href="/transferorderdetails" className="view-link">View Details <i class="fa fa-chevron-circle-right"></i></a>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Index