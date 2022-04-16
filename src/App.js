import './landing.css';
import background from './images/orange.jpeg'
import heart from './images/Heart-image.png'
import Button from "react-bootstrap/Button"
import {Link} from "react-router-dom"
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Form from './Form.js';




function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src={background} className="img-bg" alt="logo" />
        <p className="text" >           
          Heart Disease <br></br>Predictor
        </p>
        <p1 className="subheading" >          
          What we Do
        </p1>
        <p2 className="info-text" >          
        Using multiple datasets consisting of information of <br></br>numerous real heart disease and non-heart disease patients, we have trained a <br></br>model to recognize whether or not a patient is at a high risk of heart disease <br></br>based on a set of input parameters related to one’s health.
        </p2>
        <img src={heart} alt="heart" className="heart-pic"/>
        <div className="btn-wrap">
        <Button className="button" variant="danger" href='Form'><b>Start </b></Button>
        &nbsp;
        &nbsp;
        <Button className="button" variant="danger" href='Login'> Login </Button>
        &nbsp;
        &nbsp;
        <Button className="button" variant="danger" href='Registration'> Registration </Button>
        &nbsp;
        &nbsp;
        <Button className="button" variant="danger" href='Tips'> Tips </Button>
        </div>
      </header>
    </div>
  );
}

export default App;
