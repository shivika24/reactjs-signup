import React, {Component} from "react";
import GoogleLogin from "react-google-login";
import google from './google.png';
class Googlelogin extends Component
{
    responseGoogle = (response) => {
        console.log(response);
    };
    render()
    {
        return <GoogleLogin
        clientId="206491669517-gqg7j7cq7d7efd2hpb2asb7e3vl6lmuv.apps.googleusercontent.com"
        buttonText="Sign Up With Google"
        onSuccess={this.responseGoogle}
        onFailure={this.responseGoogle}
        render={(renderProps) => (
            <button
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                className="btn sign-up-btn"
            >
                <img src={google} style={{width:"30px"}}/>
                {"   "}
                Sign Up With Google
            </button>
        )}
    />
    }
}
export default Googlelogin;