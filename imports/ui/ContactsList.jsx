import React from 'react';
import {useTracker} from "meteor/react-meteor-data";
import {ContactsCollection} from "../api/contacts";

export const ContactsList = () => {

    const contacts = useTracker(() => {
        return ContactsCollection.find({}).fetch();
    })

    return (
        <table style={{'width': '100%'}}>
            <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
            </tr>
            </thead>
            <tbody>
            {
                contacts.map(({_id, name, email}) => <tr key={_id}>
                    <td>{name}</td>
                    <td>{email}</td>
                </tr>)
            }
            </tbody>
        </table>
    )

}