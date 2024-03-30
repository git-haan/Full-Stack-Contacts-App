import React from "react";

const ContactList = ({ contacts, updateContact, updateCallback }) => {

    const onDelete = async (id) => {
        try {
            const options = {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                }
            }
            const response = await fetch(`http://127.0.0.1:5000/delete_contact/${id}`, options)
            if (response.status === 200) {
                updateCallback()
            } else {
                alert('Failed to delete contact')
            }
        } catch (error) {
            alert(error)
        }
    }

    return (
        <div>
            <h1>Contacts</h1>
            <table>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>{'  '}</th>
                        <th>Last Name</th>
                        <th>{'  '}</th>
                        <th>Phone Number</th>
                        <th>{'  '}</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {contacts.map((contact) => (
                        <tr key={contact.id}>
                            <td>{contact.firstName}</td>
                            <td>{'  '}</td>
                            <td>{contact.lastName}</td>
                            <td>{'  '}</td>
                            <td>{contact.phone}</td>
                            <td>{'  '}</td>
                            <td>
                                <button onClick = {() => updateContact(contact)}>Update</button>
                                <button onClick = {() => onDelete(contact.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ContactList;