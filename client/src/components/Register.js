import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from "react-hook-form";
import axios from 'axios';

const Register = () => {

    const { register, handleSubmit, reset } = useForm();
    const [token, setToken] = useState('');
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
            const req = await axios.post('api/register', body, config);

            //set token to state
            setToken(req.data.token)

            //clear form
            reset()

            //redirect to login
            history.push('/login');

        } catch (err) {
            console.log(err.response.data)
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor='name'>Name:</label>
                <input name='name' type='text' required ref={register}></input>
                <label htmlFor='email'>Email:</label>
                <input name='email' type='email' pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" required ref={register}></input>
                <label htmlFor='password'>Pasword:</label>
                <input name='password' type='password' required ref={register}></input>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default Register
