import React from 'react';
import Slider from './components/Slider2';
import Navar from './components/navbar';
import Footer from './components/footer';
import Booking from './components/Booking';
import Payments from './components/Payments';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
//import BookingModal2 from './components/BookingModal2';
//import Modal from './components/modal';
function App() {
  return (
    <BrowserRouter>
    <div>
     <Navar />
     <Slider />
     <Booking />
     <Footer />
     
      




    </div>
   </BrowserRouter>
  );
}

export default App;
