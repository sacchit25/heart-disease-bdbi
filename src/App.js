
import './landing.css';
import bgimg from './bg-img.jpeg'
import ReactDOM from "react-dom";

import { Link } from 'react-router-dom'
import Form from "./Form"

function App() {
  return (
    <div className="container">
      {/* <p className="text">
          Heart Disease Detector
        </p> */}
        <img className="img-bg" src = {bgimg} />
        <div>
            <p className="text">
            Heart Disease Detector
            <Link to="/Form"> 
              <button> Report </button>
            </Link>

            </p>
        </div>
        
        
    </div>
  );
}

export default App;
