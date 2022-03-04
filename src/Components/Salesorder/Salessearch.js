import React, { useState }  from 'react'
import { Link } from "react-router-dom"
import './Salessearch.css'



function Salessearch({ placeholder, data }) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");


  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.status.toLowerCase().includes(searchWord.toLowerCase());
    });


    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };
  return (
    <div>
      <div className="search-bar-div">
        <input placeholder="  Search by Sales Order ID..." value={wordEntered} onChange={handleFilter} className="search-bar p-2" type="text"/><i class="fa-solid fa-magnifying-glass icon"></i>
      </div>
      <div>
        {filteredData.length != 0 && (
        <div className="dataResult">
          {filteredData.slice(0, 15).map((value, key) => {
            return (
              <Link to= '/salesorderdetails'>
                  <a className="dataItem">
                    <p>{value.status} </p>
                  </a>
              </Link>
            );
          })}
        </div>
      )}
      </div>

    </div>

  )
}

export default Salessearch