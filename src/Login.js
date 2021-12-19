import React, { useRef, useState } from 'react';
import { Form, Button, Card, Alert, Container} from 'react-bootstrap';
import { useAuth } from './context/AuthContext';
import { Link, useHistory } from 'react-router-dom';

function Login () {

   const emailRef = useRef();
   const passwordRef = useRef();
   const [error, setError] = useState('');
   const [loading, setLoading] = useState(false);
   const history = useHistory();

   const { login } = useAuth();

   async function handleSubmit(e) {
      e.preventDefault();

      try {
         setError('');
         setLoading(true)
         await login(emailRef.current.value, passwordRef.current.value);
         history.push('/form');
      } catch(err) {
         setError(err.message);
         console.log(err);
      }
      setLoading(false);
   }

   return (
      <Container className="d-flex align-items-center justify-content-center" style={{maxWidth: '400px', minHeight: '100vh'}}>
         <div className='w-100'> 
         <Card>
            <Card.Body>
               <h2 className="text-center mb-2">Log In</h2>
               {error && <Alert variant="danger">{error}</Alert>}
               <Form onSubmit={handleSubmit}>
                  <Form.Group id="email">
                     <Form.Label>Email</Form.Label>
                     <Form.Control type="email" ref={emailRef} required />
                  </Form.Group>
                  <Form.Group id="password">
                     <Form.Label>Password</Form.Label>
                     <Form.Control type="password" ref={passwordRef} required />
                  </Form.Group>
                  <Button disabled={loading} className="w-100 mt-2 btn-success" type="submit">Log In</Button>
                  <div className='w-100 d-flex align-items-stretch mt-3'>
                     <Link className="text-white btn-dark w-100 rounded py-2 text-center" to="/" style={{textDecoration: 'none'}}>Back to dashboard</Link>
                  </div>
               </Form>
            </Card.Body>
         </Card>
         <div className="w-100 text-center mt-2">
            Create a new account <Link to="/signup">Sign Up</Link>
         </div>
         </div>
      </Container>
   )
}

export default Login;