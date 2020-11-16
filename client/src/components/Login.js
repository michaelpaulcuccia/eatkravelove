import React, { useContext } from 'react';
import { useHistory, Link } from 'react-router-dom';
import UserContext from '../context/UserContext';
import { useForm } from "react-hook-form";
import axios from 'axios';
import '../style/LoginStyle.css';

const Login = props => {

    const { register, handleSubmit, reset } = useForm();
    const { setToken } = useContext(UserContext);
    const history = useHistory();

    const onSubmit = async data => {

        try {

            //create headers
            const config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            };

            //create body
            const body = JSON.stringify(data);

            //make request
            const req = await axios.post('api/login', body, config);

            //add token to context
            setToken(req.data.token);

            //set token to local storage
            localStorage.setItem("x-auth-token", req.data.token);

            //clear form
            reset();

            //show tabs
            props.setShowTabs(true)

            //redirect
            history.push('/');

        } catch (err) {

            console.log(err.response);

            //alert
            window.alert('Log In Failed. Not registered or invalid credentials')
        }
    }

    return (
        <div>
            <div className='login_main_container'>

                <h2 className="login_head"><i className="fas fa-user"></i> Log In To Your Account</h2>

                <form className="form"
                    action="create-profile.html"
                    onSubmit={handleSubmit(onSubmit)}
                >

                    <div className="form-group">
                        <input type="email"
                            placeholder="Email Address"
                            name="email"
                            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                            required
                            ref={register}
                        />
                    </div>

                    <div className="form-group">
                        <input
                            type="password"
                            placeholder="Password"
                            name="password"
                            required
                            ref={register}
                        />
                    </div>

                    <input type="submit" className="login_button" value="Login" />
                </form>

                <p className="register_link">
                    Don't have an account? <Link to='/register' className='text_link'>Sign Up</Link>
                </p>

            </div>

        </div>
    )
}

export default Login
