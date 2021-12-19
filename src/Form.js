import React, { useRef } from 'react';
import { Form, Button, Card, Alert, Container} from 'react-bootstrap';
import { AuthProvider, useAuth } from './context/AuthContext';
import { Link, useHistory } from 'react-router-dom';


export default function ReviewForm(props) {
   const titleRef = useRef();
   const detailsRef = useRef();
   const descriptionRef = useRef();
   const ratingRef = useRef();

   const {currentUser} = useAuth();

   const history = useHistory();

   function handleSubmit(e,data) {
      e.preventDefault();
      data = {
         title: titleRef.current.value,
         details: detailsRef.current.value,
         description: descriptionRef.current.value,
         rating: ratingRef.current.value
      }
      props.handleSubmit(data);
      history.push('/');
   }

   if(!currentUser) {
      return (
         <Container className="d-flex align-items-center justify-content-center" style={{maxWidth: '400px', minHeight: '100vh'}}>
         <div className='w-100'> 
            <Card>
               <Card.Body className="d-flex flex-column align-items-stretch justify-content-center">
                  <Alert variant="danger" className="text-center mb-2">You must be logged in to add review</Alert>
                  <Link className="text-white w-100 mt-2 btn-success text-center p-2 rounded text-decoration-none" to="/login">Login</Link>
                  <Link className="text-white w-100 mt-2 btn-primary text-center p-2 rounded text-decoration-none" to="/signup">Register</Link>
                  <Link className="text-white w-100 mt-2 btn-dark text-center p-2 rounded text-decoration-none" to="/">Back to Dashboard</Link>
               </Card.Body>
            </Card>
         </div>   
         </Container>
   )}

   return (
      <Container className="d-flex align-items-center justify-content-center" style={{maxWidth: '600px', minHeight: '100vh'}}>
         <div className='w-100'> 
            <Card>
               <Card.Body>
                  <h2 className="text-center mb-2">Add Review</h2>
                  <Form onSubmit={handleSubmit}>
                     <Form.Group id="title">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" ref={titleRef} required placeholder="Enter Title" />
                     </Form.Group>
                     <Form.Group id="details">
                        <Form.Label>Details</Form.Label>
                        <Form.Control as="textarea" rows={3} ref={detailsRef} required placeholder="Enter your details" />
                     </Form.Group>
                     <Form.Group id="description">
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" rows={5} ref={descriptionRef} required placeholder="Your review" />
                     </Form.Group>
                     <Form.Group id="details">
                        <Form.Label>Rating out of 5</Form.Label>
                        <Form.Control type="number" ref={ratingRef} required placeholder="rating out of 5" />
                     </Form.Group>
                  <Button className="w-100 mt-2 btn-success" type="submit">Submit</Button>
                  <div className='w-100 d-flex align-items-stretch mt-3'>
                     <Link className="text-white btn-dark w-100 rounded py-2 text-center" to="/" style={{textDecoration: 'none'}}>Back to dashboard</Link>
                  </div>
                  </Form>
               </Card.Body>
            </Card>
         </div>   
      </Container>
   )
}
