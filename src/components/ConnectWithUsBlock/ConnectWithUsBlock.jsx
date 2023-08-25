import './ConnectWithUsBlock.scss';
import MainForm from '../MainForm/MainForm';
import MainFormTitleBlock from '../MainForm/MainFormTitleBlock/MainFormTitleBlock';
import FormTitle from '../MainForm/FormTitle/FormTitle';
import FormImage from '../MainForm/FormImage/FormImage';
import technicalSpecialist from '../../assest/image/png/technicalSpecialist.png';

function ConnectWithUsBlock({myRef}) {

  return (
    <div className="connectWithUsBlock" ref={myRef}>
      <MainForm>
        <MainFormTitleBlock>
          <FormTitle>
            Связаться с техническим директором
          </FormTitle>
          <FormImage src={technicalSpecialist} />
        </MainFormTitleBlock>
      </MainForm>
      <div className="connectWithUsBlock__text">
        <article className='connectWithUsBlock__text-text'>
          <span>Мы делаем BIM модели, которые помогут производителю взаимодействовать с проектировщиками.</span>
          <span>Работаем с российским и иностранным ПО.</span>
          <span>Подготовим ТЗ и поможем разобраться со всеми нюансами. Бесплатно проконсультируем.</span>
        </article>
      </div>
    </div>
  );
}

export default ConnectWithUsBlock;