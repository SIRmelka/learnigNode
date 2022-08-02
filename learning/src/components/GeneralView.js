import React from 'react';
import Avatar from './Avatar';

const GeneralView = () => {
    return (
        <div className='banner-menu general-view'>
             <div className='top'>
                <Avatar/>
        
                <span className='more'><i className="fa-solid fa-ellipsis-vertical"></i></span>
           
              
            </div>
        </div>
       
    );
};

export default GeneralView;