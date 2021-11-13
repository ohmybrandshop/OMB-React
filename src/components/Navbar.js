import burger from './../images/burger.svg';
import companyLogo from './../images/company-logo.svg';
import account from './../images/account.svg';
import cart from './../images/cart.svg';

const Navbar = () => {
    return (
        <div className="navbar">
            <span className="breadcrumb">
                <img className="mobile-image" src={burger} alt="burger" />
            </span>
            <div className="text-holder">
                <img className="mobile-image" src={companyLogo} alt="company-logo" />
            </div>
            <span className="icons-holder">
                <img className="mobile-image account" src={account} alt="account" />
                <img className="mobile-image" src={cart} alt="cart" />
            </span>
        </div>
    );
};

export default Navbar;
