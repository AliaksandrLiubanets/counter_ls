import s from '../styles/styles.module.css'
import {useEffect, useState} from 'react'

type DisplayCounterPropsType = {
    maxValue: number
    startValue: number
}

function DisplayCounter(props: DisplayCounterPropsType) {

    const [number, setNumber] = useState<number>(props.startValue)

    useEffect(() => {
        setNumber(props.startValue)
    }, [props.startValue])


    const Increment = () => {
        if (number < props.maxValue) {
            setNumber(number + 1)
        }
    }
    const Reset = () => {
        setNumber(props.startValue)
    }

    const numStyle = `${number === props.maxValue ? s.window__counter__number_red : s.window__counter__number}`
    const incStyle = `${number === props.maxValue ? s.window__small__buttons_inc : undefined}`
    const resetStyle = `${number === props.startValue ? s.window__small__buttons_reset : undefined}`
    const disableInc = number === props.maxValue
    const disableReset = number === props.startValue ? true : false


    return <div className={s.window__frame}>
        <div className={s.window__large}>
            <div className={s.window__counter}>
                <div className={numStyle}>{number}</div>
            </div>

        </div>
        <div className={s.window__small}>
            <div className={s.window__small__buttons}>
                <div ><button className={incStyle} disabled={disableInc} onClick={Increment}>inc</button></div>
                <div><button className={resetStyle} disabled={disableReset} onClick={Reset}>reset</button></div>
            </div>
        </div>
    </div>
}
export default DisplayCounter