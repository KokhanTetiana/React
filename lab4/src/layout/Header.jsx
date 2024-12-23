import { Link } from 'react-router-dom';

function Header() {
    return (
        <nav>
            <div className="nav-wrapper container">
                <Link to="/" className="brand-logo">My site</Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contacts">Contacts</Link></li>
                </ul>
            </div>
        </nav>

    )

}

export default Header;