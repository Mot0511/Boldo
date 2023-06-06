import React, {useEffect} from 'react';
import cl from './home.module.css'
import Integration from "../componets/integration/integration";
import Review from "../componets/review/review";
import $ from 'jquery';
import Question from "../componets/question/question";
import Post from "../componets/post/post";
import inView from "in-view/src/in-view";


const Home = () => {
    const leftAnim = (element) => {
        $(element).css({left: '0', opacity: '1'}, 0)
    }
    const rightAnim = (element) => {
        $(element).css({right: '0', opacity: '1'}, 0)
    }
    const topAnim = (element) => {
        $(element).css({top: '0', opacity: '1'}, 0)
    }
    useEffect(() => {
        console.log((cl.block5));
        $('#tab1').hover(() => {
            $('#tab1 p').css({'color': 'white'})
        }, () => {
            $('#tab1 p').css({'color': 'black'})
        })
        $('#tab2').hover(() => {
            $('#tab2 p').css({'color': 'white'})
        }, () => {
            $('#tab2 p').css({'color': 'black'})
        })
        $('#tab3').hover(() => {
            $('#tab3 p').css({'color': 'white'})
        }, () => {
            $('#tab3 p').css({'color': 'black'})
        })

        inView('.'+cl.block1+' div').once('enter', () => {
            topAnim('.'+cl.block1+' div')
        })
        inView('.'+cl.integrations).once('enter', () => {
            topAnim('.'+cl.integrations)
        })
        inView('#block31').once('enter', () => {
            leftAnim('#block31')
        })
        inView('#block32').once('enter', () => {
            $('#block32').css({marginRight: '0', opacity: '1'}, 0)
        })
        inView('#block5').once('enter', () => {
            leftAnim('#block5 img')
            rightAnim('#block5 div')
        })
        inView('.'+cl.someTextDown).once('enter', () => {
            topAnim('.'+cl.someTextDown)
        })
        inView('.'+cl.block6).once('enter', () => {
            topAnim('.'+cl.block6)
        })
        inView('#email').once('enter', () => {
            leftAnim('#email')
        })


    }, [])

    const left = () => {
        $('#carouselContent').animate({left: '-=360px'}, 100)
    }
    const right = () => {
        $('#carouselContent').animate({left: '+=360px'}, 100)
    }

    return (
        <div>

            <div className={cl.main}>
                <div className={cl.block2}>
                    <p className={cl.headingBlock}>
                        Handshake infographic mass market <br /> crowdfunding iteration.
                    </p>
                    <div className={cl.integrations}>
                        <Integration heading={'Cool feature title'} desc={'Learning curve network effects return on investment.'} id={'1'} />
                        <Integration heading={'Even cooler feature'} desc={'Learning curve network effects return on investment.'} id={'2'} />
                        <Integration heading={'Cool feature title'} desc={'Learning curve network effects return on investment.'} id={'3'} />
                    </div>
                </div>
                <div className={cl.block3} id={'block31'}>
                    <img src={require('../img/man.png')} alt=""/>
                    <div>
                        <p>We connect our customers <br/> with the best, and help them <br/> keep up-and stay open.</p>
                        <ul>
                            <li>We connect our customers with the best.</li>
                            <li>Advisor success customer launch party.</li>
                            <li>Business-to-consumer long tail.</li>
                            <button>Start now</button>
                        </ul>
                    </div>
                </div>
                <div className={cl.block3} id={'block32'} style={{marginRight: '-300px', left: '0'}}>
                    <div>
                        <p>We connect our customers <br/> with the best, and help them <br/> keep up-and stay open.</p>
                        <div className={cl.tab} id={'tab1'}>
                            <p className={cl.tabP}>We connect our customers with the best.</p>
                        </div>
                        <div className={cl.tab} id={'tab2'}>
                            <p className={cl.tabP}>Advisor success customer launch party.</p>
                        </div>
                        <div className={cl.tab} id={'tab3'}>
                            <p className={cl.tabP}>Business-to-consumer long tail.</p>
                        </div>
                    </div>
                    <img src={require('../img/woman.png')} alt=""/>
                </div>

            </div>
            <div className={cl.block4}>
                <p className={cl.block4H}>An enterprise template to ramp <br /> up your company website</p>
                <div className={cl.reviews}>
                    <div id={'carouselView'} className={cl.carouselView}>
                        <div id={'carouselContent'} className={cl.carouselContent}>
                            <Review text={'“Buyer buzz partner network disruptive non-disclosure agreement business”'} name={'Albus Dumbledore'} image={require('../img/avatar.png')} role={'Manager @ Howarts'}/>
                            <Review text={'“Learning curve infrastructure value proposition advisor strategy user experience hypotheses investor.”'} name={'Severus Snape'} image={require('../img/avatar2.png')} role={'Manager @ Slytherin'}/>
                            <Review text={'“Learning curve infrastructure value proposition advisor strategy user experience hypotheses investor.”'} name={'Severus Snape'} image={require('../img/avatar2.png')} role={'Manager @ Slytherin'}/>
                            <Review text={'“Release facebook responsive web design business model canvas seed money monetization.”'} name={'Harry Potter'} image={require('../img/avatar3.png')} role={'Team Leader @ Gryffindor'} />
                            <Review text={'“Release facebook responsive web design business model canvas seed money monetization.”'} name={'Harry Potter'} image={require('../img/avatar3.png')} role={'Team Leader @ Gryffindor'} />
                            <Review text={'“Release facebook responsive web design business model canvas seed money monetization.”'} name={'Harry Potter'} image={require('../img/avatar3.png')} role={'Team Leader @ Gryffindor'} />
                        </div>
                    </div>
                </div>
                <div className={cl.controls}>
                    <button onClick={right}>‹</button>
                    <button onClick={left}>›</button>
                </div>
            </div>
            <div className={cl.main}>
                <div className={cl.block5} id={'block5'}>
                    <img src={require('../img/room.png')} alt=""/>
                    <div>
                        <Question q={'We connect our customers with the best?'} id={1} answer={'Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer '} />
                        <Question q={'Android research & development rockstar?'} id={2} answer={'Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer '} />
                    </div>
                </div>
                <p className={cl.someTextDown}>We connect our customers with the best, and help them keep up-and <br/> stay open.</p>
                <div className={cl.block6}>
                    <p className={cl.someTextDown2}>Value proposition accelerator product <br/> management venture</p>
                    <div className={cl.posts}>
                        <Post id={'1'} category={'Category'} date={'November 22, 2021'} title={'Pitch termsheet backing validation focus release.'} person={'Chandler Bing'} />
                        <Post id={'2'} category={'Category'} date={'November 22, 2021'} title={'Seed round direct mailing non-disclosure agreement graphical user interface rockstar.'} person={'Monica Geller'} />
                        <Post id={'3'} category={'Category'} date={'November 22, 2021'} title={'Beta prototype sales iPad gen-z marketing network effects value proposition'} person={'Rachel Green'} />
                    </div>
                </div>
            </div>
            <center><button className={cl.loadmore}>Load more</button></center>
            <div className={cl.block7}>
                <div className={cl.email} id={'email'}>
                    <p>An enterprise template to ramp <br/> up your company website</p>
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                        <input type="text" className={cl.input} placeholder={'Your email address'} />
                        <button>Start now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;