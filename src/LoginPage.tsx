import Sticker from "./Sticker";
import './LoginPage.css'
import LoginForm from "./LoginForm";

function LoginPage(){
    return(
        <div>
            <Sticker></Sticker>
            <div className="loginform">
            <LoginForm></LoginForm>
            </div>
        </div>
    )
}

export default LoginPage