import React from "react";

const ContactList = ({contacts}) => {
    return <div>
        <h2>Contacts</h2>
        <table>
            <thead>
                <trow>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Actions</th>
                </trow>
            </thead>
            <tbody>
                {contacts.map((contact) => (
                    <tr key={contact.id}>
                        <td>{contact.firstName}</td>
                        <td>{contact.lastName}</td>
                        <td>{contact.email}</td>
                        <td>
                            <button>Update</button>
                            <button>Delete</button>
                        </td>

                    </tr>
                ))}
            </tbody>
        </table>
    </div>
}

export default ContactList