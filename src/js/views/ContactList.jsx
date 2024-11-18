import React, {useContext} from "react";
import Contact from "./Contact.jsx"; 
import {Context} from "../store/appContext.js";
import { Link } from "react-router-dom";

const ContactList = () => {
    const {store, actions} = useContext(Context);


    return (
     <div className="container">

        <Link to="/add-contact" className="d-flex w-75 mx-auto justify-content-end mb-4">
            <button type="button" className="btn btn-success">Success</button>
        </Link>

        {/* contact list */}
        {store?.contacts?.map((item)=>{
            return <Contact key={item.id} id={item.id} name= {item.name} email={item.email} phone={item.phone} address={item.address}/>
            })}
         
    </div>
          
  
    );
}

export default ContactList;