import React from 'react';
import { Link } from 'react-router-dom';

const AddContacts = () => {
  return (
    <div className='container w-50'>
      <form>
        <div className="form-group">
          <label className='fs-5 px-1' htmlFor="formGroupExampleInput">Full Name</label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="Full Name"
          />
        </div>
        <div className="form-group">
          <label className='fs-5 px-1 ' htmlFor="formGroupExampleInput2">Email</label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput2"
            placeholder="Email"
          />
        </div>
        <div className="form-group">
          <label className='fs-5 px-1' htmlFor="formGroupExampleInput">Phone</label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="Phone"
          />
        </div>
        <div className="form-group">
          <label className='fs-5 px-1' htmlFor="formGroupExampleInput2">Address</label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput2"
            placeholder="Address"
          />
        </div>
      </form>
      <button type="button" className="btn btn-primary w-100 mt-4">Success</button>
      <Link to='/'> or get back to contacts</Link>
    </div>
  );
};

export default AddContacts;
