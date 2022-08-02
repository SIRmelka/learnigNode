import React from 'react';
import ActionButtons from './ActionButtons';
import Avatar from './Avatar';

const PersonalMenu = () => {
    return (
            <div className='banner-menu personal-menu'>
                <div className='top'>
                    <Avatar/>
                    <ActionButtons/>
                </div>
            </div>
    
    );
};

export default PersonalMenu;