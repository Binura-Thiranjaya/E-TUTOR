import React from 'react';
import {
  MDBInputGroup,
  MDBContainer,
  MDBBtn,
} from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBContainer  className='bg-dark mt-4 pt-5 pb-5 rounded-6'>
      <MDBInputGroup textBefore='@' className='mb-2'>
        <input className='form-control' type='text' placeholder="Recipient's username" />
      </MDBInputGroup>
      <MDBInputGroup className='mb-5'>
        <input className='form-control' placeholder='Username' type='text' />
        <span className='input-group-text'>@</span>
        <input className='form-control' placeholder='Server' type='text' />
      </MDBInputGroup>
      <div className="d-grid gap-2 col-6 mx-auto">
      <MDBBtn rounded color='success'>Sign In</MDBBtn>
   </div>

    </MDBContainer>
  );
}