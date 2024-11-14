import React, {useContext} from "react"; 
import {Context} from "../store/appContext.js";

function Contact() {

  const {store, actions} = useContext(Context);

  return (
     
  <div className="d-flex w-75 bg-primary  mx-auto  ">
    <div className="col-2 ">
      One of three columns
    </div>
    <div className="col-8">
      One of three columns
    </div>
    <div className="col-2">
      One of three columns
    </div> 
  </div>
 
  );
}

export default Contact