
import './App.css';
import Header from './components/Header';
import Products from './components/Products';
import Cart from './components/Cart'
import Checkout from './components/Checkout';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useState, useEffect } from "react";


const stripePromise = loadStripe("pk_test_51Ilf0LBEuoBbbdoKoDL1VF7V6ukFKpUencAxpgOu5hBtR2aC9XYqP0mrBmHBffCYgsnrSzYqZKZIbq1TpcWl5PB200obJdTH3F");

function App() {
  const [clientSecret, setClientSecret] = useState("");
 
  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    
      fetch("http://localhost:8080/payments", { method: "POST",
      headers: { "Content-Type": "application/json" }})
        .then(async response => {
        try {
        const data = await response.json()
        console.log(data.clientSecret)
        setClientSecret(data.clientSecret)
       
        } catch (error) {
          console.error(error)
        }
      }
        )
    
     
  }, []);

  const appearance = {
    theme: 'stripe',
  };
  const options = {
    clientSecret,
    appearance,
  };
  
 


  return (
    <Router>
     
    <div className="app">
    
      <Header />
      <Routes>
      <Route path='/' element={<Products />} />
 
  
     <Route path='/cart' element={<Cart />} />

     <Route path='cart/checkout' element={clientSecret && (  <Elements options={options} stripe={stripePromise}>
          <Checkout />
        </Elements>)} />
   


     </Routes>
    </div>
    </Router>
  );
}

export default App;
