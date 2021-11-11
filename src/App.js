import './landing.css';
import background from './images/electro-blue-heart.jpeg'
import Button from "react-bootstrap/Button"
import {Link} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src={background} className="img-bg" alt="logo" />
        <p className="text">          
          Heart Disease Predictor
        </p>
        <div className="btn-wrap">
        <Button className="button" variant="primary"> Start </Button>
        </div>
      </header>
    </div>
  );
}

export default App;
