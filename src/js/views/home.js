import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { ContactCard } from "../component/ContactCard.jsx";
import { Link } from "react-router-dom";

export const Home = () => {
    const { actions, store } = useContext(Context);

    return (
        <div className="container my-5 ">
            <div className="row justify-content-center text-end">
                {store.contacts.length === 0 ? (
                    <div className="col-12 w-75 p-3 mb-5 text-center box-edit">
                        <h1 className="text-center my-5">Contacts</h1>
                        <p>No hay contactos. Añade un contacto.</p>
                    </div>
                ) : (
                    store.contacts.map((contact, index) => (
                        <div className="col-12 w-75 " key={index}>
                                <ContactCard
                                    contact={contact}
                                    index={index}
                                    onEdit={actions.editContact}
                                    onDelete={actions.deleteContact}
                                />
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

