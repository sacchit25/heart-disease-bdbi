import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import form from "react-bootstrap/Form";
import axios from 'axios'

import "./Form.css";
import { Col, FormGroup } from "react-bootstrap";

function Form() {
  const [Age, setAge] = useState("");
  const [Sex, setSex] = useState("");
  const [CP, setCP] = useState("");
  const [TrestBps, setTrestBps] = useState("");
  const [Cholesterol, setCholesterol] = useState("");
  const [FBS, setFbs] = useState("");
  const [restecg, setRestEcg] = useState("");
  const [thalach, setThalach] = useState("");
  const [exang, setExang] = useState("");
  const [oldPeak, setOldPeak] = useState("");
  // const [slope, setSlope] = useState("");
  // const [ca, setCa] = useState("");
  // const [thal, setThal] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault()
    const params = { Age, Sex, CP, TrestBps, Cholesterol, FBS, restecg, thalach, exang, oldPeak }

    axios
      .post('http://localhost:8080/prediction', params)
      .then((res) => {
        const data = res.data.data
        const parameters = JSON.stringify(params)
        const msg = `Prediction: ${data.prediction}\nInterpretation: ${data.interpretation}\nParameters: ${parameters}`
        alert(msg)
        reset()
      })
      .catch((error) => alert(`Error: ${error.message}`))
  }

  const reset = () => {
    setAge('')
    setCP('')
    setCholesterol('')
    setExang('')
    setFbs('')
    setOldPeak('')
    setRestEcg('')
    setSex('')
    setThalach('')
    setTrestBps('')
  }


  return (
    <div className="background">
      <div className="Form">
      <form onSubmit={(e) => handleSubmit(e)}>
        <form.Group as={Row} className="mb-3" controlId="formPlaintextEmail" onChange={(e) => setAge(e.target.value)}>
          <form.Label column sm="2">
            Age
          </form.Label>
          <Col sm="10">
            <form.Control />
          </Col>
        </form.Group>

        <form.Group as={Row} className="mb-3" controlId="formPlaintextPassword" onChange={(e) => setSex(e.target.value)}>
          <form.Label column sm="2">
            Sex
          </form.Label>
          <form.Check
            type="radio"
            label="Male"
            name="formHoriRadios"
          />
          <form.Check
            type="radio"
            label="Female"
            name="formHoriRadios"
          />
        </form.Group>

        <form.Group as={Row} className="mb-3" controlId="formPlaintextEmail" onChange={(e) => setCP(e.target.value)}>
          <form.Label column sm="2">
            cp
          </form.Label>
          <Col sm="10">
            <form.Control type="text" />
          </Col>
        </form.Group>

        <form.Group as={Row} className="mb-3" controlId="formPlaintextEmail" onChange={(e) => setTrestBps(e.target.value)}>
          <form.Label column sm="2">
            trestbps
          </form.Label>
          <Col sm="10">
            <form.Control type="text" />
          </Col>
        </form.Group>

        <form.Group as={Row} className="mb-3" controlId="formPlaintextEmail" onChange={(e) => setCholesterol(e.target.value)}>
          <form.Label column sm="2">
            chol
          </form.Label>
          <Col sm="10">
            <form.Control />
          </Col>
        </form.Group>

        <form.Group as={Row} className="mb-3" controlId="formPlaintextEmail" onChange={(e) => setFbs(e.target.value)}>
          <form.Label column sm="2">
            fbs
          </form.Label>
          <Col sm="10">
            <form.Control />
          </Col>
        </form.Group>

        <form.Group as={Row} className="mb-3" controlId="formPlaintextEmail" onChange={(e) => setRestEcg(e.target.value)}>
          <form.Label column sm="2">
            restecg
          </form.Label>
          <Col sm="10">
            <form.Control />
          </Col>
        </form.Group>

        <form.Group as={Row} className="mb-3" controlId="formPlaintextEmail" onChange={(e) => setThalach(e.target.value)}>
          <form.Label column sm="2">
            thalach
          </form.Label>
          <Col sm="10">
            <form.Control />
          </Col>
        </form.Group>

        <form.Group as={Row} className="mb-3" controlId="formPlaintextEmail" onChange={(e) => setExang(e.target.value)}>
          <form.Label column sm="2">
            exang
          </form.Label>
          <Col sm="10">
            <form.Control />
          </Col>
        </form.Group>

        <form.Group as={Row} className="mb-3" controlId="formPlaintextEmail" onChange={(e) => setOldPeak(e.target.value)}>
          <form.Label column sm="2">
            old peak
          </form.Label>
          <Col sm="10">
            <form.Control />
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

        <Button className="button" variant="primary" type="submit">
          {" "}
          Submit{" "}
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
export default Form;