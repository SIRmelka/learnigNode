import React from 'react';

const Avatar = (props) => {

    
    return (
        <div className='avatar'>
            <div className='profile-picture' style={{backgroundImage: `url(${props.url})`}} >
           
            </div>
        </div>
    );
};

export default Avatar;