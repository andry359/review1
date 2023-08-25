import './ContactUsBlock.scss';
import arrow from '../../assest/image/svg/arrowSvg.png';

function ContactUsBlock({executeScroll}) {  

    return (
      <div className="contactUsBlock">
        <div className="contactUsBlock__text">
            <p>
                Если вы заинтересованы в услугах по BIM моделированию, разработке плагинов или семейств, пожалуйста, <button className='contactUsBlock__buttonText' onClick={executeScroll}><span>свяжитесь</span></button> с нами через форму обратной связи.
                Мы будем рады обсудить ваш проект и предложить наилучшее решение.
            </p>
        </div>
        <div className="contactUsBlock__button">
            <button className='contactUsBlock__buttonArrow' onClick={executeScroll}>
                <img src={arrow} alt="arrow" />
            </button>
        </div>
      </div>
    );
  }
  
  export default ContactUsBlock;