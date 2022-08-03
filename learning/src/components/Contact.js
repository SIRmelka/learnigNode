import React from 'react';
import Avatar from './Avatar';

const Contact = (props) => {

    return (
        <div className='contact'>
            <Avatar url={props.image}/><p>{props.username}<br></br><span>{props.option}</span></p>
            <div><i class="fa-solid fa-ellipsis"></i></div>
        </div>
    );
};

export default Contact;