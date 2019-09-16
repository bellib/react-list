import React from 'react'; 
import './App.css';
import Contact from './components/contacts/Contact';
import Navbar from './components/navbar/Navbar';
import Users from './components/users/Users';

function App() {

  let habib = 'my first' ;
  let Bellia = 'My name'
  return (
    <div className="App">
      <Navbar title="this is title from"/> 
      <div className="container mt-2">
{/*       <Navbar title="this is title from"/> 
      <h1>{habib}</h1>
      <h1>{Bellia}</h1>
      <Contact name="Habib Bellia" tel="****" />
      <Contact />
      <a href="" className="btn btn-primary">Salam</a> */}
      <Users />
      </div>
    </div>
  );
}

export default App;
