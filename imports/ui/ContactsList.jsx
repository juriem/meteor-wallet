import React from 'react';
import {useTracker} from "meteor/react-meteor-data";
import {ContactsCollection} from "../api/contacts";

export const ContactsList = () => {

    const contacts = useTracker(() => {
        return ContactsCollection.find({}).fetch();
    })

    return (
        <div>
            <div className="mt-10">
                <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                    Contact list
                </h3>
            </div>
            <ul role="list" className="mt-4 border-t border-b border-gray-200 divide-y divide-gray-200">
                {contacts.map(({name, email, imageUrl}, idx) => (
                    <li key={idx} className="min-w-0 flex-1 flex items-center space-x-3">
                        <div className="min-w-0 flex-1 flex items-center space-x-3">
                            <div className="flex-shrink-0">
                                <img className="h-10 w-10 rounded-full" src={imageUrl} alt=""/>
                            </div>
                            <div className="min-w-0 flex-1">
                                <p className="text-sm font-medium text-gray-900 truncate">{name}</p>
                                <p className="text-sm font-medium text-gray-900 truncate">{email}</p>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )

}