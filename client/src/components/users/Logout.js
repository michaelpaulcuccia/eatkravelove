import React, { useContext } from 'react';
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
        <form onSubmit={handleLogOut}>
            <button type='submit'>Logout</button>
        </form>
    )
}

export default Logout