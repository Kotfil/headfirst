import React, {useState} from "react";
import './App.css'
import {Buttons} from "../Buttons/Buttons";
import {Display} from "../Display/Display";

export const App = () => {
    const [count, setCount] = useState(0);
    const [toggleInc, setToggleInc] = useState(false);
    const [toggleReset, setToggleReset] = useState(true);
    const [changeNumberStyle, setChangeNumberStyle] = useState(false);
    const [changeButtonStyleInc, setChangeButtonStyleInc] = useState(false);
    const [changeButtonStyleReset, setChangeButtonStyleReset] = useState(false);

    const doIncrement = () => {
        if (count > -1 ) {
            setCount(count + 1);
            setToggleReset(false);
            setChangeButtonStyleReset(false);
        }
        if (count === 4) {
                setToggleInc(true);
                setChangeNumberStyle(true);
                setChangeButtonStyleInc(true);
        }
    };
    const doReset = () => {
        setCount(0);
        setToggleInc(false);
        setToggleReset(true);
        setChangeNumberStyle(false);
        setChangeButtonStyleInc(false);
        setChangeButtonStyleReset(true)
    };

    return (
        <div className={'app'}>
            <div className={'container'}>
                <Display
                    count={count}
                    changeNumberStyle={changeNumberStyle}/>
                <Buttons
                    doIncrement={doIncrement}
                    doReset={doReset}
                    changeButtonStyleInc={changeButtonStyleInc}
                    changeButtonStyleReset={changeButtonStyleReset}
                    toggleInc={toggleInc}
                    toggleReset={toggleReset}
                   />
            </div>
        </div>
    )
};