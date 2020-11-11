import React, { useContext } from 'react';
import UserContext from '../context/UserContext';
import { useForm } from "react-hook-form";
import axios from 'axios';

const Login = () => {

    const { register, handleSubmit, reset } = useForm();
    const { setToken } = useContext(UserContext);

    const onSubmit = async data => {
        console.log(data)

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

            setToken(req.data.token);

            //clear form
            reset()

        } catch (err) {
            console.log(err.response.data)
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor='email'>Email:</label>
                <input name='email' ref={register}></input>
                <label htmlFor='password'>Pasword:</label>
                <input name='password' ref={register}></input>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default Login
