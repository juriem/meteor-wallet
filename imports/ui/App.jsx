import React from 'react';
import {ContactForm} from "./ContactForm";
import {ContactsList} from "./ContactsList";
import {Header} from "./Header";

export const App = () => (
    <div>
        <Header/>
        <div className="min-h-full">
            <div className="max-w-4xl mx-auto p-2">
                <ContactForm/>
                <ContactsList/>
            </div>
        </div>
    </div>
);
