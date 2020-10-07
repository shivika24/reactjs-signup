import React, {Component} from "react";
import GoogleLogin from './googlelogin';
import Facebooklogin from './facebooklogin';
import "./signup.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
let eye = <FontAwesomeIcon icon={faEye} />;
class Register extends Component
{
    constructor()
    {
        super();
        this.state={
            passwordDisplay:false,
            firstname:"",
            lastname:"",
            age:"",
            place:"",
            email:"",
            password:""
        }
    }
    togglePasswordVisiblity = () => {
        if(this.state.passwordDisplay==true)
        {
            this.setState({passwordDisplay:false})
        }
        else{
            this.setState({passwordDisplay:true})
        }
        this.state.passwordDisplay
            ? (eye = <FontAwesomeIcon icon={faEyeSlash} />)
            : (eye = <FontAwesomeIcon icon={faEye} />);
    };
    setById=(selector,value)=>{
        document.getElementById(selector).innerHTML=value;
    }

     handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.firstname)
        console.log(this.state.lastname)
        console.log(this.state.age)
        console.log(this.state.place)
        console.log(this.state.email)
        console.log(this.state.password)
        if(!this.alphabet(this.state.firstname))
        {
            this.setById("first-name","First Name Should Contain Only Alphabets");
        }
        else
        {
            this.setById("first-name","");
        }
        if(!this.alphabet(this.state.lastname))
        {
            this.setById("last-name","last Name Should Contain Only Alphabets");
        }
        else
        {
            this.setById("last-name","");
        }
        if(!this.checkAge(this.state.age))
        {
            this.setById("age","Please Enter Valid Age");
        }
        else
        {
            this.setById("age","");
        }
        if(!this.countryselect(this.state.place))
        {
            this.setById("place","Please Select A Place!");           
        }
        else
        {
            this.setById("place","");
        }
        if(!this.checkPassword(this.state.password,7,12))
        {
            this.setById("password","Password Should Be between 7 to 12");
        }
        else
        {
            this.setById("password","");
        }
    }
    checkAge=age=>{
        if(age>0&&age<100)
        return true;
        return false;
    }
    checkPassword=(password,min,max)=>{
       let passwordLength = password.length;
       if (passwordLength >= max || passwordLength < min)
       {
         return false;
       }
       return true;
     }
    countryselect=ucountry=>{
     if(ucountry == "Default"||ucountry=="")
     {
     return false;
     }
     return true;
     }
     alphabet=name=>{ 
     let letters = /^[a-zA-Z ]*$/;;
     if(name.match(letters))
     {
        return true;
     }
     return false;
     }
     alphaNumeric=(val,field)=>{ 
     let letters = /^[a-z\d\-_\s]+$/i;
     if(val.match(letters))
     {
      return true;
     }
         if(field==="about")
         {
             return false;
         }
         else if(field==="password")
         {
             return false;
         }     
     }
    onChange=(e)=> {
        this.setState({ [e.target.name]: e.target.value });
      }
    render()
    {
        return (
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
                        onSubmit={this.handleSubmit}
                        method="POST"
                    >
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                autoFocus
                                placeholder="First name"
                                name="firstname"
                                onChange={this.onChange}
                                required
                            />
                            <span className="errors" id="first-name"></span>
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Last name"
                                name="lastname"
                                onChange={this.onChange}
                                required
                            />
                            <span className="errors" id="last-name"></span>
                        </div>
                        <div className="form-group">
                            <input
                                type="number"
                                className="form-control"
                                placeholder="Age"
                                name="age"
                                onChange={this.onChange}
                                required
                            />
                            <span className="errors" id="age"></span>
                        </div>
                        <div className="form-group">
                        <select name="place" className="form-control" onChange={this.onChange} required>
                            <option  defaultValue="Default">Place</option>
                            <option value="chandigarh">Chandigarh</option>
                            <option value="panchkula">Panchkula</option>
                            <option value="mohali">Mohali</option>
                        </select>
                        <span className="errors" id="place"></span>
                        </div>
                        <div className="form-group">
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Email Address"
                                name="email"
                                onChange={this.onChange}
                                required
                            />
                            <span className="errors" id="email"></span>
                        </div>
                        <div
                            className="form-group"
                            style={{ marginBottom: "2.5rem" }}
                        >
                            <div className="input-group mb-3">
                            <input
                                type={this.state.passwordDisplay ? "text" : "password"}
                                name="password"
                                className="form-control"
                                placeholder="Password"
                                style={{
                                    display: "inline",
                                }}
                                onChange={this.onChange}
                                required
                            />
                            <div className="input-group-append">
                            <span className="input-group-text" id="basic-addon2"><i
                                onClick={this.togglePasswordVisiblity}
                            >
                                {eye}
                            </i></span>
                            </div>
                            <br/><span className="errors" id="password"></span>
                            </div>
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
        </div>
        )
    }
}
export default Register;