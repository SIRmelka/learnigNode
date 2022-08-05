import React from 'react';
import { BiSend } from 'react-icons/bi';
import { IoDocumentAttachOutline } from 'react-icons/io5';

const SendBox = () => {
    return (
        <div className='send-zone'>
               <div className='send-elements'>
                <span className='attach-file-icon'>
                <IoDocumentAttachOutline /> 
                </span>
                <textarea placeholder='Enter your message here'>
                   
                </textarea>
                <span className='send-boutton'>
                    <BiSend />
                </span>
               </div>
            </div>
    );
};

export default SendBox;