import React, {useState} from 'react';
import {ContactsCollection} from "../api/contacts";

export const ContactForm = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [imageUrl, setImageUrl] = useState("");

    const saveContact = () => {

        ContactsCollection.insert({
            name,
            email,
            imageUrl
        })

        setName("");
        setEmail("");
        setImageUrl("");
    }

    return (
        <form>
            <div>
                <label htmlFor="name">Name:</label>
                <input id="name" type="text" value={name} name="name" onChange={e => setName(e.target.value)}/>
            </div>

            <div>
                <label htmlFor="email">E-mail:</label>
                <input id="email" name="email" value={email} type="text" onChange={e => setEmail(e.target.value)}/>
            </div>

            <div>
                <label htmlFor="imageUrl">Profile image:</label>
                <input id="imageUrl" name="imageUrl" value={imageUrl} type="text" onChange={e => setImageUrl(e.target.value)}/>
            </div>

            <div>
                <button type="button" onClick={saveContact}>Save contact</button>
            </div>
        </form>
    )
}