import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Contact from './Contact';
import SearchBar from './SearchBar';

const Contacts = () => {

  const [users,SetUser] = useState([])

  useEffect(
    ()=>{
       axios.get("http://localhost:1337/api/learners")
      .then((data)=>SetUser(data.data.data))
    },[]
  )
  
      const addMessage= () => {
      axios.post("http://localhost:1337/api/learners", {
         
            "data": {
              "name": "karmel",
              "field": "Dévellopeur web",
              "picture": "asd"
            }
        }).then(reponse => console.log(reponse))
      } 
  
  return (
        <>
        <SearchBar />
        <div className='contacts'>
          {
           
            users.map((contact)=>{
              return(
                <Contact key={contact.attributes.id} image={contact.attributes.picture} username={contact.attributes.name} option={contact.attributes.field}/>
              )
            })
          }
          
         
        
        </div></>
    );
};

export default Contacts;