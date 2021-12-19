import React from 'react';
import { AuthProvider, useAuth } from './context/AuthContext';
import { Container, Navbar, Nav, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function NavBar() {
   const { currentUser, logout } = useAuth();

   return (
      <AuthProvider>
         <Navbar bg="dark" variant="dark" className='mb-3'>
            <Container>
               <Navbar.Brand href="javascript:void(0)">Review</Navbar.Brand>
               <Nav className="justify-content-end">

               {currentUser ? 
               <Nav.Link href="javascript:void(0)"><Link onClick={logout} className="text-white" style={{textDecoration: 'none'}}>
                  <svg  className="me-2" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-left" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z"/>
                  <path fill-rule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"/>
                  </svg> 
                  <span className="ms-3">Log Out</span>
               </Link></Nav.Link> : 
               (<><Nav.Link href="javascript:void(0)"><Link to="/signup" className="text-white" style={{textDecoration: 'none'}}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-plus-fill" viewBox="0 0 16 16">
                  <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                  <path fill-rule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"/>
                  </svg>
                  <span className="ms-3">Register</span>
                  </Link></Nav.Link>
                  <Nav.Link href="javascript:void(0)"><Link to="/login" className="text-white" style={{textDecoration: 'none'}}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                  </svg>
                     <span className="ms-3">Log In</span>
                  </Link></Nav.Link></>) }

               </Nav>
            </Container>
         </Navbar>
         <Container className="mb-3">
            <Card>
               <Card.Body className="d-flex justify-content-between align-items-center">
                  <Button disabled={!currentUser} variant="primary"><Link className="text-white text-decoration-none" to="/form">Add review</Link></Button>
                  {
                  currentUser ? <p className='pt-3'>Logged in as {currentUser.email}</p> : 
                  <p className='pt-3'>Log In to add review</p>
                  }
                  
               </Card.Body>
            </Card>
         </Container>
      </AuthProvider>
   )
}
