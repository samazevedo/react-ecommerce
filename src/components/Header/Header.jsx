import React, { Fragment } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import MainPage from '../../pages/Main/Main.page'
import ContactPage from '../../pages/Contact/Contact.page'
import AboutPage from '../../pages/About/About.page'

export default function Header() {
    return (
        <>
            <header>
                <nav>
                    <ul>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/about'>About</Link>
                        </li>
                        <li>
                            <Link to='/contact'>Contact</Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <Router>
                <Route path='/' element={<MainPage />} />
                <Route path='/about' element={<AboutPage />} />
                <Route path='/contact' element={<ContactPage />} />
            </Router>
        </>
    )
}
