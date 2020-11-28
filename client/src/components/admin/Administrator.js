import React from 'react';
import { Admin, Resource } from 'react-admin';
import restProvider from 'ra-data-simple-rest';
import UsersList from './adminComponents/users/UsersList';
import UsersEdit from './adminComponents/users/UsersEdit';
import '../../style/AdministratorStyle.css';

//import { createBrowserHistory as createHistory } from 'history';

const Administrator = () => {

    //const history = createHistory();

    return (
        <Admin
            //history={history}
            dataProvider={restProvider('http://localhost:3000')}>
            <Resource name='admin/users' list={UsersList} edit={UsersEdit} />
        </Admin>
    )
}

export default Administrator