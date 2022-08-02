import React from 'react';
import ActionButtons from './ActionButtons';
import Avatar from './Avatar';

const PersonalMenu = () => {
    return (
        <div className='top personal'>
            <Avatar/>
            <ActionButtons/>
        </div>
    );
};

export default PersonalMenu;