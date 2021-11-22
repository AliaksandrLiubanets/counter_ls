import React, {useEffect, useState} from 'react'
import './App.css'
import DisplayCounter from './components/DisplayCounter'
import DisplaySettings from './components/DisplaySettings'

enum StorageKeys {
    MAX_VALUE = 'maxValue',
    START_VALUE = 'startValue'
}

const getValuesFromStorage = (): {max: number, start: number } => {

    const max = localStorage.getItem(StorageKeys.MAX_VALUE)
    const start = localStorage.getItem(StorageKeys.START_VALUE)

    return {
        max: max ? +max : 0,
        start: start ? +start : 0
    }
}

const setValuesToStorage = (setting: {max: number, start: number}) => {
    localStorage.setItem(StorageKeys.MAX_VALUE, JSON.stringify(setting.max))
    localStorage.setItem(StorageKeys.START_VALUE, JSON.stringify(setting.start))
}

export type DisplayCounterData = {
    max: number | null
    min: number | null
}

function App() {

    const [maxValue, setMaxValue] = useState<number>(0)
    const [startValue, setStartValue] = useState<number>(0)

    const [display, setDisplay] = useState<DisplayCounterData>({
        max: null,
        min: null
    })

    useEffect(() => {
        const settings = getValuesFromStorage()
        setMaxValue(settings.max)
        setStartValue(settings.start)
    }, [])


    const setValueToStorage = () => {
        setValuesToStorage({ max: maxValue, start: startValue })
        setDisplay({ min: startValue, max: maxValue })
    }

    return (
        <div className="App">
            <DisplaySettings setMaxValue={setMaxValue}
                             setStartValue={setStartValue}
                             setValueToStorage={setValueToStorage}
                             maxValue={maxValue}
                             minValue={startValue}
            />
            <DisplayCounter
                display={display}
            />
        </div>
    )
}

export default App
