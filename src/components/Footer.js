const Footer = () => {
  return (
    <div className="footer-section">
      <div className="see-more-button">
        <a className="see-more" href="#">
          <img src="/images/see more.webp" />
        </a>
      </div>
      <div className="company-logo">
        <img src="/images/company-logo.svg" />
      </div>
      <div className="country-dropdown">
        <form>
          <label>Israel</label>
          <select>
            <option></option>
            <option></option>
          </select>
        </form>
      </div>
      <ul className="easy-to-access">
        <li className="easy-list-holder">
          <div className="easy-list">
            <h6 className="easy-list-heading">SHOPPING</h6>
            <div className="easy-list-options">Collections</div>
            <div className="easy-list-options">Catalog</div>
          </div>
          <div className="expand-image">
            <img src="/images/close.png" />
          </div>
        </li>
        <li className="easy-list-holder">
          <div className="easy-list">
            <h6 className="easy-list-heading">CUSTOMER SERVICE</h6>
            <div className="easy-list-options">FAQ</div>
            <div className="easy-list-options">How it works</div>
          </div>
          <div className="expand-image">
            <img src="/images/close.png" />
          </div>
        </li>
        <li className="easy-list-holder">
          <div className="easy-list">
            <h6 className="easy-list-heading">My PROFILE</h6>
          </div>
          <div className="expand-image">
            <img src="/images/open.png" />
          </div>
        </li>
      </ul>

      <div className="footer-seperator">
        <ul className="button-link-list">
          <li className="button-link">
            <a href="" className="btn">
              Let's get started{' '}
            </a>
          </li>
        </ul>
      </div>
      <div className="follow-us">Follow us</div>
      <div className="payments-method-holder">
        <ul className="social-network">
          <li className="social-list">
            <a>
              <img src="/images/fb-icon.png" />
            </a>
          </li>
          <li className="social-list">
            <a>
              <img src="/images/insta-icon.png" />
            </a>
          </li>
          <li className="social-list">
            <a>
              <img src="/images/tiktok-icon.png" />
            </a>
          </li>
        </ul>
        <ul className="payment-methods">
          <li className="payment-list">
            <a>
              <img src="/images/paypal.png" />
            </a>
          </li>
          <li className="payment-list">
            <a>
              <img src="/images/visa.png" />
            </a>
          </li>
          <li className="payment-list">
            <a>
              <img src="/images/mastercard.png" />
            </a>
          </li>
          <li className="payment-list apple">
            <a>
              <img src="/images/apple-pay.png" />
            </a>
          </li>
          <li className="payment-list">
            <a>
              <img src="/images/dhl.png" />
            </a>
          </li>
        </ul>
      </div>
      <ul className="input-holder">
        <form>
          <input type="text" className="input-text" placeholder="Enter your email adress..." />
          <a className="input-button">
            <img src="/images/button.webp" />
          </a>
        </form>
      </ul>
      <a className="signup-newsletter"> Sign up for the newsletter </a>
      <div className="terms-and-conditions">
        <span className="terms"> Terms & Conditions </span>
        <span className="terms"> Privacy Notice </span>
        <span className="terms"> Cookie Policy </span>
      </div>
      <div className="footer-image">
        <img src="/images/footer.png" />
      </div>
    </div>
  );
};

export default Footer;
