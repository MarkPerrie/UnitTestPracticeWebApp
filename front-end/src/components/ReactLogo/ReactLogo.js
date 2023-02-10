import logo from './logo.svg';
import { useState, useEffect } from 'react';
import './ReactLogo.css'
import axios from "axios";

const fetchData = (hook) => {
    return axios.get("http://localhost:5000/")
      .then((response) => hook(response.data.greeting));
  }

function ReactLogo() {
  const [heartbeat, setHeartbeat] = useState();
  fetchData(setHeartbeat);

  return (
    <div className="react-logo-div">
        <img src={logo} className="react-logo" alt="logo" />
        <p>
          Edit <code>src/ReactLogo.js</code> and save to reload.
        </p>
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
