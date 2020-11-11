import React from 'react';

const Logout = () => {

    const handleLogOut = async () => {
        localStorage.removeItem("x-auth-token")
    }

    return (
        <form onSubmit={handleLogOut}>
            <button type='submit'>Logout</button>
        </form>
    )
}

export default Logout
