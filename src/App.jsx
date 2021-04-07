import React, { useState } from 'react';

const App = () => {

    const [brightness, setBrightness] = useState(100);
    const [grayscale, setGrayscale] = useState(100);
    const [saturation, setSaturation] = useState(100);
    const [blur, setBlur] = useState(100);
    const [sepia, setSepia] = useState(100);
    const [invert, setInvert] = useState(100);

    const [filterProp, setFilter] = useState("brightness(100%)");

    const changeBrightness = (event) => {
        setBrightness(event.target.value);
        setFilter(`brightness(${brightness}%)`);
    }

    const changeGrayscale = (event) => {
        setGrayscale(event.target.value);
        setFilter(`grayscale(${grayscale}%)`);
    }

    const changeSaturation = (event) => {
        setSaturation(event.target.value);
        setFilter(`saturate(${saturation})`);
    }

    const changeBlur = (event) => {
        setBlur(event.target.value);
        setFilter(`blur(${blur}px)`);
    }

    const changeSepia = (event) => {
        setSepia(event.target.value);
        setFilter(`sepia(${sepia}%)`);
    }

    const changeInvert = (event) => {
        setInvert(event.target.value);
        setFilter(`invert(${invert}%)`);
    }

    return(
        <React.Fragment>
            <img 
                style={{
                    filter: filterProp
                }}

                src="https://cdn.pixabay.com/photo/2021/02/24/09/51/magical-6046020__340.jpg" alt="image" 
            />

            <div>
                <h2>
                    Brightness: <input type="range" onChange={changeBrightness}/><br/>
                    Grayscale: <input type="range" onChange={changeGrayscale}/><br/>
                    Saturation: <input type="range" onChange={changeSaturation}/><br/>
                    Blur: <input type="range" onChange={changeBlur}/><br/>
                    Sepia: <input type="range" onChange={changeSepia}/><br/>
                    Invert: <input type="range" onChange={changeInvert}/><br/>
                </h2>
            </div>
        </React.Fragment>
    );
}   

export default App;