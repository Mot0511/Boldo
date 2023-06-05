import React, {useEffect, useMemo, useState} from 'react';
import cl from './question.module.css'
import $ from 'jquery'

const Question = ({q, answer, id}) => {
    const [isShow, setIsShow] = useState(false)
    const [image, setImage] = useState(require('../../img/check2.png'))
    const getAnswer = () => {
        $('#'+id).toggle()
        if (isShow){
            setImage(require('../../img/check2.png'))
            setIsShow(false)
        } else {
            setImage(require('../../img/check.png'))
            setIsShow(true)
        }
    }
    return (
        <div>
            <div className={cl.question}>
                <p>{q}</p>
                <button onClick={getAnswer} style={{backgroundImage: `url(${image})`}} className={cl.show}></button>
            </div>
            <div id={id} className={cl.answer}>
                <p>{answer}</p>
            </div>
        </div>
    );
};

export default Question;