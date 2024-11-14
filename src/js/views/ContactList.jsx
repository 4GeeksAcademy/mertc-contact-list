import React, {useContext} from "react";
import Contact from "./Contact.jsx"; 

import {Context} from "../store/appContext.js";

const ContactList = () => {
    const {store, actions} = useContext(Context);


    return (
     <div className="container text-center bg-secondary ">
            
                <Contact  />
            
        </div>
          
  
    );
}

export default ContactList;