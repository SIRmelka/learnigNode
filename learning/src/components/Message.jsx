import axios from 'axios';
import React from 'react';

const Message = ({message,date,type}) => {



    return (
        <div>
            <div className={type}>
               {message}
               <br></br><span>{date}</span><span className='i'><i className="fa-solid fa-check-double"></i></span>
            </div>
        </div>
    );
};

export default Message;