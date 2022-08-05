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
  
    
  
  
  

  const url="https://pbs.twimg.com/profile_images/1365944652877230081/2T_A6w7B_400x400.jpg";
  
  const [contacts,setContacts] = useState([
    {id:0,name:"Melki Botale",field:"Devellopeur web",image:"https://media.gettyimages.com/photos/harley-quinn-from-suicide-squad-figurine-displayed-at-comiccon-2016-picture-id578138896?s=612x612"},
    {id:1,name:"Marina Pholo",field:"Spécialiste en marketting digital",image:"https://z-p3-scontent.ffih1-2.fna.fbcdn.net/v/t1.6435-9/116220832_3105838329503352_8016019698923076628_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeF0AKEMUvyDcRQLqomv4CgF6NkxGbwPNP3o2TEZvA80_X0LAvFPxdFqmPF9uqTV44Ky8UjU1tOIXeA0bcZYEj5q&_nc_ohc=Ytzp6R34QOoAX_NGx6f&_nc_pt=5&_nc_ht=z-p3-scontent.ffih1-2.fna&oh=00_AT_xwMTM4WBjrApPToRCo1xJlBYoe7IzlUuVyxjtXxlP9w&oe=630EA274"},
    {id:2,name:"Amos Bafuna",field:"Devellopeur web",image:"https://z-p3-scontent.ffih1-2.fna.fbcdn.net/v/t1.6435-9/188883008_1922762137890675_1697328021083891565_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeE6cU1Y9zD6OQWZMfOGxvu-KjIN6WKTEosqMg3pYpMSizOZTnbouS1uGCryBNmkbTQwj5fYI12P5mG0sQ9PE1Dl&_nc_ohc=3MdrTJlzrogAX8AYgq9&tn=lmF5kZOYx-Eeq3sL&_nc_pt=5&_nc_ht=z-p3-scontent.ffih1-2.fna&oh=00_AT_sPudwMImCywjNOla95IcziyEJ4wQ2p5D6TjjhlhOZ0w&oe=631189A1"},
    {id:3,name:"Pathy Mavuba",field:"Devellopeur web",image:"https://z-p3-scontent.ffih1-2.fna.fbcdn.net/v/t39.30808-6/248323461_1659608814385707_2030177218253861613_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=174925&_nc_eui2=AeFNVw6ZyuHbQ0S4QIh769O-ltsHckPrX-uW2wdyQ-tf60qxtP_ErCH_GcZw_z9Jxe_1skRsU9N6KBdul63ThuQ-&_nc_ohc=d1mInIQcHaEAX-dQesl&_nc_pt=5&_nc_zt=23&_nc_ht=z-p3-scontent.ffih1-2.fna&oh=00_AT9yyUUEY-skBU9aNZ8BjNeqby0gzvTaDWZAOM24KsaOiw&oe=62EF16A6"},
    {id:4,name:"Shilo Mavonga",field:"Devellopeur web",image:"https://z-p3-scontent.ffih1-2.fna.fbcdn.net/v/t1.6435-9/178472411_473376887324547_5387358260744579609_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHOUIrQ0f8megq8fHitbsGuZYL2ZWIFV1ZlgvZlYgVXVtpfeoQrZHytHd9asNm9GKpgwqI17mWiIyexpZhUxXo1&_nc_ohc=8iDOrp662LwAX-ehUnm&_nc_pt=5&_nc_ht=z-p3-scontent.ffih1-2.fna&oh=00_AT8ZxKDX4lT2AqB7Gl1zwfN0V6YjvkvZWifS9Lb1m1yH0Q&oe=63100CE3"},
    {id:5,name:"Mira Morisho",field:"Devellopeuse Web", image:"https://z-p3-scontent.ffih1-2.fna.fbcdn.net/v/t39.30808-6/293714999_1254686965337290_7102004851832313334_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeG4P-Dp5JBTGvhht1x3EY9v1ZBjGUBirsLVkGMZQGKuwvg8lp-3Ep4-JmOtGj8ZwFZRUbYRGdSSih6EfKAv2M5o&_nc_ohc=mup9vLi2K7cAX9sdqGG&_nc_pt=5&_nc_zt=23&_nc_ht=z-p3-scontent.ffih1-2.fna&oh=00_AT_DOcLLzTMrIjcD7_7OOVzTBXyrBkidAy2C4vqae9VtEw&oe=62F058FA"},
    {id:6,name:"Trigo Yodila", field:"Devellopeur Web", image:"https://z-p3-scontent.ffih1-2.fna.fbcdn.net/v/t1.6435-9/78071537_2404445993150268_7350952727444193280_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=174925&_nc_eui2=AeHQyRT4SDwZW6OwIy1C_VsRR2RuxTqdnDtHZG7FOp2cOzeLLYDhOAbOAGJQmVkPjQqnqH2yWyWW2Uf1rvsMRlpS&_nc_ohc=o5ZMIewsfY8AX-kcbEd&_nc_pt=5&_nc_ht=z-p3-scontent.ffih1-2.fna&oh=00_AT_HAIDmZii5hWC-gw_bLGH2o9KTU68-U4cgrOfCE6h03w&oe=630F7B6Bgit s"}
  ])
  
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