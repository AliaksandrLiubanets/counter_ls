type ButtonPropsType = {
    title: string
    handler: () => void
    style: string
}

export function Button({title, style, handler}: ButtonPropsType) {
    return <div>
        <button className={style} onClick={handler}>
            {title}
        </button>
    </div>
}