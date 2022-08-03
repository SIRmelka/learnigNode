import React from 'react';
import ActionButtons from './ActionButtons';
import Avatar from './Avatar';
import Contacts from './Contacts';

const PersonalMenu = () => {
    return (
            <div className='banner-menu personal-menu'>
                <div className='top'>
                    <Avatar url="https://z-p3-scontent.ffih1-2.fna.fbcdn.net/v/t39.30808-6/291026997_5262330957189980_2751945388083315861_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeH2IIuHdrcgrO3O1YzbjF50fcGym8sIaYp9wbKbywhpinPgEPAk_i08OJnPcly8xlAiNoMp-QpU_C0Xb3dPeMMw&_nc_ohc=Rj6M8f6Ge8UAX_EUlDX&_nc_pt=5&_nc_zt=23&_nc_ht=z-p3-scontent.ffih1-2.fna&oh=00_AT___YujUE7bXTEKJ-OqYbXAXlykzTkgPsR1pr_HvDo4LQ&oe=62EEB933"/>
                    <span>Votre cercle</span>
                    <ActionButtons/>
                </div>
                    <Contacts />
            </div>
    
    );
};

export default PersonalMenu;