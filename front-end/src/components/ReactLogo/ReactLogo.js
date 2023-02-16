import logo from './logo.svg';
import { useState, useEffect } from 'react';
import './ReactLogo.css'
import { fetchData } from '../../helpers/fetchData';

function ReactLogo() {
  const [heartbeat, setHeartbeat] = useState();
  useEffect(() => {
    const getAsyncData = async () => {
      let data = await fetchData('http://localhost:5000/');
      setHeartbeat(data.greeting)
    }
    getAsyncData()
  }, [])
  
  return (
    <div className="react-logo-div">
      <img src={logo} className="react-logo" alt="logo" />
      {heartbeat != null ? <p> Edit <code>src/ReactLogo.js</code> and save to reload.</p> : <p>turn the server on silly</p>}
      <a
        className="react-logo-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn Unit Tests
      </a>
      <p>
        {heartbeat}
      </p>
    </div>
  );
}

export default ReactLogo;
