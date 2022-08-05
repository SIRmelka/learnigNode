import axios from 'axios';
import React from 'react';
import Avatar from './Avatar';
import Message from './Message';
import SendBox from './SendBox';


const GeneralView = () => {
    
    return (
        <div className='banner-menu general-view'>
             <div className='top'>
                <Avatar url="https://z-p3-scontent.ffih1-2.fna.fbcdn.net/v/t39.30808-6/291026997_5262330957189980_2751945388083315861_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeH2IIuHdrcgrO3O1YzbjF50fcGym8sIaYp9wbKbywhpinPgEPAk_i08OJnPcly8xlAiNoMp-QpU_C0Xb3dPeMMw&_nc_ohc=Rj6M8f6Ge8UAX_EUlDX&_nc_pt=5&_nc_zt=23&_nc_ht=z-p3-scontent.ffih1-2.fna&oh=00_AT___YujUE7bXTEKJ-OqYbXAXlykzTkgPsR1pr_HvDo4LQ&oe=62EEB933"/>
                <span className='active-user'>Almerinda ngalu</span>
                <span className='more'><i className="fa-solid fa-ellipsis-vertical"></i></span>
            </div>

            <div className="discussion">

                <Message 
                    key={1}
                    message={"salut comment"} 
                    type={"received-message"} 
                    date={"7:32"}
                />
                  <Message 
                    key={2}
                    message={"bien bro"} 
                    type={"sended-message"} 
                    date={"7:45"}
                />
                <Message 
                    key={3}
                    message={"tu as finis avec les props?"} 
                    type={"received-message"} 
                    date={"7:46"}
                />
                 <Message 
                    key={4}
                    message={"non mais bientôt, je n'arrives toujours pas à faire la différence entre props et state"} 
                    type={"sended-message"} 
                    date={"7:50"}
                />
        
                
           </div>
           <SendBox /> 
            
        </div>
       
    );
};

export default GeneralView;