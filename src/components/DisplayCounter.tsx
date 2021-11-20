import s from '../styles/styles.module.css'
import {useState} from 'react'

type DisplayCounterPropsType = {

}

function DisplayCounter(props: DisplayCounterPropsType) {

    const [number, setNumber] = useState(0)
    const Increment = () => {
        setNumber(number + 1)
    }
    const Reset = () => {
        setNumber(0)
    }


    return <div className={s.window__frame}>
        <div className={s.window__large}>
            <div className={s.window__large__counter}>
                <div className={s.window__large__number}>{number}</div>
            </div>

        </div>
        <div className={s.window__small}>
            <div className={s.window__small__buttons}>
                <div><button onClick={Increment}>inc</button></div>
                <div><button onClick={Reset}>reset</button></div>
            </div>

        </div>
    </div>
}
export default DisplayCounter