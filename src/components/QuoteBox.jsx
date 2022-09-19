import quotes from "../quotes.json/";
import React from 'react';
import { useState } from 'react';

const colors = [
    "rgb(249, 72, 146)", "rgb(17, 43, 60)","rgb(89, 6, 150)",
    "rgb(32, 83, 117)", "rgb(255, 127, 63)","rgb(210, 0, 26)",
    "rgb(251, 223, 7)", "rgb(137, 207, 253)"
];

const QuoteBox = () => {
    ///funcion para rabndonizar colores
    const randomColor = Math.floor(Math.random() * colors.length);

    const color = colors[randomColor];

    document.body.style = `background: ${color}`;//apliying color in app 

    const seed = Math.floor(Math.random() * quotes.length)//random number that's why is called "seed" 

    const [index, setIndex] = useState(seed)//state


    //funtion that change the random quotes
    const change = () => {
        const randonize = Math.floor(Math.random() * seed)
        setIndex(randonize)
    }


    //////////////////////OUTPUT-->/////////////////////////////////////////////////////////////////////
    return (
        <div className="app" style={{ background: color }}>
            <div className='quoteCard' style={{ color: color }} >
                <ul>
                    <li>
                        <p><i className="fa-solid fa-quote-left" style={{ color: color }}></i>  {quotes[index].quote}</p>
                    </li>
                    <li>
                        <small>{quotes[index].author}</small>
                    </li>
                    <li>

                        <button onClick={change} style={{ background: color }} >
                            <i className="fa-solid fa-angle-right"></i>
                        </button>
                    </li>
                </ul>
            </div>
        </div >

    );
};

export default QuoteBox;