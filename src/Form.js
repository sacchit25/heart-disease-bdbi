import React from 'react'

function Form() {
    return (
        <div>
            <form>
                <label>Name of Patient:</label>
                <input
                    type="text"
                    className="patient-name"
                    placeholder="Enter name"
                    // onChange={(event) => {
                    //     setPatient(event.target.value)
                    // }}
                   />
                <br />

                <label>Age:</label>
                <div className="patient-age">
                    <input
                        type="text"
                        placeholder="Enter age"
                        // onChange={(event) => {
                        //     setAge(event.target.value)
                        // }}
                        />
                </div>
                <div className="whatever_input">
                    <input
                        type="text"
                        placeholder="whatever_input"
                        // onChange={(event) => {
                        //     setInput(event.target.value)
                        // }}
                        /> 
                </div>
                <br /><br /><br />

                <div className="button-submit">
                    <button className='submit-review'
                            // onClick={this.handleChange}
                    >Add Review</button>
                </div>
            </form>
        </div>
    );
}
export default Form;
