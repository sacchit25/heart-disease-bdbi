import React, { useState } from 'react';
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import form from "react-bootstrap/Form"

import './Form.css';
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
        
        <div className="Form">
            {/* <form>
                <label>Age:</label>
                <input
                    type="text"
                    className="patient-age"
                    placeholder="Enter your age"
                    onChange={(event) => {
                        setAge(event.target.value)
                    }}
                   />
                <br />

                
                <div className="patient-sex">
                    <label>Sex:</label>
                    <input
                        type="text"
                        placeholder="Enter your sex"
                        onChange={(event) => {
                            setSex(event.target.value)
                         }}
                        />
                </div>
             
                <div className="cp">
                <label>CP:</label>
                    <input
                        type="text"
                        placeholder="Enter your cp"
                        onChange={(event) => {
                            setCP(event.target.value)
                        }}
                        /> 
                </div>
                <div className="trestbps">
                <label>Trestbps:</label>
                    <input
                        type="text"
                        placeholder="Enter your trestbps"
                        onChange={(event) => {
                            setTrestBps(event.target.value)
                        }}
                        /> 
                </div>
                <div className="chol">
                <label>Cholesterol:</label>
                    <input
                        type="text"
                        placeholder="Enter your cholesterol level"
                        onChange={(event) => {
                            setCholesterol(event.target.value)
                        }}
                        /> 
                </div>
                <div className="fbs">
                <label>fbs:</label>
                    <input
                        type="text"
                        placeholder="Enter your fbs"
                        onChange={(event) => {
                            setFbs(event.target.value)
                        }}
                        /> 
                </div>
                <div className="restecg">
                <label>restecg:</label>
                    <input
                        type="text"
                        placeholder="Enter your resting ecg"
                        onChange={(event) => {
                            setRestEcg(event.target.value)
                        }}
                        /> 
                </div>
                <div className="thalach">
                <label>thalach:</label>
                    <input
                        type="text"
                        placeholder="Enter your thalach"
                        onChange={(event) => {
                            setThalach(event.target.value)
                        }}
                        /> 
                </div>
                <div className="exang">
                <label>exang:</label>
                    <input
                        type="text"
                        placeholder="Enter your exang"
                        onChange={(event) => {
                            setExang(event.target.value)
                        }}
                        /> 
                </div>
                <div className="oldpeak">
                <label>oldpeak:</label>
                    <input
                        type="text"
                        placeholder="Enter your oldpeak"
                        onChange={(event) => {
                            setOldPeak(event.target.value)
                        }}
                        /> 
                </div>
                <div className="slope">
                <label>slope:</label>
                    <input
                        type="text"
                        placeholder="Enter your slope"
                        onChange={(event) => {
                            setSlope(event.target.value)
                        }}
                        /> 
                </div>
                <div className="ca">
                <label>ca:</label>
                    <input
                        type="text"
                        placeholder="Enter your ca"
                        onChange={(event) => {
                            setCa(event.target.value)
                        }}
                        /> 
                </div>
                <div className="thal">
                <label>thal:</label>
                    <input
                        type="text"
                        placeholder="Enter your thal"
                        onChange={(event) => {
                            setThal(event.target.value)
                        }}
                        /> 
                </div>


                <div className="button-submit">
                    <button className='submit-review'
                            // onClick={this.handleChange}
                    >Add Review</button>
                </div>
            </form> */}

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
    <Col sm="10">
      <form.Control type="text" />
    </Col>
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
      <form.Control   />
    </Col>
  </form.Group>


<form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
    <form.Label column sm="2">
      fbs
    </form.Label>
    <Col sm="10">
      <form.Control  />
    </Col>
  </form.Group>


<form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
    <form.Label column sm="2">
      restecg
    </form.Label>
    <Col sm="10">
      <form.Control  />
    </Col>
  </form.Group>


<form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
    <form.Label column sm="2">
      thalach
    </form.Label>
    <Col sm="10">
      <form.Control  />
    </Col>
  </form.Group>


<form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
    <form.Label column sm="2">
      exang
    </form.Label>
    <Col sm="10">
      <form.Control  />
    </Col>
  </form.Group>

  <form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
    <form.Label column sm="2">
      old peak
    </form.Label>
    <Col sm="10">
      <form.Control   />
    </Col>
  </form.Group>

  <form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
    <form.Label column sm="2">
      slope
    </form.Label>
    <Col sm="10">
      <form.Control  />
    </Col>
  </form.Group>

  <form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
    <form.Label column sm="2">
      ca
    </form.Label>
    <Col sm="10">
      <form.Control  />
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

  <Button className="button" variant="primary"> Submit </Button>
        </div>
    );
}
export default Form;
