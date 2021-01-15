import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { Container, Form, Button, Row, Col, Image } from 'react-bootstrap';
import seven from '../../images/food/seven.png'

const Register = () => {

    const { register, handleSubmit, reset } = useForm();
    const [setToken] = useState('');
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
        <Container>

            <Row>
                <Col>
                    <Image src={seven} fluid style={{ paddingTop: '3%', borderRadius: '7%' }} />
                </Col>

                <Col>
                    <h1 style={{ padding: '1rem 0' }}><i className="fas fa-user"></i> Welcome New User</h1>

                    <Form className='py-3'
                        onSubmit={handleSubmit(onSubmit)}
                    >

                        <Form.Group controlId='name'>
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder='Enter Name'
                                required
                                name="name"
                                ref={register}
                            >
                            </Form.Control>
                        </Form.Group>

                        <Form.Group controlId='email'>
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder='Enter Email'
                                required
                                name="email"
                                ref={register}
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
                            >
                            </Form.Control>
                        </Form.Group>

                        <Button type='submit' variant='primary'>Register</Button>

                    </Form>

                    <Row className='py-3'>
                        <Col>
                            <h3>Registered Users have access to our catering.</h3>
                        </Col>
                    </Row>
                </Col>
            </Row>



        </Container>
    )
}

export default Register
