import React from 'react';
import { useHistory } from 'react-router-dom';

const Logout = () => {

    const history = useHistory();

    const handleLogOut = async () => {
        localStorage.removeItem("x-auth-token");

        //redirect
        history.push('/');
    }

    return (
        <form onSubmit={handleLogOut}>
            <button type='submit'>Logout</button>
        </form>
    )
}

export default Logout
