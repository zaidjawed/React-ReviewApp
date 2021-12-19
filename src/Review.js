import React from 'react'
import { Card, Container } from 'react-bootstrap';
// import { FaUserCircle } from 'react-bootstrap-icons';

export default function Review(props) {
   return (
      <div>
         {props.datas.map(data => {
            if(data.rating >= 4) {
               return (
                  <Container className='my-3'>
                  <Card className="border border-success">
                     <Card.Body>
                        <Card.Title className="mb-3">{data.title}</Card.Title>
                        <Card.Subtitle className='mb-2'>
                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                           <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                           <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                           </svg> 
                           <span className="ms-3">{data.details}</span>
                        </Card.Subtitle>
                        <Card.Text>
                           {data.description}
                        </Card.Text>
                        <span className='bg-success p-2 rounded text-white'>Rating - {data.rating} / 5</span>
                     </Card.Body>
                  </Card>
                  </Container>
               )
            } else if(data.rating >= 2 ){
               return (
                  <Container className='my-3'>
                  <Card className="border border-warning">
                     <Card.Body>
                        <Card.Title className="mb-3">{data.title}</Card.Title>
                        <Card.Subtitle className='mb-2'>
                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                              <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                           </svg> 
                           <span className="ms-3">{data.details}</span>
                        </Card.Subtitle>
                        <Card.Text>
                           {data.description}
                        </Card.Text>
                        <span className='bg-warning p-2 rounded text-white'>Rating - {data.rating} / 5</span>
                     </Card.Body>
                  </Card>
                  </Container>
               )
            } else {
               return (
                  <Container className='my-3'>
                  <Card className="border border-danger">
                     <Card.Body>
                        <Card.Title className="mb-3">{data.title}</Card.Title>
                        <Card.Subtitle className='mb-2'>
                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                              <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                           </svg> 
                           <span className="ms-3">{data.details}</span>
                        </Card.Subtitle>
                        <Card.Text>
                           {data.description}
                        </Card.Text>
                        <span className='bg-danger p-2 rounded text-white'>Rating - {data.rating} / 5</span>
                     </Card.Body>
                  </Card>
                  </Container>
               )
            }
         })}
      </div>
   )
}


// (
//    <Container className='my-2'>
//    <Card>
//       <Card.Body>
//          <Card.Title className="mb-3">{data.title}</Card.Title>
//          <Card.Subtitle className='mb-2'>
//             {data.details}
//          </Card.Subtitle>
//          <Card.Text>
//             {data.description}
//          </Card.Text>
//          <span className='bg-primary p-2 rounded text-white'>Rating - {data.rating} / 5</span>
//       </Card.Body>
//    </Card>
//    </Container>
// )