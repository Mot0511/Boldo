import React, {useEffect} from 'react';
import cl from './header.module.css'
import {Link} from "react-router-dom";
import inView from "in-view/src/in-view";
import $ from 'jquery'

const Header = () => {

    const mobileMenu = () => {
        $('#mobileMenuList').toggle(100)
    }

    return (
        <div className={cl.header}>
            <div className={cl.heading}>
                <img src={require('../../img/Logo.png')} alt=""/>
            </div>
            {
                window.innerWidth >= 1300
                    ? <div className={cl.menu}>
                        <a href="">Product</a>
                        <a href="">Services</a>
                        <a href="">About</a>
                        <button>Log In</button>
                    </div>
                    : <><div className={cl.mobileMenu}>
                        <div>
                            <button onClick={mobileMenu} className={cl.gamburger} style={{backgroundImage: `url(${require('../../img/menu.png')})`}}></button>
                        </div>

                    </div>
                    <div id={'mobileMenuList'} className={cl.mobileMenuList}>
                    <a href="">Product</a><br />
                    <a href="">Services</a><br />
                    <a href="">About</a><br />
                    <button>Log In</button>
                </div></>
            }


        </div>
    );
};

export default Header;