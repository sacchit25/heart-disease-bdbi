import './landing.css';
import background from './images/orange.jpeg'
import heart from './images/Heart-image.png'
import Button from "react-bootstrap/Button"
import {Link} from "react-router-dom"
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Form from './Form.js';
import Header from './Header.js';




function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Header />  
      <img src={background} className="img-bg" alt="logo" />
        {/* <div className="btn-wrap">
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
        </div> */}
      </header>
    </div>
  );
}

export default App;
