import './NavbarItem.scss';
import navItemIcon from '../../../assest/image/svg/navItemIcon.svg';
import Navbar from '../Navbar/Navbar';
import { useState, useRef } from 'react';
import {useClickOutside} from '../../../hooks/useClickOutside';

function NavbarItem({item}) {

    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);
    useClickOutside(menuRef, () => {
        if (isOpen) setTimeout(() => setIsOpen(false), 50);
    });

    if (!item.selectItems) { 
        return (
            <li className='navbar__item' key={item.name}>
                <a href={item.link}>
                    {item.name}
                </a>
            </li>
        )
    } else {
        return (
            <li className='navbar__item navbarItem__minorMenu' key={item.name} onClick={() => setIsOpen(!isOpen)}>
                <a href="#">
                    <div className="item__name">
                        {item.name}
                        <img className="item__navItemIcon" src={navItemIcon} alt="navItemIcon" />
                    </div>
                    <div className="item__menu" ref={menuRef}>
                        <Navbar className={`__minor${isOpen ? '-active' : ''}`}>
                            {item.selectItems?.map(item => <NavbarItem key={item.name} item={item} />)}
                        </Navbar>
                    </div>
                </a>
            </li>
        )
    }
}

export default NavbarItem;