import {ContactsCollection} from "./ContactsCollection";

Meteor.methods({
    'contacts.insert'({name, email, imageUrl}) {

        if (!name) {
            throw new Meteor.Error("Name is required")
        }

        if (!email) {
            throw new Meteor.Error("Email is required")
        }


        return ContactsCollection.insert({name, email, imageUrl});
    }
})