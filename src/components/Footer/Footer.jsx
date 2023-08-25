import { CONTACT_ITEM } from '../../data/contactItem';
import { FOOTER_MENU } from '../../data/footerMenu';
import { FOOTER_SERVICES } from '../../data/footerServices';
import ContactItem from '../UI/ContactItem/ContactItem';
import ItemLi from '../UI/ItemLi/ItemLi';
import './Footer.scss';
import FooterOffer from './FooterOffer/FooterOffer';

function Footer() {

    return (
      <div className="footer">
        <div className="footer__container">
            <div className="footer__contacts footerContacts">
                {CONTACT_ITEM.map(item => (
                    <ContactItem key={item.id} className={item.className} type={item.type} href={item.href} text={item.text}/>
                ))}
            </div>
            <div className="footer__menu footerMenu">
                <div className="footerMenu__block menuServices">
                    {FOOTER_SERVICES.map(item => (
                        <ItemLi key={item.name} href={item.href}>
                            {item.name}
                        </ItemLi>
                    ))}
                </div>
                <div className="footerMenu__block menuBlock">
                    {FOOTER_MENU.map(item => (
                        <ItemLi key={item.name} href={item.href}>
                        {item.name}
                    </ItemLi>
                    ))}
                </div>
            </div>
        </div>
        <FooterOffer/>
      </div>
    );
}

export default Footer;