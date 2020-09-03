import React from "react";
import './Buttons.css'

type PropTypes = {
    doIncrement: () => void
    doReset: () => void
    changeButtonStyleInc: boolean
    changeButtonStyleReset: boolean
    toggleReset: boolean
    toggleInc: boolean
}

export const Buttons = ({doIncrement, doReset,changeButtonStyleInc,changeButtonStyleReset,toggleReset,toggleInc}: PropTypes) => {
    const changeButtonClassInc = changeButtonStyleInc ? 'buttonDisabled' : null;
    const changeButtonClassReset = changeButtonStyleReset ? 'buttonDisabled' : null;

    return (
        <div className='buttons'>
            <button
                className={`incButton ${changeButtonClassInc}`}
                onClick={doIncrement}  disabled={toggleInc}>Incr

            </button>
            <button
                className={`resetButton ${changeButtonClassReset}`}
                onClick={doReset} disabled={toggleReset}>Reset


            </button>
        </div>
    )
};