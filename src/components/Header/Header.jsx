import ButtonDafault from '../UI/ButtonDafault/ButtonDafault';
import tiverLogo from '../../assest/image/svg/tiverLogo.svg';
import './Header.scss';
import { NAVBAR_ITEMS } from '../../data/navbarItems';
import Navbar from '../UI/Navbar/Navbar';
import NavbarItem from '../UI/NavbarItem/NavbarItem';
import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import MainForm from '../MainForm/MainForm';
import FormTitle from '../MainForm/FormTitle/FormTitle';
import CloseForm from '../MainForm/CloseForm/CloseForm';

function Header() {

    const [isOpen, setIsOpen] = useState(false);

    return (
      <div className="header">
        <a className="header__logo headerLogo" href='_'>
            <div className="headerLogo__icon">
                <img src={tiverLogo} alt="tiverLogo" />
            </div>
            <div className="headerLog__name">
                <span>TIVER GROUP</span>
            </div>
        </a>
        <Navbar className={'__main'}>
            {NAVBAR_ITEMS.map((item) => <NavbarItem key={item.name} item={item} />)}
        </Navbar>
        <div className="header__button">
            <ButtonDafault name={'Связаться'} onClick={() => setIsOpen(true)} />
        </div>
        <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
            <div className="popup__container">
                <Dialog.Panel className="popup">
                    <MainForm>
                    <CloseForm handler={() => setIsOpen(false)} />
                        <FormTitle>
                            Пожалуйста, оставьте ваше имя и телефон для связи
                        </FormTitle>
                        {/* <button onClick={() => setIsOpen(false)}>close</button> */}
                    </MainForm>
                </Dialog.Panel>
            </div>
        </Dialog>
      </div>
    );
  }
  
  export default Header;