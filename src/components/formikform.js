import React,{useState} from 'react';
import {Formik , Field, useField } from 'formik';
import GoogleLogin from './googlelogin';
import Facebooklogin from './facebooklogin';
import * as Yup from 'yup';
import "./signup.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
let eye = <FontAwesomeIcon icon={faEye}/>;


const MyTextInput = ({ label, ...props }) => {
    // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
    // which we can spread on <input> and alse replace ErrorMessage entirely.
    const [field, meta] = useField(props);
    return (
      <>
        <input className="form-control" {...field} {...props} />
        {meta.touched && meta.error ? (
          <div className="errors text-left">{meta.error}</div>
        ) : null}
      </>
    );
  };
      
  const MySelect = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
      <>
        <select {...field} {...props} className="form-control"/>
        {meta.touched && meta.error ? (
          <div className="errors">{meta.error}</div>
        ) : null}
      </>
    );
  };
 const Formikform = () => {
   const [passwordDisplay, setPasswordDisplay] = useState(false);
   const  togglePasswordVisiblity = () => {
    if(passwordDisplay==true)
    {
        setPasswordDisplay(false);
    }
    else{
        setPasswordDisplay(true);
    }
    passwordDisplay
        ? (eye = <FontAwesomeIcon icon={faEyeSlash} />)
        : (eye = <FontAwesomeIcon icon={faEye} />);
    };
   return (
    <Formik
    initialValues= {{
      email: '',
      firstname: '',
      lastname: '',
      password: '',
      age:'',
      place:''
    }}
    validationSchema={Yup.object({
       firstname: Yup.string()
         .max(15, 'Must be 15 characters or less')
         .required('Required'),
       lastname: Yup.string()
         .max(20, 'Must be 20 characters or less')
         .required('Required'),
       email: Yup.string().email('Invalid email address').required('Required'),
       age:Yup.number()
          .min(1, "You must be at least 18 years")
          .max(100, "You must be at most 100 years")
          .required('Required'),
       place: Yup.string()
       .oneOf(
         ["chandigarh", "panchkula", "mohali"],
         "Select a Place from the list"
       )
       .required("Required"),
       password: Yup.string()
       .matches(
           /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
           "Password must contain at least 8 characters, one uppercase, one number and one special case character"
       )
         .required('Required'),
     })}
   //  validate,
    onSubmit={values => {
      alert(JSON.stringify(values, null, 2));
    }}
    >
        {formik => (
         <div className="page-wrapper container-fluid">
           <div className="row">
               <div className="sign-up-wrapper text-center animate__animated animate__zoomIn animate__delay-2s">
                   <div className="sign-up-header">
                       <h4 className="top-heading pt-3">SIGN UP</h4>
                       <h1 className="mainHeading"> Create Your Account</h1>
                       <span className="subtext">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span><br/><br/>
                       <div data-onsuccess="onSignIn" id="i11" style={{display:"inline"}}  className="container d-flex flex-column flex-md-row justify-content-between">
                           <GoogleLogin/>
                           <Facebooklogin/>
                       </div><br/>
                       <div style={{display: "flex",justifyContent: "space-evenly"}}>
                           <hr style={{color: "black",height: "1.5rem", width: "40%",}}/>
                           or
                           <hr style={{color: "black",height: "1.5rem", width: "40%",}}/>
                       </div>
                   </div> 

                   <form
                       onSubmit={formik.handleSubmit}
                       method="POST"
                   >
                       <div className="form-group">
                           <MyTextInput
                               type="text"
                               placeholder="First name"
                               name="firstname"  
                               label="First Name"                        
                           />
                       </div>
                       <div className="form-group">
                           <MyTextInput
                               type="text"
                               placeholder="Last name"
                               name="lastname"   
                               label="Last Name"                      
                           />
                       </div>
                       <div className="form-group">
                           <MyTextInput
                               type="number"
                               placeholder="Age"
                               name="age"     
                               label="Age"                          
                           />
                       </div>
                       <div className="form-group">
                       <MySelect name="place" label="Place">
                           <option  defaultValue="Default">Place</option>
                           <option value="chandigarh">Chandigarh</option>
                           <option value="panchkula">Panchkula</option>
                           <option value="mohali">Mohali</option>
                       </MySelect>
                       </div>
                       <div className="form-group">
                           <MyTextInput
                               type="email"
                               placeholder="Email Address"
                               name="email"   
                               label="Email Address"                   
                           />
                         </div>
                       <div
                           className="form-group"
                           style={{ marginBottom: "2.5rem" }}
                       >
                           <div className="input-group mb-3">
                           <Field
                               type={passwordDisplay ? "text" : "password"}
                               name="password"
                               label="Password"
                               className="form-control"
                               placeholder="Password"
                               style={{
                                   display: "inline",
                               }}                        
                           />
                           <div className="input-group-append">
                           <span className="input-group-text" id="basic-addon2"><i
                               onClick={togglePasswordVisiblity}
                           >
                               {eye}
                           </i></span>
                           </div>
                           </div>
                           {formik.touched.password&&formik.errors.password ? <div className="errors">{formik.errors.password}</div> : null}
                       </div>
                       <p className="form-group subtext px-3">
                           By Clicking Sign Up, you agree to our
                            Terms of Use 
                           and our
                            Privacy Policy  .
                       </p>
                       <div className="form-group">
                           <button className="btn mainbtn" style={{height:"50px"}}>
                               Sign Up
                           </button>
                       </div>
                   </form>
                  
               </div>
            </div>
         <br/>
        </div> )}
       </Formik>
       )      
 };
export default Formikform;