import './Navbar.scss';

function Navbar({ children, className }) {

    return (
        <div className={`header__nav headerNav headerNav${className}`}>
            <nav className='headerNav__menu menu'>
                <ul className={`menu__list menuList${className}`}>
                    {children}
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;