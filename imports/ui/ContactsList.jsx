import React, {memo} from 'react';
import {useSubscribe, useFind} from "meteor/react-meteor-data";
import {ContactsCollection} from "../api/ContactsCollection";

export const ContactsList = () => {
    const isLoading = useSubscribe('allContacts');
    const contacts = useFind(() => {
        return ContactsCollection.find({}, {sort: {createdAt: -1}});
    });

    const removeContact = (e, _id) => {
        e.preventDefault();
        Meteor.call("contacts.remove", {contactId: _id});
    }
    if (isLoading()) {
        return (
            <div className="mt-10">
                <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                    Loading ...
                </h3>
            </div>
        )
    }

    const ContactItem = memo(({person}) => (
        <li className="min-w-0 flex-1 flex items-center space-x-3">
            <div className="min-w-0 flex-1 flex items-center space-x-3">
                <div className="flex-shrink-0">
                    <img className="h-10 w-10 rounded-full" src={person.imageUrl} alt=""/>
                </div>
                <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium text-gray-900 truncate">{person.name}</p>
                    <p className="text-sm font-medium text-gray-900 truncate">{person.email}</p>
                </div>
                <div>
                    <a
                        href="#"
                        onClick={e => removeContact(e, person._id)}
                        className="inline-flex items-center shadow-sm px-2.5 py-0.5 border border-gray-300 text-sm leading-5 font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50"
                    >
                        Remove
                    </a>
                </div>
            </div>
        </li>)
    )

    return (
        <div>
            <div className="mt-10">
                <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                    Contact list
                </h3>
            </div>
            <ul role="list" className="mt-4 border-t border-b border-gray-200 divide-y divide-gray-200">
                {contacts.map((person, idx) => (
                    <ContactItem key={idx} person={person} />
                ))}
            </ul>
        </div>
    )

}