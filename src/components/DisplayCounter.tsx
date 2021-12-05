import s from '../styles/styles.module.css'
import {useEffect, useState} from 'react'
import {Button} from './Button'
import {Link} from 'react-router-dom'

type DisplayCounterPropsType = {
    maxValue: number
    startValue: number
    editMode: boolean
    isSecondVariant: boolean
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

    const WarningOrNumber = () => {
        if (props.editMode) {
            if (props.startValue < 0 || props.maxValue < 0 || props.startValue === props.maxValue) {
                return <div className={s.warning}>incorrect value!</div>
            }
            return <div className={s.text}>enter values and press 'set'</div>
        }
        return <div className={numStyle}>{number}</div>
    }

    const redirectToCounter = () => true

    return <div className={s.window__frame}>
        <div className={s.window__large}>
            <div className={s.window__counter}>
                <WarningOrNumber/>
            </div>
        </div>
        <div className={s.window__small}>
            <div className={s.window__small__buttons}>
                <Button title={'inc'} handler={Increment} style={incStyle}/>
                <Button title={'reset'} handler={Reset} style={resetStyle}/>
                {
                    props.isSecondVariant &&
                    <Link className={s.window__small__link} to={'/settings'}>
                        <Button title={'set'} handler={redirectToCounter} style={undefined}/>
                    </Link>
                }
            </div>
        </div>
    </div>
}

export default DisplayCounter