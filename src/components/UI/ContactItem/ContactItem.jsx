import './ContactItem.scss';

function ContactItem({text, href = null, type = 'span', className = 'text'}) {
    
    if(type === 'span') {
        return (
            <div className="footerContacts__contact">
            <span className={`contact__${className}`}>
                {text}
            </span>
        </div>
        );
    } else if(type === 'a') {
        return (
            <div className="footerContacts__contact">
            <a href={href} className={`footerContacts__${className}`}>
                {text}
            </a>
        </div>
        );
    } else {
        return null;
    }

}

export default ContactItem;