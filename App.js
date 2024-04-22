import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Product from './components/Product';
import React, { Component } from 'react';

function App() {

  var a = 5;
  var b = 7;
  var name = "we";
  var product = {
    id : 1,
    name : 'Iphone 7 plus',
    price : ' 1500 USD',
    status: true
  }; 

  var users = [
      {
          id : 1,
          name : 'Nguyen Van A',
          age : 18
      },
      {
          id : 2,
          name : 'Nguyen Van B',
          age : 19
      },
      {
          id : 3,
          name : 'Nguyen Van C',
          age : 20
      },
  ];

  var elements = users.map((user, index) => {
    return <div key={ user.id }> 
              <h2> Name : { user.name } </h2>
              <p> Age : { user.age } </p>
           </div>
  }); 
  return (
    <div>
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Title</a>
          <ul className="nav navbar-nav">
            <li className="active">
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Link</a>
            </li>
          </ul>
        </div>
      </nav>
      <div className = "ml-30">
        <h2>
          a : { a } <br/>
          b : { b } <br/>
          a + b = {a + b} <br/>
        </h2>
        <h3>
          name : {name}
        </h3>
        <h3>
          ID: { product.id }<br/>
          name: { product.name }<br/>
          price:{ product.price }<br/>
          Status: {product.status ? 'Active' : 'Disactive' }
        </h3>
        <br/>
        <hr/>
        { elements }
      </div>
    </div>
    );
}

export default App;
