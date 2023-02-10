import './Checklist.css'
import { useEffect, useState } from 'react'
import axios from "axios";

const fetchData = async (addressUrl, hook) => {
    fetch(addressUrl)
      .then((response) => response.json())
      .then((data) => {
            hook(data.shoppingList);
      })
  };

function Checklist() {
   const [shoppingList, setShoppingList] = useState([]);
    fetchData("http://localhost:5000/shopping", setShoppingList);
    return (
        <div className='checklist-div'>
            <header>Shopping List</header>
            <div className='shopping-div'>
                {shoppingList.map((entry, index) => {
                    if (index % 3) {
                        return (
                            <div className="form-check form-switch" key={index}>
                                <input className="form-check-input" disabled id={`${entry}-input`} type="checkbox" />
                                <label className="form-check-label" >{entry}</label>
                            </div>
                        )
                    }
                    return (
                        <div className="form-check form-switch" key={index}>
                            <input className="form-check-input" id={`${entry}-input`} type="checkbox" />
                            <label className="form-check-label" >{entry}</label>
                        </div>
                    )
                }
                )};
            </div>
        </div>
    );
}

export default Checklist;
