import React, { useContext } from 'react';
import AdminContext from '../../context/AdminContext';
import { Admin, Resource } from 'react-admin';
import restProvider from 'ra-data-simple-rest';
import UsersList from './adminComponents/users/UsersList';
import UsersEdit from './adminComponents/users/UsersEdit';
import { createBrowserHistory as createHistory } from 'history';
import '../../style/AdministratorStyle.css';

const Administrator = () => {

    const { admin } = useContext(AdminContext);
    const history = createHistory();

    return (
        <div>
            {admin && admin !== undefined ?

                <Admin history={history} dataProvider={restProvider('http://localhost:3000')}>
                    <Resource name='admin/users' list={UsersList} edit={UsersEdit} />
                </Admin>

                :

                <h1>You Must An Administrator To View This Page</h1>
            }
        </div>
    )
}

export default Administrator