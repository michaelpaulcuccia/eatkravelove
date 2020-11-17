import React, { useContext } from 'react';
import UserContext from '../context/UserContext';
import { useHistory } from 'react-router-dom';

const Logout = props => {

    const { setToken } = useContext(UserContext);
    const history = useHistory();

    const handleLogOut = async () => {

        //remove token from local storage
        localStorage.removeItem("x-auth-token");

        //set Context to undefined - removes 'Logout' in Nav
        setToken(undefined);

        //unshow tabs
        props.setShowTabs(false)
        props.setHideRegisterLogin(true);

        //redirect
        history.push('/');

    };

    return (
        <form onSubmit={handleLogOut}>
            <button type='submit'>Logout</button>
        </form>
    )
}

export default Logout
