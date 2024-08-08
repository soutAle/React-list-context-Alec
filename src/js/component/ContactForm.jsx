import React, { useContext, useState } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";

export const ContactForm = () => {
    const { actions } = useContext(Context);

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        adress: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.name || !formData.phone || !formData.email || !formData.adress) {
            alert("Todos los campos son obligatorios.");
            return;
        }

        // Si todos los campos están llenos, agregar el contacto y reiniciar el formulario
        actions.addContact(formData);
        console.log(formData);
        setFormData({
            name: '',
            phone: '',
            email: '',
            adress: '',
        });
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };


    return (
        <>  
            <form className="w-50 mx-auto box-edit my-5" onSubmit={handleSubmit}>
                <h1 className="text-center">Contact Form</h1>
                <label className="mt-3" htmlFor="name">Full name</label>
                <input
                    type="text"
                    placeholder="Full Name"
                    className="form-control"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}>
                </input>

                <label className="mt-3" htmlFor="phone">Telephone</label>
                <input
                    type="text"
                    placeholder="Telephone"
                    className="form-control"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}>
                </input>

                <label className="mt-3" htmlFor="email">Email</label>
                <input
                    type="text"
                    placeholder="Email"
                    className="form-control"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}>
                </input>

                <label className="mt-3" htmlFor="adress">Address</label>
                <input
                    type="text"
                    placeholder="Address"
                    className="form-control"
                    name="adress"
                    value={formData.adress}
                    onChange={handleChange}>
                </input>

                <div className="d-flex justify-content-center">
                    <input
                        type="submit"
                        className="align-item-center btn btn-primary text-center mt-3"
                        name="Añadir"
                        value={'Añadir'}>
                    </input>
                </div>
            </form>
        </>
    );
};
