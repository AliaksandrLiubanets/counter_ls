import React from 'react'
import './App.css'
import DisplayCounter from './components/DisplayCounter'
import DisplaySettings from './components/DisplaySettings'

function App() {
    return (
        <div className="App">
            <DisplaySettings/>
            <DisplayCounter/>
        </div>
    )
}

export default App
