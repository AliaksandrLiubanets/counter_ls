import s from '../styles/styles.module.css'
import {useEffect, useState} from 'react'

type DisplayCounterPropsType = {
    maxValue: number
    startValue: number
    editMode: boolean
}

function DisplayCounter(props: DisplayCounterPropsType) {

    const [number, setNumber] = useState<number>(props.startValue)

    useEffect(() => {
        setNumber(props.startValue)
    }, [props.startValue])


    const Increment = () => {
        if (number < props.maxValue) {
            if (props.startValue < props.maxValue && props.startValue >= 0) {
                setNumber(number + 1)
            }
        }
    }

    const Reset = () => {
        setNumber(props.startValue)
    }

    const numStyle = `${number === props.maxValue ? s.window__counter__number_red : s.window__counter__number}`
    const incStyle = `${number === props.maxValue || props.startValue < 0 || props.maxValue <= props.startValue ? s.window__small__buttons_inc : undefined}`
    const resetStyle = `${number === props.startValue ? s.window__small__buttons_reset : undefined}`

    const TextOrNumber = () => {
        if (props.editMode) {
            if (props.startValue < 0 || props.maxValue < 0 || props.startValue === props.maxValue) {
                return <div className={s.warning}>incorrect value!</div>
            }
            return <div className={s.text}>enter values and press 'set'</div>
        }
        return <div className={numStyle}>{number}</div>

    }

    return <div className={s.window__frame}>
        <div className={s.window__large}>
            <div className={s.window__counter}>
                <TextOrNumber/>
            </div>
        </div>
        <div className={s.window__small}>
            <div className={s.window__small__buttons}>
                <div>
                    <button className={incStyle} onClick={Increment}>inc</button>
                </div>
                <div>
                    <button className={resetStyle} onClick={Reset}>reset</button>
                </div>
            </div>
        </div>
    </div>
}

export default DisplayCounter