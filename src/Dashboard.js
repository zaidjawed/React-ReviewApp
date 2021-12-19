import React from 'react';
import { AuthProvider } from './context/AuthContext';
import NavBar from "./Navbar";
import Review from './Review';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Dashboard(props) {
   return (
      <div>
         <NavBar />
         <Review datas={props.datas} />
      </div>
   )
}
