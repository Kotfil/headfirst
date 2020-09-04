import React from "react";
import './Buttons.module.css'


const Buttons = ({changeCount,resetCount,count}) => {
    return (
        <div className={'buttons'}>
            <button  type="button" className="btn btn-info" disabled={count === 5} onClick={changeCount}>Inc</button>
            <button type="button" className="btn btn-info" disabled={count === 0} onClick={resetCount}>Reset</button>
        </div>
    )
};

export default Buttons