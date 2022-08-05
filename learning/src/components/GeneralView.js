import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Avatar from './Avatar';
import Message from './Message';
import SendBox from './SendBox';


const GeneralView = () => {


    const [messages,setMessage] = useState([])

    useEffect(
        ()=>{
            axios.get("http://localhost:1337/api/messages?filters[from][$in][1]=2&filters[from][$in][2]=1")
        .   then((data)=>setMessage(data.data.data))
        },[]
    )

    const sended = true

    return (
        <div className='banner-menu general-view'>
             <div className='top'>
                <Avatar url="https://z-p3-scontent.ffih1-2.fna.fbcdn.net/v/t1.6435-9/100771823_1127645820951085_2857457444429234176_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFqoggKI62NrLab9p55nNhb6x_vrLa_LR_rH--str8tHyWCbqtb59gmzb4Dz9Biszn3HKhH1HOCLwz_om0q2v0q&_nc_ohc=5X4wa9oF37sAX9LBZ6P&_nc_pt=5&_nc_ht=z-p3-scontent.ffih1-2.fna&oh=00_AT953cX_pVcOOsCp7JyL0MTEoxYvrOWptGY8jqfsGBpqqg&oe=6314E4E3"/>
                <span className='active-user'>Honey Tshikuz</span>
                <span className='more'><i className="fa-solid fa-ellipsis-vertical"></i></span>
            </div>

            <div className="discussion">

                {
                   messages.map((message)=>{
                    return(
                        <Message 
                            key={message.attributes.id} 
                            message={message.attributes.message}
                            date={"08:23"}
                            type={sended?"sended-message":"received-message"}
                            />

                    )
                   })
                   
                }

                
                
           </div>
           <SendBox /> 
            
        </div>
       
    );
};

export default GeneralView;