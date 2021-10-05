import React from 'react';
import s from "./Number.module.css";

type PropsType = {
    maxValue: number
    value: number
    warning: boolean
}

export const Number: React.FC<PropsType> = ({value, maxValue, warning}) => {
    return (
        warning
            ? <div className={s.WarningMessage}>enter values and press 'set'</div>
            : <div className={value === maxValue ? `${s.NumberMax} + ${s.Number}` : s.Number}>{value}</div>
    )

}