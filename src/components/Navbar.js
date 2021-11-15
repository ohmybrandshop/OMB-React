const Navbar = () => {
    return (
        <div className="navbar">
            <span className="breadcrumb">
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
    );
};

export default Navbar;
