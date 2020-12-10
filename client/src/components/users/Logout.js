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
        <div className="container"
            style={{ margin: 'auto', marginLeft: '40%', marginTop: '5%' }}
        >
            <strong>Are you sure you want to leave?</strong>
            <br></br>
            <br></br>
            <form onSubmit={handleLogOut}
                style={{ margin: 'auto', marginLeft: '8%' }}
            >
                <button type='submit'
                    style={{ padding: '2px 2px 2px 2px' }}
                >Logout</button>
            </form>
        </div>

    )
}

export default Logout