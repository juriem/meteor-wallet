import {ContactsCollection} from "./ContactsCollection";

Meteor.publish('allContacts', function publishAllContacts() {
    return ContactsCollection.find();
})