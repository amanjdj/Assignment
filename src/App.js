
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';

function App() {


  function nameValidate(text) {
    console.log(text);
      var regex = /^[a-zA-Z ]{1,51}$/;
      return regex.test(text);
  }

  const validateUserName=(text)=>{
    var regex = /^[a-zA-Z ]{5,51}$/;
      return regex.test(text);
  };
  const validatePassword=(text)=>{
    var regularExpression = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,51}$/;
    return regularExpression.test(text);
  };
function resetFields(){
  setFirstName("");
  setLastName("");
  setPhone("");
  setEmail("");
  setUsername("");
  setPassword("");
}


  const [firstName,setFirstName]=useState("");
  const [lastName,setLastName]=useState("");
  const [phone,setPhone]=useState("");
  const [email,setEmail]=useState("");
  const [username,setUsername]=useState("");
  const [password,setPassword]=useState("");
  const handleSubmit=(event)=>{
    event.preventDefault();
    if(nameValidate(firstName)===false){
      alert("Invalid first name")
    }
    if(nameValidate(lastName)===false){
      alert("Invalid last name")
    }
    if(phone.length!==10){
      alert("invalid number");
    }

    if(validateUserName(username)===false){
      alert("invalid username")
    }
    if(validatePassword(password)===false){
      alert("invalid password");
    }
    else{
      alert("Successfully Signed Up")
    }

  }




  return (
    <div className="App">
      <form action='/' className='form' onSubmit={handleSubmit}>
        <h3>Sign Up</h3>
        <div className="mb-3">
          <label>First name</label>
          <input
            type="text"
            className="form-control"
            placeholder="First name"
            name='Fname'
            value={firstName}
            onChange={(e)=>{setFirstName(e.target.value)}}
          />
        </div>
        <div className="mb-3">
          <label>Last name</label>
          <input type="text" className="form-control" placeholder="Last name" name='Lname' value={lastName} onChange={(e)=>{setLastName(e.target.value)}}/>
        </div>
        <div className='mb-3'>
          <label>Phone Number</label>
          <input type="text" className='form-control' placeholder='Phone' name='phone' value={phone} onChange={(e)=>{setPhone(e.target.value)}}/>
        </div>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
          name='email'
          value={email}
          onChange={(e)=>{setEmail(e.target.value)}}
          />
        </div>
        <div className="mb-3">
          <label>Username</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Username"
          name='Username'
          value={username}
          onChange={(e)=>{setUsername(e.target.value)}}
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
          name='password'
          value={password}
          onChange={(e)=>{setPassword(e.target.value)}}
          />
        </div>
        <div className="d-grid mb-3">
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
          
        </div>

      </form>
      <div className='d-grid'>
        <button className='btn btn-primary' onClick={resetFields}>Reset</button>
        </div>
    </div>
  );
}

export default App;


