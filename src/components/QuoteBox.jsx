import quotes from "../quotes.json/";
import React from 'react';
import { useState } from 'react';

const colors = [
    "#845EC2",
    "#D65DB1",
    "#FF6F91",
    "#FF9671",
    "#FFC75F",
    "#F9F871"
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
                        <p><i class="fa-solid fa-quote-left" style={{color:color}}></i>{quotes[index].quote}</p>
                    </li>
                    <li>
                        <small>{quotes[index].author}</small>
                    </li>
                    <li>

                        <button onClick={change} style={{ background: color }} >
                            <i class="fa-solid fa-angle-right"></i>
                        </button>
                    </li>
                </ul>
            </div>
        </div >

    );
};

export default QuoteBox;