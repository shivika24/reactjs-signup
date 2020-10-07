import React from "react";
// import Register from './components/register';
import Formikform from './components/formikform';
import { BrowserRouter } from "react-router-dom";
function App() {
    return (
        <BrowserRouter>
            <div className="App">
            <header className="App-header">
            <img src="https://images.squarespace-cdn.com/content/v1/5c632f9eb2cf79b39ad9bf5f/1551206656888-DKXT79F398LNKQA7W2WL/ke17ZwdGBToddI8pDm48kGfiFqkITS6axXxhYYUCnlRZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpxQ1ibo-zdhORxWnJtmNCajDe36aQmu-4Z4SFOss0oowgxUaachD66r8Ra2gwuBSqM/registration-form-icon-png-4.png?format=2500w" alt="logo image" style={{height:"60px"}}/>
            </header><br/><br/>
                {/* <Register /> */}
                <Formikform/>
            </div>
        </BrowserRouter>
    );
}

export default App;
