import React, { useContext } from 'react';
import AdminContext from '../../context/AdminContext';
import { Admin, Resource } from 'react-admin';
import restProvider from 'ra-data-simple-rest';
import UsersList from './adminComponents/users/UsersList';
import '../../style/AdministratorStyle.css';

const Administrator = () => {

    const { admin } = useContext(AdminContext);

    return (
        <div>
            {admin && admin !== undefined ?

                <Admin dataProvider={restProvider('http://localhost:3000')}>
                    <Resource name='admin/users' list={UsersList} />
                </Admin>

                :

                <h1>You Must An Administrator To View This Page</h1>
            }
        </div>
    )
}

export default Administrator
