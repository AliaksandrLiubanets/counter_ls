import s from '../styles/styles.module.css'
import {useState} from 'react'

type DisplayCounterPropsType = {
    maxValue: number
    minValue: number
}

function DisplayCounter(props: DisplayCounterPropsType) {

    const [number, setNumber] = useState(0)
    const Increment = () => {
        if (number < props.maxValue) {
            setNumber(number + 1)
        }

    }
    const Reset = () => {
        setNumber(0)
    }

    const incStyle = `${number === props.maxValue ? s.window__small__buttons_inc : undefined}`
    const resetStyle = `${number === props.minValue ? s.window__small__buttons_reset : undefined}`
    const disableInc = number === props.maxValue ? true : false
    const disableReset = number === props.minValue ? true : false


    return <div className={s.window__frame}>
        <div className={s.window__large}>
            <div className={s.window__large__counter}>
                <div className={s.window__large__number}>{number}</div>
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