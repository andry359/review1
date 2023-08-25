import './MainForm.scss';
import emailIcon from '../../assest/image/svg/emailIcon.png';
import numberIcon from '../../assest/image/svg/numberIcon.svg';
import ButtonDafault from '../UI/ButtonDafault/ButtonDafault';
import SocialMediaBlock from '../UI/SocialMediaBlock/SocialMediaBlock';
import { SOCIAL_MEDIA } from '../../data/socialMedia';
import SocialMediaItem from '../UI/SocialMediaItem/.SocialMediaItem';
import { useForm } from 'react-hook-form';

function MainForm({children}) {

    const {
        register,
        formState: {
          errors,
        },
        handleSubmit,
        reset,
      } = useForm({
        mode: "onBlur",
      });
    
      const onSubmit = (data) => {
        alert(JSON.stringify(data));
        reset();
      };

    return (
        <div className="connectWithUsBlock__form">
            <div className='mainForm'>
                {children}
                <form className="mainForm__form form" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form__input">
                        <div className="form__email">
                            <div>
                                <img src={emailIcon} alt="emailIcon"/>
                            </div>
                            <div className="formInput__container">
                                <input className="formInput" type="email" placeholder='Введите адрес электронной почты' {...register('email', {
                                required: "заполните поле",
                                })} />
                                <div className='formInput__error'>
                                    {errors?.email && <p>{errors?.email?.message || "заполните поле123"}</p>}
                                </div>
                            </div>
                        </div>
                        <div className="form__number">
                            <div>
                                <img src={numberIcon} alt="numberIcon" />
                            </div>
                            <div className="formInput__container">
                                <input 
                                className="formInput" 
                                type="number" placeholder='Номер телефона для связи' {...register('number', {
                                required: "заполните поле",
                                })}/>
                                <div className='formInput__error'>
                                    {errors?.number && <p>{errors?.number?.message || "заполните поле"}</p>}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="form__buttonAndSocial">
                    <ButtonDafault name={'Отправить'} onClick={onSubmit}/>
                        <SocialMediaBlock>
                            {SOCIAL_MEDIA.map(item => <SocialMediaItem key={item.name} item={item} />)}
                        </SocialMediaBlock>
                    </div>
                </form>
            </div>
        </div>
    );
  }
  
  export default MainForm;