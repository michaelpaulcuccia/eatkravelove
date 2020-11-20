import React, { useContext } from 'react';
import UserContext from '../context/UserContext';
import AdminContext from '../context/AdminContext';
import { useHistory } from 'react-router-dom';

const Logout = props => {

    const { setToken } = useContext(UserContext);
    const { setAdmin } = useContext(AdminContext)
    const history = useHistory();

    const handleLogOut = async () => {

        //remove token from local storage
        localStorage.removeItem("x-auth-token");

        //set Context to undefined - removes 'Logout' in Nav
        setToken(undefined);
        setAdmin(undefined);

        //unshow tabs
        props.setShowTabs(false)
        props.setHideRegisterLogin(true);
        props.setShowAdmin(false)

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
