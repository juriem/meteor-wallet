import React from 'react';
import {ContactForm} from "./ContactForm";
import {ContactsList} from "./ContactsList";

export const App = () => (
    <div>
        <h1>Meteor Wallet!</h1>
        <ContactForm/>
        <hr />
        <ContactsList/>
    </div>
);
