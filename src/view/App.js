import React from 'react';
import logo from './logo.svg';
import './App.scss';
import MyComponent from './Example/MyComponent';
import ListToDo from './toDos/listToDo';
import Nav from './nav/Nav';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './Example/Home';
import {
  BrowserRouter,
  Switch,
  Route,
  Link,

} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
        <Nav/>
          <img src={logo} className="App-logo" alt="logo" />
          {/* 
          
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Trunggg
          </a> */}
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/ToDos">
            <ListToDo />
          </Route>
          <Route path="/about">
            <MyComponent />
          </Route>
        </Switch>
        </header>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        {/* Same as */}
        <ToastContainer />
        
      </div>
        
    </BrowserRouter>
  );
}

export default App;
