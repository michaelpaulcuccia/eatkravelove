import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import UserContext from '../context/UserContext';
import { useForm } from "react-hook-form";
import axios from 'axios';

const Login = () => {

    const { register, handleSubmit, reset } = useForm();
    const { setToken } = useContext(UserContext);
    const history = useHistory();

    const onSubmit = async data => {

        try {

            //create headers
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    'Set-Cookie': 'ice_cream=chocolate'
                }
            };

            //create body
            const body = JSON.stringify(data);

            //make request
            const req = await axios.post('api/login', body, config);

            setToken(req.data.token);

            //clear form
            reset();

            //redirect
            history.push('/');

        } catch (err) {
            console.log(err.response.data);
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor='email'>Email:</label>
                <input name='email' type='email' pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" required ref={register}></input>
                <label htmlFor='password'>Pasword:</label>
                <input name='password' type='password' required ref={register}></input>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default Login
