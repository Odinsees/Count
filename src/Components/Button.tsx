import React from 'react';
import s from "./Button.module.css"


type PropsType = {
    callBack: () => void
    title: string
    disabled?: boolean
}

export const Button: React.FC<PropsType> = ({callBack, disabled, title}) => {

    return (
        <button
            className={!disabled ? s.button : s.disabled}
            disabled={disabled}
            onClick={callBack}
        >
            {title}
        </button>
    )
}

/*
{`${s.button}${!disabled?s.disabled:''}*/
