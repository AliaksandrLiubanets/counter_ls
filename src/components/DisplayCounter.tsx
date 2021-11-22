import s from '../styles/styles.module.css'
import {useEffect, useState} from 'react'
import {DisplayCounterData} from '../App'

type DisplayCounterPropsType = {
    display: DisplayCounterData
}

function DisplayCounter(props: DisplayCounterPropsType) {

    const { max, min } = props.display

    const [number, setNumber] = useState<number | null>(min)

    useEffect(() => {
        setNumber(min)
    }, [min])


    const Increment = () => {
        if (number && max && (number < max)) {
            setNumber(number + 1)
        }
    }
    const Reset = () => {
        setNumber(min)
    }

    const numStyle = `${number === max ? s.window__counter__number_red : s.window__counter__number}`
    const incStyle = `${number === max ? s.window__small__buttons_inc : undefined}`
    const resetStyle = `${number === min ? s.window__small__buttons_reset : undefined}`
    const disableInc = number === max
    const disableReset = number === min


    return <div className={s.window__frame}>
        <div className={s.window__large}>
            <div className={s.window__counter}>
                {
                    !min
                        ? <div>Change values and press set</div>
                        :  <div className={numStyle}>{number}</div>
                }
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