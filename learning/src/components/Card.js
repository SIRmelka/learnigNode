import React, { useState } from 'react';
import Test from '../pages/Test';

const Card = (props) => {

    const [like,setLike] = useState(false)


    const liker = () =>{
        setLike(!like)
    }
   


    return (
        <div className='card-item'>
        <div className='card-header'>
            <p className='card-info'>{props.name}</p>
            <p className='card-view'><i className="fa-regular fa-eye"></i> {props.view+" K"}</p>
        </div>
        <div>
            <img className='card-image' src={props.picture} alt="profile"></img>
        </div>
        <div className='card-footer'>
            <span onClick={props.liker}>{props.like}<i className={props.isLiked?"liked fa-solid fa-heart":"fa-regular fa-heart"}></i></span>
            <span>{props.comments} <i className="fa-solid fa-comment-dots"></i></span>
            <span>{props.share} <i className="fa-solid fa-share"></i></span>
        </div>
    </div>
    );
};

export default Card;