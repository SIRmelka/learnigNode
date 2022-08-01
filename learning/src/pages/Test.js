import React, { useState } from 'react';
import Card from '../components/Card';
import Navbar from '../components/Navbar';

const Test = () => {

   const [post,setPost] =  useState(
        [
            {id:0,name:"Pascal Kas",view:41,like:5,comments:1,share:0,picture:"https://f.hellowork.com/blogdumoderateur/2021/12/devenir-developpeur-web-front-end.jpg"},
            {id:1,name:"Melka Ebot",view:932,like:9502,comments:658,share:74,picture:"https://img.freepik.com/photos-premium/developpeur-informatique-afro-americain-tapant-clavier-code-programmation-noir-orange-ecran-ordinateur-ordinateur-portable-interieur-bureau-contemporain-espace-copie_236854-24294.jpg"},
            {id:2,name:"Osee Mas",view:10,like:43,comments:42,share:3,picture:"https://img.freepik.com/photos-gratuite/developpeur-logiciels-noir-musulman-travaillant-son-equipe-commerciale-multiethnique-utilisant-ordinateur-tout-ecrivant-du-code-programmation-au-bureau-demarrage-moderne_530697-3995.jpg"},
            {id:3,name:"Paradox Mbuyi",view:130,like:40,comments:110,share:20,picture:"https://www.artofliving.org/sites/www.artofliving.org/files/unity2/blog_image/integrated-community-dev.jpg"},
            {id:4,name:"Joel TDz",view:543,like:1,comments:60,share:456,picture:"https://d2v9ipibika81v.cloudfront.net/uploads/sites/160/20190819_USAIDMarkGreen_01-en.jpg"},
            {id:5,name:"Pathy CJ",view:134,like:234,comments:364,share:130,picture:"https://vudaf.com/wp-content/uploads/2018/11/belle-fille-africaine.jpg"},
            {id:6,name:"Mira morisho",view:660,like:67,comments:56,share:140,picture:"https://previews.123rf.com/images/michaeljung/michaeljung1308/michaeljung130800489/21575955-coll%C3%A8ge-belle-fille-africaine-avec-les-bras-crois%C3%A9s.jpg"},
            {id:7,name:"Shilo Mavonga",view:56,like:34,comments:45,share:0,picture:"./assets/smile.jpg"},
            {id:8,name:"Samuel Biselele",view:440,like:76,comments:23,share:2,picture:"./assets/4884785.jpg"}
        ]
    )

    return (
        <div>

            <Navbar />
            <div className='body'>
                {post.map((thepost)=>{
                    return(
                        <Card 
                            name={thepost.name}
                            view={thepost.view}
                            picture={thepost.picture}
                            like={thepost.like}
                            comments ={thepost.comments}
                            share = {thepost.share}
                        />
                    );
                })}
           
            </div>
            <div className='loader'><p>Plus d'images</p><i class="fa-solid fa-spinner"></i></div>

        </div>
    );
};

export default Test;