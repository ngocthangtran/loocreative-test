import React, { useState } from 'react';
import "./navbar.css"
const refImg = 'Asset/Image'

function Navbar(props) {
    const [open, isOpen] = useState(false);

    const clickMenu = () => {
        isOpen(!open)
    }

    return (
        <div className="box">
            <img
                src={`${process.env.PUBLIC_URL}/${refImg}/logo.svg`}
                className="logo"
                alt='logo'
            />
            <ul className= {open?'navbar__menu activeMenu':'navbar__menu'} >
                <div className="menu__item">
                    <li>Introduction</li>
                    <li>solution</li>
                    <li>Rate plan</li>
                </div>
                <div className="Rectangle-662"></div>
                <div className="menu__item">
                    <li>login</li>
                    <li>Apply for free use</li>
                </div>
            </ul>
            <div className="menu__icon" onClick={clickMenu}>
                <img
                    src={`Asset/Icon/menuIcon.png`}
                    className='menuIcon'
                    alt="menuIcon"
                />
            </div>
        </div>
    );
}

export default Navbar;