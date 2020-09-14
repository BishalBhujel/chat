import React from 'react';
import './Login.css';
import { Button } from '@material-ui/core';
import { auth ,provider} from './firebase';
import { actionTypes } from './reducer';
import { useStateValue } from './StateProvider';

function Login() {
    const [{ }, dispatch] = useStateValue();

    const signIn = () => { 
        auth
            .signInWithPopup(provider)
            .then((result) => {
                dispatch({
                    type: actionTypes.SET_User,
                    user:result.user,
                })
            })
            .catch((error) => alert(error.message));
    };
    return (
        <div className="login">
            <div className="login__container">
                <img
                    src="https://i.pinimg.com/564x/60/d4/d3/60d4d31e4f2b18abaee11da6281ff6ea.jpg" alt="" />
                <div className="login__text">
                    <h1>Sign into chat</h1>
                </div>
                
                <Button type="submit" onClick={signIn}>
                    Sign In With Google
                </Button>
            </div>
        </div>
    )
}

export default Login
