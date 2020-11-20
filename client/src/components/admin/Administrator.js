import React from 'react';
import { Admin, Resource } from 'react-admin';
import restProvider from 'ra-data-simple-rest';
import UsersList from './adminComponents/users/UsersList';

const Administrator = () => {
    return (
        <Admin dataProvider={restProvider('http://localhost:3000')}>
            <Resource name='admin/users' list={UsersList} />
        </Admin>
    )
}

export default Administrator
