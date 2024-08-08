import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const ContactView = () => {
    const { store } = useContext(Context);
    const { theid } = useParams(); 
    const contact = store.contacts[theid];

    if (!contact) {
        return <div>Contact not found</div>;
    }

    return (
        <div className="container mt-5 d-flex justify-content-center">
            <div className="card box-edit" style={{ maxWidth: "450px" }}>
                <img 
                    src="https://st3.depositphotos.com/3538469/15750/i/450/depositphotos_157501024-stock-photo-business-man-icon.jpg" 
                    alt="Contact" 
                    className="card-img-top" 
                    style={{ width: "120px", height: "120px", borderRadius: "50%", margin: "15px auto" }} 
                />
                <div className="card-body text-start lh-1">
                    <h5 className="card-title mb-5 fs-4 text-center">{contact.name}</h5>
                    <p className="card-text"><strong>Phone: </strong>{contact.phone}</p>
                    <p className="card-text"><strong>Email: </strong>{contact.email}</p>
                    <p className="card-text"><strong>Address: </strong>{contact.address}</p>
                </div>
            </div>
        </div>
    );
};
