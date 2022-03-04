import './index.css'
import React from 'react'
import { Link } from 'react-router-dom'

const UserProfile = props => {
    const {userDetails} = props
    const {customer_id} = userDetails
    const {status} = userDetails
    const {date} = userDetails
    
    return(
    <div className='card-1'>
        <Link to='/salesorderdetails' style={{textDecoration:"none", color:"black"}}>
            <div class="row inner-card">
                <div class="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 mb-2 mb-lg-0">
                    <label class="list-value">{customer_id}</label>
                </div>
                <div class="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 mb-2 mb-lg-0">
                    <label class="label-item"><i class="fa fa-calendar"></i> {date}</label>
                </div>
                <div class="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 mt-2 mt-lg-0 text-sm-right">
                    <span class="status-o">{status}</span>
                </div>                            
            </div>
        </Link>
    </div>
    
)}

export default UserProfile 

