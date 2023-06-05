import React from 'react';
import cl from './post.module.css'

const Post = ({id, title, category, date, person}) => {
    return (
        <div className={cl.post}>
            <img src={require(`../../img/post${id}.png`)} className={cl.img} alt=""/>
            <p className={cl.data}>{category}</p>
            <p className={cl.data}>{date}</p>
            <p className={cl.title}>{title}</p>
            <div className={cl.person}>
                <img src={require(`../../img/person${id}.png`)} alt=""/>
                <p>{person}</p>
            </div>
        </div>
    );
};

export default Post;