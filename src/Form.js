import React, { useState, Component } from "react";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import form from "react-bootstrap/Form";
import axios from 'axios'

import "./Form.css";
import { Col, FormGroup } from "react-bootstrap";

class Form extends React.Component {
  
  // const [slope, setSlope] = useState("");
  // const [ca, setCa] = useState("");
  // const [thal, setThal] = useState("");

  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      formData: {
        "age": 0,
        "sex": 0,
        "cp": 0,
        "trestbps": 0,
        "cholestrol": 0,
        "fbs": 0,
        "restecg": 0,
        "thalach": 0,
        "exang": 0,
        "oldpeak": 0
      },
      result: ""
    };
  }

  handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    var formData = this.state.formData;
    formData[name] = value;
    this.setState({
      formData
    });
  }

  handlePredictClick = (event) => {
    const formData = this.state.formData;
    this.setState({ isLoading: true });
    fetch('http://127.0.0.1:5000/prediction/', 
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(formData)
      })
      .then(response => response.json())
      .then(response => {
        this.setState({
          result: response.result,
          isLoading: false
        });
      });
  }

  // const [Age, setAge] = useState("");
  // const [Sex, setSex] = useState("");
  // const [CP, setCP] = useState("");
  // const [TrestBps, setTrestBps] = useState("");
  // const [Cholesterol, setCholesterol] = useState("");
  // const [FBS, setFbs] = useState("");
  // const [restecg, setRestEcg] = useState("");
  // const [thalach, setThalach] = useState("");
  // const [exang, setExang] = useState("");
  // const [oldPeak, setOldPeak] = useState("");


  render() {
    const isLoading = this.state.isLoading;
    const formData = this.state.formData;
    const result = this.state.result;

    return (
      <div className="background">
        <div className="Form">
        <form>
          <form.Group as={Row} className="mb-3" controlId="formPlaintextEmail" onChange={this.handleChange}>
            <form.Label column sm="2">
              Age
            </form.Label>
            <Col sm="10">
              <form.Control name="age" type="text" />
            </Col>
          </form.Group>

          <form.Group as={Row} className="mb-3" controlId="formPlaintextPassword" onChange={this.handleChange}>
            <form.Label column sm="2">
              Sex
            </form.Label>
            <form.Check
              type="radio"
              label="1"
              name="formHoriRadios"
            />
            <form.Check
              type="radio"
              label="0"
              name="formHoriRadios"
            />
          </form.Group>

          <form.Group as={Row} className="mb-3" controlId="formPlaintextEmail" onChange={this.handleChange}>
            <form.Label column sm="2">
              cp
            </form.Label>
            <Col sm="10">
              <form.Control name="cp" type="text" />
            </Col>
          </form.Group>

          <form.Group as={Row} className="mb-3" controlId="formPlaintextEmail" onChange={this.handleChange}>
            <form.Label column sm="2">
              trestbps
            </form.Label>
            <Col sm="10">
              <form.Control name="trestbps" type="text" />
            </Col>
          </form.Group>

          <form.Group as={Row} className="mb-3" controlId="formPlaintextEmail" onChange={this.handleChange}>
            <form.Label column sm="2">
              chol
            </form.Label>
            <Col sm="10">
              <form.Control name="cholestrol" />
            </Col>
          </form.Group>

          <form.Group as={Row} className="mb-3" controlId="formPlaintextEmail" onChange={this.handleChange}>
            <form.Label column sm="2">
              fbs
            </form.Label>
            <Col sm="10">
              <form.Control name="fbs" />
            </Col>
          </form.Group>

          <form.Group as={Row} className="mb-3" controlId="formPlaintextEmail" onChange={this.handleChange}>
            <form.Label column sm="2">
              restecg
            </form.Label>
            <Col sm="10">
              <form.Control name="restecg" />
            </Col>
          </form.Group>

          <form.Group as={Row} className="mb-3" controlId="formPlaintextEmail" onChange={this.handleChange}>
            <form.Label column sm="2">
              thalach
            </form.Label>
            <Col sm="10">
              <form.Control name="thalach" />
            </Col>
          </form.Group>

          <form.Group as={Row} className="mb-3" controlId="formPlaintextEmail" onChange={this.handleChange}>
            <form.Label column sm="2">
              exang
            </form.Label>
            <Col sm="10">
              <form.Control name="exang" />
            </Col>
          </form.Group>

          <form.Group as={Row} className="mb-3" controlId="formPlaintextEmail" onChange={this.handleChange}>
            <form.Label column sm="2">
              old peak
            </form.Label>
            <Col sm="10">
              <form.Control name="oldpeak"/>
            </Col>
          </form.Group>
          
        
            

          {/* <form.Group as={Row} className="mb-3" controlId="formPlaintextEmail" onChange={(e) => setSlope(e.target.value)}>
            <form.Label column sm="2">
              slope
            </form.Label>
            <Col sm="10">
              <form.Control />
            </Col>
          </form.Group>

          <form.Group as={Row} className="mb-3" controlId="formPlaintextEmail" setCa>
            <form.Label column sm="2">
              ca
            </form.Label>
            <Col sm="10">
              <form.Control />
            </Col>
          </form.Group>

          <form.Group as={Row} className="mb-3" controlId="formPlaintextEmail" onChange={(e) => setThal(e.target.value)}>
            <form.Label column sm="2">
              thal
            </form.Label>
            <Col sm="10">
              <form.Control />
            </Col>
          </form.Group> */}

          <Button
                  block
                  variant="success"
                  disabled={isLoading}
                  onClick={!isLoading ? this.handlePredictClick : null}>
                  { isLoading ? 'Making prediction' : 'Predict' }
          </Button>
          </form>
          {result === "" ? null :
              (<Row>
                <Col className="result-container">
                  <h5 id="result">{result}</h5>
                </Col>
              </Row>)
            }
        </div>
      </div>
    );
  }
}
export default Form;