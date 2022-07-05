import React from 'react';
import Img from './assets/images/img.png'
import Component1 from './Component1';
import Component2 from './Component2';
import Component3 from './Component3';
import './assets/styles/style.sass'

const App = () => {
    return (
        <>
            <h1>Webpack and Babel</h1>
            <img src={Img} />
            <Component1 />
            <Component2 />
            <Component3 />
        </>
    )
}

export default App;
