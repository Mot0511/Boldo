import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Header from "./componets/header/header";
import Home from "./pages/home";
import Footer from "./componets/footer/footer";
import cl from "./pages/home.module.css";


const App = () => {
    return (
        <>
            <div className={'topBlock'}>
                <Header />
                <div className={cl.block1}>
                    <div>
                        <p className={cl.heading}>Save time by building <br /> fast with Boldo Template </p>
                        <p className={cl.description}>Funding handshake buyer business-to-business metrics iPad partnership.<br />
                            First mover advantage innovator success deployment non-disclosure.</p>
                        <div style={{display: 'flex'}}>
                            <button className={cl.buyBt}>Buy template</button>
                            <button className={cl.explore}>Explore</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={'content'}>
                <BrowserRouter>
                    <Routes>
                        <Route path={'/'} element={<Home />}></Route>
                    </Routes>
                </BrowserRouter>
                <Footer />
            </div>
        </>
    );
};

export default App;