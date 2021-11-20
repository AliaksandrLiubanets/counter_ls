import s from '../styles/styles.module.css'

type DisplaySettingsPropsType = {

}


// const disableReset = number === props.maxValue ? true : false

function DisplaySettings(props: DisplaySettingsPropsType) {
    return <div className={s.window__frame}>
        <div className={s.window__large}>
            <div className={s.window__settings}>
                <div className={s.window__settings__box}>
                    <div className={s.window__settings__value}>max value:</div>
                    <div className={s.window__input}><input></input></div>
                </div>
                <div className={s.window__settings__box}>
                    <div className={s.window__settings__value}>max value:</div>
                    <div className={s.window__input}><input></input></div>
                </div>
            </div>
        </div>
        <div className={s.window__small}>
            <div ><button className={undefined} disabled={undefined} onClick={() => {}}>set</button></div>
        </div>
    </div>
}
export default DisplaySettings