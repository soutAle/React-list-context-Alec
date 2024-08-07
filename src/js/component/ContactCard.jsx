import React, { useState } from "react";

export const ContactCard = ({ contact, index, onEdit, onDelete }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedContact, setEditedContact] = useState(contact);

    const handleEditChange = (e) => {
        setEditedContact({ ...editedContact, [e.target.name]: e.target.value });
    };

    const handleSave = () => {
        onEdit(index, editedContact);
        setIsEditing(false);
    };

    return (
        <div className="card my-3">
            <div className="card-body">
                {isEditing ? (
                    <>
                        <input
                            type="text"
                            name="name"
                            value={editedContact.name}
                            onChange={handleEditChange}
                            className="form-control mt-2"
                            placeholder="Full Name"
                        />
                        <input
                            type="text"
                            name="phone"
                            value={editedContact.phone}
                            onChange={handleEditChange}
                            className="form-control mt-2"
                            placeholder="Telephone"
                        />
                        <input
                            type="text"
                            name="email"
                            value={editedContact.email}
                            onChange={handleEditChange}
                            className="form-control mt-2"
                            placeholder="Email"
                        />
                        <input
                            type="text"
                            name="adress"
                            value={editedContact.adress}
                            onChange={handleEditChange}
                            className="form-control mt-2"
                            placeholder="Address"
                        />
                        <div className="d-flex justify-content-center ">
                            <button onClick={handleSave} className="btn btn-success mt-2 mx-4">
                                Save
                            </button>
                            <button onClick={() => setIsEditing(false)} className="btn btn-secondary mt-2 ml-2">
                                Cancel
                            </button>
                        </div>
                    </>
                ) : (
                    <>
                        <h5 className="card-title">{contact.name}</h5>
                        <p className="card-text"><strong>Phone: </strong>{contact.phone}</p>
                        <p className="card-text"><strong>Email: </strong>{contact.email}</p>
                        <p className="card-text"><strong>Adress: </strong>{contact.adress}</p>
                        <div className="d-flex justify-content-center">
                            <button onClick={() => setIsEditing(true)} className="btn btn-primary  me-4">
                                Edit
                            </button>
                            <button onClick={() => onDelete(index)} className="btn btn-danger ml-2">
                                Delete
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};
