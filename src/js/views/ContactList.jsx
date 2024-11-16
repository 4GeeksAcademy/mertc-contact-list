import React, {useContext} from "react";
import Contact from "./Contact.jsx"; 
import {Context} from "../store/appContext.js";

const ContactList = () => {
    const {store, actions} = useContext(Context);


    return (
     <div className="container text-center">
        {store?.agendas?.map((item)=>{
            return <Contact key={item.id} name= {item.slug} email="mail@example.com" phone="+1333999666" address="mekanin adresi"/>
            })}
         
    </div>
          
  
    );
}

export default ContactList;