import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import form from "react-bootstrap/Form";
import { Link } from 'react-router';
// import Swal from 'sweetalert2'
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
          <Col sm="5">
            <form.Control placeholder="Your Age(26 - 62).." />
          </Col>
        </form.Group>

        <form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
          <form.Label column sm="2">
            Sex
            </form.Label>
          <Col sm="5">
            <form.Control placeholder="0 For Male and 1 For Female.." />
          </Col>
        </form.Group>

        <form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
          <form.Label column sm="2">
            Chest Pain
          </form.Label>
          <Col sm="5">
            <form.Control type="text" placeholder="1:Typical, 2:Atypical, 3:Non-Anginal, 4:Asymptomatic" />
          </Col>
        </form.Group>

        <form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
          <form.Label column sm="2">
            Trestbps
          </form.Label>
          <Col sm="5">
            <form.Control type="text" placeholder="Resting BP.." />
          </Col>
        </form.Group>

        <form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
          <form.Label column sm="2">
            Cholesterol
          </form.Label>
          <Col sm="5">
            <form.Control placeholder="Cholesterol Levels.." />
          </Col>
        </form.Group>

        <form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
          <form.Label column sm="2">
            FBS
          </form.Label>
          <Col sm="5">
            <form.Control placeholder="Fasting BP.. (1 = True, 0 = False)" />
          </Col>
        </form.Group>

        <form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
          <form.Label column sm="2">
            RestECG
          </form.Label>
          <Col sm="5">
            <form.Control placeholder="0:Normal, 1:ST-T, 2-Hypertrophy" />
          </Col>
        </form.Group>

        <form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
          <form.Label column sm="2">
            Thalach
          </form.Label>
          <Col sm="5">
            <form.Control placeholder="Maximum Heart Rate Achieved.." />
          </Col>
        </form.Group>

        <form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
          <form.Label column sm="2">
            Exang
          </form.Label>
          <Col sm="5">
            <form.Control placeholder="Exercise Induced Anigma..(1: Yes, 0: No)" />
          </Col>
        </form.Group>

        <form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
          <form.Label column sm="2">
            Old Peak
          </form.Label>
          <Col sm="5">
            <form.Control placeholder="ST Depression Induced by Exercise Relative to Rest.." />
          </Col>
        </form.Group>

        <form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
          <form.Label column sm="2">
            Slope
          </form.Label>
          <Col sm="5">
            <form.Control placeholder="1:Upsloping, 2: Flat, 3:Downsloping" />
          </Col>
        </form.Group>

        <form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
          <form.Label column sm="2">
            CA
          </form.Label>
          <Col sm="5">
            <form.Control placeholder="Vessels Colored by Flouroslopy (0.3).."/>
          </Col>
        </form.Group>

        <form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
          <form.Label column sm="2">
            Thalassemia
          </form.Label>
          <Col sm="5">
            <form.Control placeholder="3:normal, 6:Fixed Defect, 7-Reversable Defect" />
          </Col>
        </form.Group>

        {/* <Button className="button-predict">
         Predict
        </Button> */}
      </div>
      <a href ="landing">
      <Button className="button-predict">
         Predict
        </Button>
        </a>
        
    </div>
  );
}
export default Form;

