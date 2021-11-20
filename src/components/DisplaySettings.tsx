import s from '../styles/styles.module.css'

type DisplaySettingsPropsType = {

}

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
        <div className={s.window__small}></div>
    </div>
}
export default DisplaySettings