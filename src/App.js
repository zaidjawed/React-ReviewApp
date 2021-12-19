import React from "react";
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';

import Signup from "./Signup";
import Dashboard from "./Dashboard";
import Login from './Login';
import ReviewForm from './Form';

import datas from './data';

function handleFormSubmit(data) {
   datas.unshift(data);
}

function App() {
   return (
      <BrowserRouter>
      <AuthProvider>
         <Switch>
            <Route path="/" exact render={() => <Dashboard datas={datas}/> } />
            <Route path="/signup" exact component={Signup} />
            <Route path="/login" exact component={Login} />
            <Route path="/form" exact render={() => <ReviewForm handleSubmit={handleFormSubmit} /> } />
         </Switch>
      </AuthProvider>
      </BrowserRouter>
   )
}

export default App;
