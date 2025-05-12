import React from 'react';
import style from './header.module.css';


const Header = () => {
    return(
        <div className={style.header}>
            <h1>Movie App</h1>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/movies">Movies</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </nav>
        </div>

    )
}

export default Header;