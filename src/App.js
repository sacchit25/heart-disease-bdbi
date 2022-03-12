import './landing.css';
import background from './images/electro-blue-heart.jpeg'
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
          Heart Disease Predictor
        </p>
        <div className="btn-wrap">
        <Button className="button" variant="primary" href='Form'> Start </Button>
        &nbsp;
        &nbsp;
        <Button className="button" variant="primary" href='Login'> Login </Button>
        &nbsp;
        &nbsp;
        <Button className="button" variant="primary" href='Registration'> Registration </Button>
        &nbsp;
        &nbsp;
        <Button className="button" variant="primary" href='Tips'> Tips </Button>
        </div>
      </header>
    </div>
  );
}

export default App;
