import './Checklist.css'
import { useEffect, useState } from 'react'
import { fetchData } from '../../helpers/fetchData';

function Checklist() {
    const [shoppingList, setShoppingList] = useState([]);
    useEffect(() => {
        const getAsyncData = async () => {
          let data = await fetchData('http://localhost:5000/shopping');
          setShoppingList(data.shoppingList)
        }
        getAsyncData()
      }, [])
      
    return (
        <div className='checklist-div'>
            <header>Shopping List</header>
            <div className='shopping-div'>
                {shoppingList.map((entry, index) => {
                    if (index % 3) {
                        return (
                            <div className="form-check form-switch" key={index}>
                                <input className="form-check-input" checked disabled id={`${entry}-input`} type="checkbox" />
                                <label className="form-check-label" >{entry}</label>
                            </div>
                        )
                    }
                    if (index % 4) {
                        return (
                            <div className="form-check form-switch" key={index}>
                                <input className="form-check-input" defaultChecked id={`${entry}-input`} type="checkbox" />
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
