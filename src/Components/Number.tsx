import React from 'react';
import s from "./Number.module.css";

type PropsType = {
    maxValue:number
    value: number
}

export const Number: React.FC<PropsType> = ({value,maxValue}) => {
    return (
        <div className={value === maxValue ? `${s.NumberMax} + ${s.Number}` : s.Number}>{value}</div>
    )

}