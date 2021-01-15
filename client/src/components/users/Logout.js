import React, { useContext, Fragment } from 'react';
import UserContext from '../../context/UserContext';
import { Form, Button, Card, Link } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const Logout = props => {

    const { setToken } = useContext(UserContext);
    const history = useHistory();

    const handleLogOut = async () => {

        //remove token from local storage
        localStorage.removeItem("x-auth-token");

        //Context API
        setToken(undefined);

        //hide tabs - restores to initial values
        props.setShowHiddenTabs(false)
        props.setHideRegisterLogin(true);

        //redirect
        history.push('/');

    };

    return (

        <Form onSubmit={handleLogOut}
            style={{ marginTop: '3%' }}
        >

            <Card className="text-center" border='light'>

                <Card.Body>
                    <Card.Title><h1>Are you sure you want to leave?</h1></Card.Title>

                    <Button size='lg' variant='danger' type='submit'>Logout</Button>

                    <Card.Text
                        style={{ marginTop: '2%' }}
                    >
                        <a

                            href='https://www.instagram.com/eatkravelove/?hl=en'
                            target="_blank"
                            rel="noreferrer">
                            <h3><i className='fab fa-instagram'></i> Be Sure to Follow Us on Instagram</h3>
                        </a>
                    </Card.Text>

                </Card.Body>

            </Card>
        </Form>

    )
}

export default Logout