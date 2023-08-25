import './TegItem.scss';

function TegItem({text}) {

  return (
    <div className="tegItem">
      <span className='tegItem__text'>
        {text}
      </span>
    </div>
  );
}

export default TegItem;