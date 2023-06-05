import React from 'react';
import cl from './footer.module.css'

const Footer = () => {
    return (
        <div className={cl.footer}>
            <div>
                <img src={require('../../img/logo2.png')} alt=""/>
                <p>Social media validation business model <br/> canvas graphical user interface launch <br/> party creative facebook iPad twitter.</p>
                <p className={cl.rights}>All rights reserved.</p>
            </div>
            <div className={cl.links}>
                <p>Landings</p>
                <a href="">Home</a><br/>
                <a href="">Products</a><br/>
                <a href="">Services</a><br/>
            </div>
            <div className={cl.links}>
                <p>Company</p>
                <a href="">Home</a><br/>
                <a href="">Careers</a><br/>
                <a href="">Services</a><br/>
            </div>
            <div className={cl.links}>
                <p>Resources</p>
                <a href="">Blog</a><br/>
                <a href="">Products</a><br/>
                <a href="">Services</a><br/>
            </div>
        </div>
    );
};

export default Footer;