import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from "react-hook-form";
import axios from 'axios';
import '../../style/RegisterStyle.css';

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
            <div className='register_main_container'>

                <h2 className="register_head"><i className="fas fa-user"></i> Welcome New User! Please Register</h2>

                <form className="form"
                    onSubmit={handleSubmit(onSubmit)}
                >

                    <div className="form-group">
                        <input type="text"
                            placeholder="Name"
                            name="name"
                            required
                            ref={register}
                        />
                    </div>

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

                    <input type="submit" className="register_button" value="Register" />
                </form>


            </div>

        </div>
    )
}

export default Register
