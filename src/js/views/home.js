import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { ContactCard } from "../component/ContactCard.jsx";

export const Home = () => {
    const { actions,store } = useContext(Context);

    return (
        <div className="container mt-5">
            <h1 className="text-center">Contacts</h1>
            <div className="row justify-content-center text-end">
                {store.contacts.map((contact, index) => (
                    <div className="col-12 w-75" key={index}>
                        <ContactCard
                            contact={contact}
                            index={index}
                            onEdit={actions.editContact}
                            onDelete={actions.deleteContact}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};
