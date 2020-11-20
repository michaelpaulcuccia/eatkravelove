import React from 'react';
import { List, Datagrid, TextField, EmailField, EditButton, DeleteButton } from 'react-admin';

const UsersList = props => {
    return (
        <List {...props}>
            <Datagrid>
                <TextField source='._id' />
                <TextField source='name' />
                <EmailField source='email' />
                <TextField source='password' />
                <EditButton basePath='/admin/users' />
                <DeleteButton basePath='/admin/users' />
            </Datagrid>
        </List>
    )
}

export default UsersList
