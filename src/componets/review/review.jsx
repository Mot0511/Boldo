import React from 'react';
import cl from './review.module.css'

const Review = ({text, image, name, role}) => {
    return (
        <div className={cl.review}>
            <div className={cl.text}>
                <p>{text}</p>
            </div>

            <div className={cl.person}>
                <img src={image} alt=""/>
                <div>
                    <span className={cl.name}>{name}</span>
                    <span className={cl.role}>{role}</span>
                </div>
            </div>
        </div>
    );
};

export default Review;