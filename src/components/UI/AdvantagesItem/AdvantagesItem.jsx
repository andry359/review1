import './AdvantagesItem.scss';

function AdvantagesItem({children}) {

    return (
      <div className="advantagesItem">
        <span>
            {children}
        </span>
      </div>
    );
  }
  
  export default AdvantagesItem;