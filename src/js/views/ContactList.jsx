import React, {useContext,useEffect} from "react";
import Contact from "./Contact.jsx"; 
import {Context} from "../store/appContext.js";
import { Link } from "react-router-dom";

const ContactList = () => {
    const {store, actions} = useContext(Context);
    useEffect(() => {
        console.log("i run");
        let url = "https://playground.4geeks.com/contact/agendas/mertc"; 
        fetch(url)
        .then(response => {
            if (!response.ok) {
              throw new Error("Network response was not ok " + response.statusText);
            }
            return response.json();
          })
          .then(data => {
            actions.setStore(data);
            console.log("Data retrieved:", store); // handle the JSON data
            
          })
          .catch(error => {
            console.error("Fetch error:", error); // handle any errors
          });
    }, []);

    return (
     <div className="container">

        <Link to="/add-contact" className="d-flex w-75 mx-auto justify-content-end mb-4">
            <button type="button" className="btn btn-success">Add Contact</button>
        </Link>

        {/* contact list */}
        {store?.contacts?.map((item)=>{
            return <Contact key={item.id} id={item.id} name= {item.name} email={item.email} phone={item.phone} address={item.address}/>
            })}
         
    </div>
          
  
    );
}

export default ContactList;