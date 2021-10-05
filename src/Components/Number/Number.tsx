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
            ? <div className={s.WarningMessage}>Enter values and press "SET"</div>
            : <div className={value === maxValue ? `${s.NumberMax} + ${s.Number}` : s.Number}>{value}</div>
    )

}