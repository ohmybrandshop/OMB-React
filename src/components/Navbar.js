import { useEffect, useState } from 'react';
import { UIStore } from '../store/store';
import classNames from 'classnames';

const Navbar = () => {
    const sideMenuIsOpen = UIStore.useState((s) => s.sideMenuIsOpen);

    return (
        <>
            {/* Top Menu */}
            <div className="navbar">
                <span
                    className="breadcrumb"
                    onClick={() => {
                        UIStore.update((s) => {
                            s.sideMenuIsOpen = !sideMenuIsOpen;
                        });
                        document.body.classList.add('lock-scroll');
                    }}
                >
                    <img className="mobile-image" src="/images/burger.svg" alt="burger" />
                </span>
                <div className="text-holder">
                    <img className="mobile-image" src="/images/company-logo.svg" alt="company-logo" />
                </div>
                <span className="icons-holder">
                    <img className="mobile-image account" src="/images/account.svg" alt="account" />
                    <img className="mobile-image" src="/images/cart.svg" alt="cart" />
                </span>
            </div>

            {/* Side Menu */}
            <div className={classNames('menu-holder', sideMenuIsOpen ? 'visible' : undefined)}>
                <div className="menu-content-holder">
                    <div className="menu-header">
                        <span
                            className="cross-icon"
                            onClick={() => {
                                UIStore.update((s) => {
                                    s.sideMenuIsOpen = !sideMenuIsOpen;
                                });
                                document.body.classList.remove('lock-scroll');
                            }}
                        >
                            <img src="/images/icon-close.svg" />
                        </span>
                        <h3 className="menu-heading">My Profile</h3>
                        <span className="bag-icon">
                            <img src="/images/icon-shopping-bag.svg" />
                        </span>
                    </div>
                    <img className="profile-pic" src="/images/profile-pic.png" />
                </div>

                <div className="user-details-holder">
                    <div className="user-details">
                        <div className="user-name">Mike Peter</div>
                        <div className="user-email">mike@flexinstudio.com</div>
                    </div>
                </div>

                <ul className="menu-items-holder">
                    <li className="menu-items">
                        <a className="link" href="#">
                            Profile
                        </a>
                    </li>
                    <li className="menu-items">
                        <a className="link" href="#">
                            Shop
                        </a>
                    </li>
                    <li className="menu-items">
                        <a className="link" href="#">
                            How it works
                        </a>
                    </li>
                    <li className="menu-items">
                        <a className="link" href="#">
                            Search
                        </a>
                    </li>
                    <li className="menu-items">
                        <a className="link" href="#">
                            Help
                        </a>
                    </li>
                </ul>

                <div className="menu-btn-holder">
                    <div className="logout-btn">
                        <img className="logout-icon" src="/images/icon-logout.svg" />
                        <a className="logout-link" href="#">
                            Logout
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
