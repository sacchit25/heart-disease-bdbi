import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import form from "react-bootstrap/Form";

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
  const [slope, setSlope] = useState("");
  const [ca, setCa] = useState("");
  const [thal, setThal] = useState("");

  return (
    <div className="background">
      <div className="Form">
        <form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
          <form.Label column sm="2">
            Age
          </form.Label>
          <Col sm="10">
            <form.Control />
          </Col>
        </form.Group>

        <form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
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

        <form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
          <form.Label column sm="2">
            cp
          </form.Label>
          <Col sm="10">
            <form.Control type="text" />
          </Col>
        </form.Group>

        <form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
          <form.Label column sm="2">
            trestbps
          </form.Label>
          <Col sm="10">
            <form.Control type="text" />
          </Col>
        </form.Group>

        <form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
          <form.Label column sm="2">
            chol
          </form.Label>
          <Col sm="10">
            <form.Control />
          </Col>
        </form.Group>

        <form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
          <form.Label column sm="2">
            fbs
          </form.Label>
          <Col sm="10">
            <form.Control />
          </Col>
        </form.Group>

        <form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
          <form.Label column sm="2">
            restecg
          </form.Label>
          <Col sm="10">
            <form.Control />
          </Col>
        </form.Group>

        <form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
          <form.Label column sm="2">
            thalach
          </form.Label>
          <Col sm="10">
            <form.Control />
          </Col>
        </form.Group>

        <form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
          <form.Label column sm="2">
            exang
          </form.Label>
          <Col sm="10">
            <form.Control />
          </Col>
        </form.Group>

        <form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
          <form.Label column sm="2">
            old peak
          </form.Label>
          <Col sm="10">
            <form.Control />
          </Col>
        </form.Group>

        <form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
          <form.Label column sm="2">
            slope
          </form.Label>
          <Col sm="10">
            <form.Control />
          </Col>
        </form.Group>

        <form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
          <form.Label column sm="2">
            ca
          </form.Label>
          <Col sm="10">
            <form.Control />
          </Col>
        </form.Group>

        <form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
          <form.Label column sm="2">
            thal
          </form.Label>
          <Col sm="10">
            <form.Control />
          </Col>
        </form.Group>

        <Button className="button" variant="primary">
          {" "}
          Submit{" "}
        </Button>
      </div>
    </div>
  );
}
export default Form;
