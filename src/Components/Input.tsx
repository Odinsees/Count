import React, {ChangeEvent} from 'react';
import s from "./Input.module.css";

type PropsType = {
    maxValue:number
    value: number
    callBack: (e: ChangeEvent<HTMLInputElement>) => void
}

export const Input: React.FC<PropsType> = ({value, callBack,maxValue}) => {
    return (
        <input
            className={value === maxValue ? s.InputMax : ""}
            value={value}
            onChange={callBack}
            disabled={true}
        />
    )

}