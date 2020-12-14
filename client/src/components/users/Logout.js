import React, { useContext, Fragment } from 'react';
import UserContext from '../../context/UserContext';
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

        <Fragment>
            <div className="container"
                style={{ margin: 'auto', marginLeft: '39%', marginTop: '8%' }}
            >
                <strong
                    style={{ fontFamily: 'Architects Daughter, cursive', fontSize: '20px' }}
                >Are you sure you want to leave?</strong>
                <br></br>
                <br></br>
                <form onSubmit={handleLogOut}
                    style={{ margin: 'auto', marginLeft: '11%' }}
                >
                    <button type='submit'
                        style={{ padding: '3px 3px 3px 3px', color: 'white', backgroundColor: 'red' }}
                    >Logout</button>
                </form>
            </div >

            <div className="container"
                style={{ margin: 'auto', marginLeft: '35%', marginTop: '5%' }}
            >
                <i className='fab fa-instagram'></i>
                <a
                    style={{
                        textDecoration: 'none',
                        fontFamily: 'Architects Daughter, cursive',
                        fontSize: '24px'
                    }}
                    className='footer_anchortag'
                    href='https://www.instagram.com/eatkravelove/?hl=en'
                    target="_blank"
                    rel="noreferrer"> Be Sure to Follow Us on Instagram
                </a>
            </div>

        </Fragment>

    )
}

export default Logout