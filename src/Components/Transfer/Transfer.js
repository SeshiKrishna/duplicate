import React, { useState } from 'react'
import Index from './Index'




const cardDetails = [
    {
      "id_no": 4584,
      "uniqueNo": 0,
      "transfer_no": 5459,
      "from_adress": "NTX_TW",
      "to_adress": "SWE",
      "sales_Order_id": 22,
      "status": "Invoiced",
      "ship_date": "2019-11-21T07:33:57 -06:-30",
      "rec_date": "2015-04-30T08:20:24 -06:-30"
    },
    {
      "id_no": 6832,
      "uniqueNo": 1,
      "transfer_no": 3883,
      "from_adress": "FNT_TW",
      "to_adress": "NTX_TW",
      "sales_Order_id": 27,
      "status": "Invoiced",
      "ship_date": "2020-07-28T12:22:36 -06:-30",
      "rec_date": "2016-02-11T11:23:20 -06:-30"
    },
    {
      "id_no": 5290,
      "uniqueNo": 2,
      "transfer_no": 3186,
      "from_adress": "SWE",
      "to_adress": "FNT",
      "sales_Order_id": 34,
      "status": "Delivered",
      "ship_date": "2020-07-26T07:56:24 -06:-30",
      "rec_date": "2016-01-08T12:18:12 -06:-30"
    },
    {
      "id_no": 2169,
      "uniqueNo": 3,
      "transfer_no": 2012,
      "from_adress": "FNT_TW",
      "to_adress": "NTX",
      "sales_Order_id": 40,
      "status": "Open order",
      "ship_date": "2021-06-27T02:42:38 -06:-30",
      "rec_date": "2021-09-23T07:59:37 -06:-30"
    },
    {
      "id_no": 2008,
      "uniqueNo": 4,
      "transfer_no": 8525,
      "from_adress": "NTX_TW",
      "to_adress": "FNT",
      "sales_Order_id": 38,
      "status": "Delivered",
      "ship_date": "2016-10-07T02:00:42 -06:-30",
      "rec_date": "2016-06-26T09:08:11 -06:-30"
    },
    {
      "id_no": 3142,
      "uniqueNo": 5,
      "transfer_no": 2772,
      "from_adress": "NTX_TW",
      "to_adress": "FNT",
      "sales_Order_id": 32,
      "status": "Open order",
      "ship_date": "2015-04-29T06:06:17 -06:-30",
      "rec_date": "2018-09-28T05:53:26 -06:-30"
    },
    {
      "id_no": 6371,
      "uniqueNo": 6,
      "transfer_no": 5243,
      "from_adress": "SWE",
      "to_adress": "NTX",
      "sales_Order_id": 33,
      "status": "Delivered",
      "ship_date": "2014-12-04T12:05:35 -06:-30",
      "rec_date": "2016-12-04T04:45:13 -06:-30"
    },
    {
      "id_no": 7832,
      "uniqueNo": 7,
      "transfer_no": 8368,
      "from_adress": "FNT_TW",
      "to_adress": "SWE",
      "sales_Order_id": 38,
      "status": "Open order",
      "ship_date": "2015-02-08T12:14:01 -06:-30",
      "rec_date": "2021-12-04T12:51:55 -06:-30"
    },
    {
      "id_no": 7004,
      "uniqueNo": 8,
      "transfer_no": 3776,
      "from_adress": "NTX_TW",
      "to_adress": "FNT_TW",
      "sales_Order_id": 35,
      "status": "Delivered",
      "ship_date": "2019-11-26T10:25:40 -06:-30",
      "rec_date": "2016-08-30T10:06:48 -06:-30"
    },
    {
      "id_no": 6768,
      "uniqueNo": 9,
      "transfer_no": 2057,
      "from_adress": "SWE",
      "to_adress": "FNT",
      "sales_Order_id": 31,
      "status": "Open order",
      "ship_date": "2018-10-13T02:12:22 -06:-30",
      "rec_date": "2014-08-13T06:06:59 -06:-30"
    },
    {
      "id_no": 8756,
      "uniqueNo": 10,
      "transfer_no": 7269,
      "from_adress": "NTX_TW",
      "to_adress": "FNT",
      "sales_Order_id": 25,
      "status": "Delivered",
      "ship_date": "2018-05-07T01:47:44 -06:-30",
      "rec_date": "2018-11-02T01:43:27 -06:-30"
    },
    {
      "id_no": 3744,
      "uniqueNo": 11,
      "transfer_no": 5828,
      "from_adress": "SWE",
      "to_adress": "FNT_TW",
      "sales_Order_id": 40,
      "status": "Invoiced",
      "ship_date": "2014-09-13T10:36:24 -06:-30",
      "rec_date": "2022-01-10T07:13:03 -06:-30"
    },
    {
      "id_no": 4115,
      "uniqueNo": 12,
      "transfer_no": 5464,
      "from_adress": "FNT_TW",
      "to_adress": "NTX_TW",
      "sales_Order_id": 25,
      "status": "Open order",
      "ship_date": "2021-08-06T06:27:21 -06:-30",
      "rec_date": "2017-09-22T09:04:35 -06:-30"
    },
    {
      "id_no": 4681,
      "uniqueNo": 13,
      "transfer_no": 2800,
      "from_adress": "FNT_TW",
      "to_adress": "SWE",
      "sales_Order_id": 38,
      "status": "Delivered",
      "ship_date": "2019-01-19T04:31:58 -06:-30",
      "rec_date": "2021-08-13T06:25:32 -06:-30"
    },
    {
      "id_no": 7787,
      "uniqueNo": 14,
      "transfer_no": 3211,
      "from_adress": "FNT",
      "to_adress": "NTX",
      "sales_Order_id": 21,
      "status": "Delivered",
      "ship_date": "2021-05-01T03:29:48 -06:-30",
      "rec_date": "2017-06-28T02:24:19 -06:-30"
    },
    {
      "id_no": 3887,
      "uniqueNo": 15,
      "transfer_no": 7140,
      "from_adress": "SWE",
      "to_adress": "SWE",
      "sales_Order_id": 24,
      "status": "Invoiced",
      "ship_date": "2014-02-19T08:26:59 -06:-30",
      "rec_date": "2021-07-10T09:22:25 -06:-30"
    },
    {
      "id_no": 6947,
      "uniqueNo": 16,
      "transfer_no": 3523,
      "from_adress": "FNT",
      "to_adress": "SWE",
      "sales_Order_id": 35,
      "status": "Delivered",
      "ship_date": "2017-08-27T12:04:39 -06:-30",
      "rec_date": "2017-04-28T04:26:58 -06:-30"
    },
    {
      "id_no": 7072,
      "uniqueNo": 17,
      "transfer_no": 5913,
      "from_adress": "SWE",
      "to_adress": "FNT",
      "sales_Order_id": 36,
      "status": "Delivered",
      "ship_date": "2018-10-30T07:02:00 -06:-30",
      "rec_date": "2021-09-29T06:10:45 -06:-30"
    },
    {
      "id_no": 4528,
      "uniqueNo": 18,
      "transfer_no": 3835,
      "from_adress": "NTX",
      "to_adress": "SWE",
      "sales_Order_id": 35,
      "status": "Open order",
      "ship_date": "2014-08-26T04:57:02 -06:-30",
      "rec_date": "2015-02-09T07:34:39 -06:-30"
    },
    {
      "id_no": 6381,
      "uniqueNo": 19,
      "transfer_no": 3682,
      "from_adress": "FNT",
      "to_adress": "NTX_TW",
      "sales_Order_id": 37,
      "status": "Invoiced",
      "ship_date": "2019-06-02T04:07:32 -06:-30",
      "rec_date": "2020-03-31T09:55:05 -06:-30"
    },
    {
      "id_no": 4770,
      "uniqueNo": 20,
      "transfer_no": 2603,
      "from_adress": "SWE",
      "to_adress": "NTX_TW",
      "sales_Order_id": 38,
      "status": "Invoiced",
      "ship_date": "2014-03-04T04:43:31 -06:-30",
      "rec_date": "2018-11-11T11:12:54 -06:-30"
    },
    {
      "id_no": 2073,
      "uniqueNo": 21,
      "transfer_no": 7180,
      "from_adress": "FNT",
      "to_adress": "NTX",
      "sales_Order_id": 35,
      "status": "Invoiced",
      "ship_date": "2020-10-19T06:53:43 -06:-30",
      "rec_date": "2019-06-12T11:49:52 -06:-30"
    },
    {
      "id_no": 5280,
      "uniqueNo": 22,
      "transfer_no": 3510,
      "from_adress": "FNT",
      "to_adress": "FNT_TW",
      "sales_Order_id": 39,
      "status": "Delivered",
      "ship_date": "2014-08-29T08:20:33 -06:-30",
      "rec_date": "2015-09-14T10:00:38 -06:-30"
    },
    {
      "id_no": 6447,
      "uniqueNo": 23,
      "transfer_no": 3771,
      "from_adress": "SWE",
      "to_adress": "FNT",
      "sales_Order_id": 29,
      "status": "Open order",
      "ship_date": "2015-03-05T01:31:57 -06:-30",
      "rec_date": "2016-06-10T10:14:16 -06:-30"
    },
    {
      "id_no": 7534,
      "uniqueNo": 24,
      "transfer_no": 8644,
      "from_adress": "FNT_TW",
      "to_adress": "NTX_TW",
      "sales_Order_id": 33,
      "status": "Invoiced",
      "ship_date": "2019-03-14T02:33:04 -06:-30",
      "rec_date": "2018-04-29T03:50:41 -06:-30"
    },
    {
      "id_no": 7007,
      "uniqueNo": 25,
      "transfer_no": 2805,
      "from_adress": "SWE",
      "to_adress": "FNT_TW",
      "sales_Order_id": 40,
      "status": "Invoiced",
      "ship_date": "2018-04-04T03:55:03 -06:-30",
      "rec_date": "2016-12-02T10:10:38 -06:-30"
    },
    {
      "id_no": 8549,
      "uniqueNo": 26,
      "transfer_no": 3326,
      "from_adress": "SWE",
      "to_adress": "FNT_TW",
      "sales_Order_id": 40,
      "status": "Open order",
      "ship_date": "2017-09-13T03:22:13 -06:-30",
      "rec_date": "2021-07-10T12:50:08 -06:-30"
    }
  ]



const Transfer = () => {

    const [cardDetailsList, setCardDetailsList] = useState(cardDetails)

  return (
        <div className="bg-container">
            <div className="sales-order-page"style={{minHeight:"100vh"}}>
                <nav className="nav">
                    <h2 className="heading">Transfer Order</h2>
                    <img className="img" src="" alt="img"/>
                </nav>
                <hr/>
                <div className="search-bar-div">
                    <input placeholder="  Search by Sales Order ID..." className="search-bar" type="search"/><i class="fa-solid fa-magnifying-glass icon"></i>
                </div>
                <ul className='cards'>
                    {cardDetailsList.map((eachItem) =>(
                    <Index cardDetails = {eachItem} key = {eachItem.uniqueNo} />
                    ))}
                </ul>
            </div>
        </div>
  )
}

export default Transfer