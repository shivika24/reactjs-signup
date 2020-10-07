import React, {Component} from "react";
import FacebookLogin from "react-facebook-login";
class Facebooklogin extends Component
{
    responseFacebook = (response) => {
        console.log(response);
    };
    render()
    {
        return <FacebookLogin
        appId="1458634634332191"
        fields="name,email,picture"
        callback={this.responseFacebook}
        cssClass="btn sign-up-btn"
        icon="fa fa-facebook-square fa-lg"
    />
    }
}
export default Facebooklogin;