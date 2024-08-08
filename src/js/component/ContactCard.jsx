import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../../styles/home.css";

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
        <div className="card my-3 box-edit">
            <div className="card-body">
                {isEditing ? (
                    <>
                        <div className="mb-3">
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
                        </div>
                        <div className="d-flex justify-content-center">
                            <button onClick={handleSave} className="btn btn-success mt-2 mx-2">
                                Save
                            </button>
                            <button onClick={() => setIsEditing(false)} className="btn btn-secondary mt-2 mx-2">
                                Cancel
                            </button>
                        </div>
                    </>
                ) : (
                    <div className="d-flex align-items-center">
                        <img
                            src="https://st3.depositphotos.com/3538469/15750/i/450/depositphotos_157501024-stock-photo-business-man-icon.jpg"
                            alt="Contact"
                            className="img-thumbnail me-3"
                            style={{ width: "160px", height: "160px", borderRadius: "50%" }}
                        />
                        <div className="flex-grow-1">
                            <div className="data text-start">
                                <h5 className="card-title mb-3 fs-4">{contact.name}</h5>
                                <p className="card-text"><strong>Phone: </strong>{contact.phone}</p>
                                <p className="card-text"><strong>Email: </strong>{contact.email}</p>
                                <p className="card-text"><strong>Address: </strong>{contact.adress}</p>
                            </div>
                            <div className="mt-3 d-flex justify-content-start">
                                <Link to={`/contact/${index}`} className="btn btn-info me-2">
                                    View Details
                                </Link>
                                <button onClick={() => setIsEditing(true)} className="btn btn-primary me-2">
                                    Edit
                                </button>
                                <button onClick={() => onDelete(index)} className="btn btn-danger">
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
