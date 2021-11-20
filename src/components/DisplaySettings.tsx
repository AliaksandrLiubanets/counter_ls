import s from '../styles/styles.module.css'

type DisplaySettingsPropsType = {

}

function DisplaySettings(props: DisplaySettingsPropsType) {
    return <div className={s.window__frame}>
        <div className={s.window__large}></div>
        <div className={s.window__small}></div>
    </div>
}
export default DisplaySettings