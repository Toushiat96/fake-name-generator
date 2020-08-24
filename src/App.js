import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const[users ,setUser] = useState([])

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=3')
      .then(response => response.json())
      .then(data => setUser(data.results))
  }, [])
   
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <h1 className="display-4">Fake Name Generator</h1>
           
          <div className="row col-md-4">
          {
              users.map(user =>   <RandomUser key={user.id.value} name={user.name.first + ' ' + user.name.last} image={user.picture.large} phone={user.phone} email={user.email} country={user.location.country}></RandomUser>)
            }
          </div>
          <div className="row mt-3">
            <div className="col-md-12">
              <button onClick={reload}  className='text-center btn btn-warning'>Refresh Page</button>
            </div>
          </div>
        </div>
     
      </header>
    </div>
  );
}
const reload =() =>window.location.reload()
function RandomUser(props){
  const userStyle ={
    border :'2px solid purple',
    borderRadius:'3px solid white',
    margin : '2px',
    width :'350px',
    height:'350px',
    marginLeft :'2px',
    float :'left'
  }
  return (
        <div style={userStyle}> 
    
    <div className="card bg-light">
      <img src={props.image} className="card-img-top" />
      <div className="card-body">
       <h5  className="card-title">{props.name}</h5>
      </div>
      <ul className="list-group list-group-flush">
         <li className="list-group-item  bg-dark">{props.email}</li>
         <li className="list-group-item  bg-dark">{props.phone}</li>
         <li className="list-group-item  bg-dark">{props.country}</li>

      </ul>
    </div>
    </div>
   

  )

}

export default App;
