import React from "react";
import './Display.css'

type PropType = {
    count: number
    changeNumberStyle: boolean
}


export const Display = ({count,changeNumberStyle}: PropType) => {
    const changeNumberClass = changeNumberStyle ? 'numberFive' : 'number';
    return(
        <div className={changeNumberClass}>
            <span>{count}</span>
        </div>
    )
};