import { Link } from "react-router-dom";
import { UIStore } from "../store/store";
import classNames from "classnames";

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
						document.body.classList.add("lock-scroll");
					}}
				>
					<img className="mobile-image" src="/images/burger.svg" alt="burger" />
				</span>
				<div className="text-holder">
					<img
						className="mobile-image"
						src="/images/company-logo.svg"
						alt="company-logo"
					/>
				</div>
				<span className="icons-holder">
					<img className="mobile-image account" src="/images/account.svg" alt="account" />
					<img className="mobile-image" src="/images/cart.svg" alt="cart" />
				</span>
			</div>

			{/* Side Menu */}
			<div className={classNames("menu-holder", sideMenuIsOpen ? "visible" : undefined)}>
				<div className="menu-content-holder">
					<div className="menu-header">
						<span
							className="cross-icon"
							onClick={() => {
								UIStore.update((s) => {
									s.sideMenuIsOpen = !sideMenuIsOpen;
								});
								document.body.classList.remove("lock-scroll");
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
						<Link className="link" to="/" >Profile</Link>
					</li>
					<li className="menu-items">
						<Link className="link" to="/">Shop</Link>
					</li>
					<li className="menu-items">
						<Link className="link" to="/">How it works</Link>
					</li>
					<li className="menu-items">
						<Link className="link" to="/">Search</Link>
					</li>
					<li className="menu-items">
						<Link className="link" to="/">Help</Link>
					</li>
				</ul>

				<div className="menu-btn-holder">
					<div className="logout-btn">
						<img className="logout-icon" src="/images/icon-logout.svg" />
                        <Link className="logout-link" to="/">Logout</Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default Navbar;
