import React, { useContext } from 'react';
import { useHistory, Link } from 'react-router-dom';
import UserContext from '../../context/UserContext';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';

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
            props.setShowHiddenTabs(true);
            props.setHideRegisterLogin(false);

            //redirect
            history.push('/');

        } catch (err) {

            console.log(err.response);

            //alert
            window.alert('Log In Failed. Not registered or invalid credentials')
        }
    }

    return (

        <Container>
            <h1 style={{ padding: '1rem 0' }}><i className="fas fa-user"></i> Sign Into Your Account</h1>

            <Form className='py-3'
                onSubmit={handleSubmit(onSubmit)}
            >
                <Form.Group controlId='email'>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder='Enter Email'
                        required
                        name="email"
                        ref={register}
                        style={{ width: '60%' }}
                    >
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId='password'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder='Enter Password'
                        required
                        name="password"
                        ref={register}
                        style={{ width: '60%' }}
                    >
                    </Form.Control>
                </Form.Group>

                <Button type='submit' variant='primary'>Sign In</Button>

            </Form>

            <Row className='py-3'>
                <Col>
                    Don't have an account? <Link to='/register'>Sign Up</Link>
                </Col>
            </Row>

        </Container>
    )
}

export default Login