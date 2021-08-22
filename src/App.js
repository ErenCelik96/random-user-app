import React, { useState, useEffect } from 'react';
import './App.css';
import axios from "axios";
import emailPic from "./assets/email.svg"
import location from "./assets/location.svg"
import phonePic from "./assets/phone.svg"
import { data } from 'browserslist';

function App() {
  const [image, setImage] = useState([]);
  const [name, setName] = useState([]);
  const [email, setEmail] = useState([]);
  const [phone, setPhone] = useState([]);
  const [country, setCountry] = useState([]);
  const [age, setAge] = useState([]);
  const [regDate, setRegdate] = useState([]);
  const [refresh, setRefresh] = useState(true);

  useEffect(() => {
    axios.get('https://randomuser.me/api/').then(response => setImage(response.data.results[0].picture.large));
    axios.get('https://randomuser.me/api/').then(response => setName(response.data.results[0].name.first));
    axios.get('https://randomuser.me/api/').then(response => setEmail(response.data.results[0].email));
    axios.get('https://randomuser.me/api/').then(response => setPhone(response.data.results[0].phone));
    axios.get('https://randomuser.me/api/').then(response => setCountry(response.data.results[0].location.country));
    axios.get('https://randomuser.me/api/').then(response => setAge(response.data.results[0].dob.age));
    axios.get('https://randomuser.me/api/').then(response => setRegdate(response.data.results[0].registered.date));
  }, [refresh]);

  const setRef = () => {
    setRefresh(!refresh);
  };
 
  return (
    <div className="App">
     <div className="main">
      <div className="card">
        <div className="content">
          <img className="img" src={image}/>
          <h2>{name}</h2>
        </div>
        <div className="content">
          <img className="logo" src={emailPic}/>
          <p>{email}</p>
        </div>
        <div className="content">
          <img className="logo" src={phonePic}/>
          <p>{phone}</p>
        </div>
        <div className="content">
          <img className="logo" src={location}/>
          <p>{country}</p>
        </div>
          <p>Age: {age}</p><br/>
          <p>Register Date: {regDate}</p>
      </div>
      <button type="button" onClick={setRefresh}>Random User</button>
     </div>
    </div>
  );
}

export default App;