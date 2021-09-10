import React from 'react';
import "./navbar.css"
const refImg = 'Asset/Image'

function Navbar(props) {
    return (
        <div class="box">
            <img
                src={`${process.env.PUBLIC_URL}/${refImg}/logo.svg`}
                className="logo"
                alt='logo'
            />
            <ul className='navbar__menu'>
                <div className="menu__item">
                    <li>Introduction</li>
                    <li>solution</li>
                    <li>Rate plan</li>
                </div>
                <div class="Rectangle-662"></div>
                <div className="menu__item">
                    <li>login</li>
                    <li>Apply for free use</li>
                </div>
            </ul>
            <div className="menu__icon">
                <img
                    src={`${refImg}/menuIcon.png`}
                    className='menuIcon'
                    alt="menuIcon"
                />
            </div>
        </div>
    );
}

export default Navbar;