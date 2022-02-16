import React from 'react'
import { ThemeProvider } from 'styled-components'
import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import MainPage from './pages/Main/Main.page'
import ContactPage from './pages/Contact/Contact.page'
import AboutPage from './pages/About/About.page'

function App() {
    return (
        <ThemeProvider theme={theme}>
            <div className='App'>
                <div>my app</div>
            </div>
        </ThemeProvider>
    )
}

export default App
