import './CloseForm.scss';
import closeIcon from '../../../assest/image/svg/closeIcon.svg';

function CloseForm({handler}) {

  return (
    <button className='closeForm' onClick={() => handler()}>
        <img src={closeIcon} alt={`${closeIcon}`} />
    </button>
  );
}

export default CloseForm;