import React, { useRef, useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams, useLocation } from "react-router-dom";
import { Context } from "../store/appContext";

const AddContact = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();
  
  const { state } = useLocation(); 
  const id = state;

  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  useEffect(() => {
    console.log("my id ",id)
    if (id) {
      // Pre-fill the form if editing
      const existingContact = store.contacts.find((item) => item.id === parseInt(id));
      console.log(existingContact);
      if (existingContact) {
        setContact(existingContact);
      }
    }
  }, [id, store.contacts]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact({ ...contact, [name]: value });
  };

  // Handle form submission
  const handleSubmit = () => {
    if (id) {
      // Update existing contact
      actions.updateContact(id, contact);
    } else {
      // Add new contact
      actions.addContact(contact);
    }

    navigate("/"); // Redirect to main contacts page
  };

  return (
    <div className="container w-50">
      <h2 className="text-center my-4">{id ? "Edit Contact" : "Add Contact"}</h2>
      <form>
        <div className="form-group">
          <label className="fs-5 px-1" htmlFor="name">
            Full Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={contact.name}
            onChange={handleChange}
            placeholder="Full Name"
          />
        </div>
        <div className="form-group">
          <label className="fs-5 px-1" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={contact.email}
            onChange={handleChange}
            placeholder="Email"
          />
        </div>
        <div className="form-group">
          <label className="fs-5 px-1" htmlFor="phone">
            Phone
          </label>
          <input
            type="text"
            className="form-control"
            id="phone"
            name="phone"
            value={contact.phone}
            onChange={handleChange}
            placeholder="Phone"
          />
        </div>
        <div className="form-group">
          <label className="fs-5 px-1" htmlFor="address">
            Address
          </label>
          <input
            type="text"
            className="form-control"
            id="address"
            name="address"
            value={contact.address}
            onChange={handleChange}
            placeholder="Address"
          />
        </div>
      </form>
      <button type="button" onClick={handleSubmit} className="btn btn-primary w-100 mt-4">
        {id ? "Update Contact" : "Save Contact"}
      </button>
      <Link to="/" className="d-block mt-3 text-center">
        or get back to contacts
      </Link>
    </div>
  );
};

export default AddContact;
