type ButtonPropsType = {
    title: string
    handler: () => void
    buttonStyle: string
}

export function Button({title, buttonStyle, handler}: ButtonPropsType) {
    return <div>
        <button className={buttonStyle||""} onClick={handler}>
            {title}
        </button>
    </div>
}