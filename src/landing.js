import React from 'react';
import image from './heartimg.png'
// import { BrowserRouter, Route, Routes} from "react-router-dom";

function landing() {
    return (
        <div>
            <div className='one'>
                <div className='landing-test-img'>
                    <img src={image} />
                </div>
                <div className='landing-test'>
                    <h1> For Your Heart's Natural Life & Care </h1>
                    {/* <button> Take a Heart Quiz</button> */}
                    {/* <form action="/form">    */}
                        <input type="submit" value="Take a Heart Quiz" className='btn' onclick="document.location.href='form.js';" />
                        {/* trouble linking to form page */}
                    {/* </form> */}
                </div>
            </div>
                <div className='two'>
                    <div className='cards'>
                        <p> Care For Your Heart</p>
                        <h1> What We Do</h1>
                        <div className='components'>
                        <div className='component1'>
                            <h3> Analyze </h3>
                            <p> Using multiple datasets consisting of information of numerous real heart disease and non-heart 
                                disease patients, we have trained a model to recognize whether or not a patient is at a high risk of 
                                heart disease based on a set of input parameters related to one’s health.</p>
                        </div>
                        <div className='component2'>
                            <h3> Our Motivation </h3>
                            <p> Nowadays, a lot of individuals live their day to day lives without being aware of the fact that 
                                they may have heart disease. If an individual knows whether or not they are at high risk of getting 
                                a heart based on their health conditions, then this person can either get medical help as soon as 
                                possible, or take extra precautions to help prevent it; this awareness can help save numerous lives.
                            </p>
                        </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}
export default landing;