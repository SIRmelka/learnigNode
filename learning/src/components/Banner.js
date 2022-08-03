import React from 'react';
import GeneralView from './GeneralView';
import PersonalMenu from './PersonalMenu';



const Banner = () => {
    return (
        <div>
            <div className='body'>
                <div className='banner'>
                <PersonalMenu/>
                <GeneralView/>
                </div>
            </div>
        </div>
    );
};

export default Banner;