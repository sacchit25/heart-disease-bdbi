import './landing.css';
import background from './images/electro-blue-heart.jpeg'
import Button from "react-bootstrap/Button"

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src={background} className="img-bg" alt="logo" />
        <p className="text">          
          Heart Disease Predictor
        </p>
        
        <Button className="button" type="button" value="Input"> Start </Button>
      </header>
    </div>
  );
}

export default App;
