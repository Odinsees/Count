import React, {ChangeEvent} from 'react';
import s from "./Input.module.css";

type PropsType = {
    value: number
    callBack: (e: ChangeEvent<HTMLInputElement>) => void
}

export const Input: React.FC<PropsType> = ({value, callBack}) => {

    const OnChangeHandler = (e:ChangeEvent<HTMLInputElement>) =>{
        callBack(e)
    }

    return (
        <input
            //className={value === maxValue ? s.InputMax : ""}
            type="number"
            //pattern="^[ 0-9]+$"
            value={value}
            onChange={OnChangeHandler}
        />
    )

}