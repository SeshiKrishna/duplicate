import React, { useState } from 'react'
import Select from 'react-select'
import Cards from './index';
import './sales.css'





const options = [
  { value: 'delivered', label: 'Delivered' },
  { value: 'invoiced', label: 'Invoiced' },
  { value: 'open ordered', label: 'Open Ordered' },
];


const userDetails = [
{"uniqueNo": 1,"customer_id":4755,"sales_id":2227,"status":"Open Ordered","date":"6/7/2021"},
{"uniqueNo": 2,"customer_id":5261,"sales_id":9773,"status":"Invoiced","date":"11/6/2021"},
{"uniqueNo": 3,"customer_id":1950,"sales_id":9745,"status":"Open Ordered","date":"1/3/2022"},
{"uniqueNo": 4,"customer_id":2149,"sales_id":1258,"status":"Delivered","date":"11/18/2021"},
{"uniqueNo": 5,"customer_id":5517,"sales_id":510,"status":"Open Ordered","date":"12/25/2021"},
{"uniqueNo": 6,"customer_id":9972,"sales_id":5242,"status":"Delivered","date":"8/21/2021"},
{"uniqueNo": 7,"customer_id":1564,"sales_id":8546,"status":"Open Ordered","date":"11/1/2021"},
{"uniqueNo": 8,"customer_id":7854,"sales_id":6845,"status":"Invoiced","date":"1/7/2021"},
{"uniqueNo": 9,"customer_id":6845,"sales_id":4534,"status":"Open Ordered","date":"3/4/2022"},
{"uniqueNo": 10,"customer_id":3845,"sales_id":9876,"status":"Delivered","date":"8/28/2021"},
{"uniqueNo": 11,"customer_id":3847,"sales_id":6845,"status":"Open Ordered","date":"11/23/2021"},
{"uniqueNo": 12,"customer_id":8945,"sales_id":6484,"status":"Delivered","date":"1/10/2021"},
{"uniqueNo": 13,"customer_id":1950,"sales_id":9745,"status":"Open Ordered","date":"1/3/2022"},
{"uniqueNo": 14,"customer_id":2149,"sales_id":1258,"status":"Delivered","date":"11/18/2021"},
{"uniqueNo": 15,"customer_id":5517,"sales_id":510,"status":"Open Ordered","date":"12/25/2021"},
{"uniqueNo": 16,"customer_id":9972,"sales_id":5242,"status":"Delivered","date":"8/21/2021"},
{"uniqueNo": 17,"customer_id":1564,"sales_id":8546,"status":"Open Ordered","date":"11/1/2021"},
{"uniqueNo": 18,"customer_id":7854,"sales_id":6845,"status":"Invoiced","date":"1/7/2021"},
{"uniqueNo": 19,"customer_id":6845,"sales_id":4534,"status":"Open Ordered","date":"3/4/2022"},
{"uniqueNo": 20,"customer_id":3845,"sales_id":9876,"status":"Delivered","date":"8/28/2021"}
]





const App = () =>  {
  const [selectedOption, setSelectedOption] = useState(null);
  const [userDetailsList, setUserDetailsList] = useState(userDetails);
  const changeSelect = (selectedValue) =>{
    const name = userDetails.filter(element => element.status === selectedValue.label)
    setUserDetailsList(name)
  }
  
  return(

  <div className='bg-container'>
    <div className='sales-container'>
      <h3>Sales Order List</h3>
      <hr/>
      <br/>
      <div className='search-div'> 
            <div className="App">
              <Select className ='searchbar2' placeholder="Search..."
                defaultValue={selectedOption}
                onChange={changeSelect}
                options={options}
              />
              <div class="search-item search-filter">
                        <div class="input-group input-group-border mb-4 blue-border rounded-pill">
                            <div class="input-group-prepend">
                                <select class="form-control">
                                    <option value="sales order id">Sales Order ID</option>
                                    <option value="customer id">Customer ID</option>
                                    <option value="status">Status</option>
                                    <option value="created Date">Created Date</option>
                                </select>
                              </div>
                            <input type="search" placeholder="Search by..." class="form-control bg-none border-0 searchbar"/>
                            <div class="input-group-append border-0">
                                <button type="button" class="btn btn-search"><i class="fa fa-search"></i></button>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
        <br/>
      <ul>
        {userDetailsList.map((eachItem) =>(
          <Cards userDetails = {eachItem} key = {eachItem.uniqueNo} />
        ))}
      </ul>
    </div>  
  </div>
);
}


export default App