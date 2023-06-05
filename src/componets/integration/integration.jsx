import React from 'react';
import cl from './integration.module.css'

const Integration = ({heading, desc, id}) => {
    return (
        <div className={cl.integration}>
            <img src={require(`../../img/integration${id}.png`)} alt=""/>
            <p>{heading}</p>
            <p>{desc}</p>
            <button className={cl.explore}>Explore page ›</button>
        </div>
    );
};

export default Integration;