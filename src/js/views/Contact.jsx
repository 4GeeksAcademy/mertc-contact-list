import React, {useContext, useState, useEffect} from "react"; 
import {Context} from "../store/appContext.js";

function Contact({id,name,email,phone, address }) {

  const {store, actions} = useContext(Context);
  


  return (
     
  <div className="d-flex w-75 bg-primary  mx-auto  ">
    <div className="col-2" >
       
      <img className="img-fluid" src="https://placehold.co/600" alt="profile" />
      
    </div>
    <div className="col-8 d-flex flex-column" >
       <div> {id}</div> 
       <div>{name}</div>
       <div>{email}</div>
       <div>{phone}</div>
       <div>{address}</div>

    </div>
    <div className="col-2" >
      One of three columns
    </div> 
  </div>
 
  );
}

export default Contact