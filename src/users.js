// in src/users.js
import * as React from "react";
import { List, Datagrid, TextField, EmailField, Edit, SimpleForm, TextInput, EditButton } from 'react-admin';
import CustomField from './CustomField';

export const UserList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="name" />
            <EmailField source="email" />
            <TextField source="address" />
            <CustomField source="email" />
            <EditButton />
        </Datagrid>
    </List>
);

export const UserEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="address" />
            <TextInput source="email" />
            <TextInput source="name" />
            <TextInput source="password" />
        </SimpleForm>
    </Edit>
);