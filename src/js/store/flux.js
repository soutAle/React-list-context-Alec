const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            contacts: JSON.parse(localStorage.getItem("contacts")) || [],
        },
        actions: {
            CreateList: async () => {
                try {
                    const response = await fetch("https://playground.4geeks.com/contact/agendas/soutAlec", {
                        method: "POST",
                    });
                    console.log(response);
                    if (response.ok) {
                        await response.json();
                        getActions().getContacts();
                    } else {
                        throw new Error("Ha ocurrido un error");
                    }
                } catch (error) {
                    console.log("Error:", error);
                }
            },
            addContact: (formData) => {
                const store = getStore();
                const updatedContacts = [...store.contacts, formData];
                setStore({ contacts: updatedContacts });
                localStorage.setItem("contacts", JSON.stringify(updatedContacts));
            },
            editContact: (index, updatedContact) => {
                const store = getStore();
                const updatedContacts = store.contacts.map((contact, i) => (i === index ? updatedContact : contact));
                setStore({ contacts: updatedContacts });
                localStorage.setItem("contacts", JSON.stringify(updatedContacts));
            },
            deleteContact: (index) => {
                const store = getStore();
                const updatedContacts = store.contacts.filter((_, i) => i !== index);
                setStore({ contacts: updatedContacts });
                localStorage.setItem("contacts", JSON.stringify(updatedContacts));
            },
        }
    };
};

export default getState;


