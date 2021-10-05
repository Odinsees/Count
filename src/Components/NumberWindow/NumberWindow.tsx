import React from 'react';
import s from "./NumberWindow.module.css";
import {Number} from "../Number/Number";
import {Button} from "../Button/Button";

type PropsType = {
    maxValue: number
    startValue: number
    count:number
    countUpHandlerCallBack:()=>void
    countResetCallBack:()=>void
    error:boolean
    warning:boolean
}

export const NumberWindow: React.FC<PropsType> = (props) => {

    const countUpHandler = () => props.countUpHandlerCallBack()
    const countResetHandler = () => props.countResetCallBack()

    const isAddDisabled = props.count === props.maxValue || props.error || props.warning
    const isResetDisabled = props.count < props.maxValue || props.error || props.warning

    return (
            <div className={s.Content}>
                <div className={s.Number}>
                    {props.error
                        ?<div className={s.ErrorMessage}>ERROR! Incorrect value in Input!</div>
                        :<Number
                            warning={props.warning}
                            maxValue={props.maxValue}
                            value={props.count}
                        />
                    }
                </div>
                <div className={s.Button}>
                    <div className={s.addButton}>
                        <Button
                            title={"inc"}
                            callBack={countUpHandler}
                            disabled={isAddDisabled}
                        />
                    </div>
                    <div className={s.resetButtons}>
                        <Button
                            title={"reset"}
                            callBack={countResetHandler}
                            disabled={isResetDisabled}
                        />
                    </div>
                </div>
            </div>
    )
}