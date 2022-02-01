import React, {useEffect} from 'react'
import Header from './header/Header'
import Main from './main/Main'
import './career.css'


export default function Career() {

    useEffect(() => {
        const app = document.getElementsByClassName('App')[0];
        app.classList.add('career_page');

        return () => {
            app.classList.remove('career_page')
        }
    }, [])

    return (
        <div id="career-page">
            <Header />
            <Main />
        </div>
    )
}