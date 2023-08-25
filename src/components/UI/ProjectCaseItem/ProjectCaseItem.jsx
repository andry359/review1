import './ProjectCaseItem.scss';
import arrowCaseIcon from '../../../assest/image/svg/arrowCaseIcon.svg';

function ProjectCaseItem({title, text, img}) {
    
    return (
      <div className="caseItem">
       <div className="caseItem__img">
            <img src={img} alt={`${title}-image`} />
       </div>
       <div className="caseItem__text caseItemText">
        <div className="caseItemText__main">
            <div className="caseItemText__title">
                {title}
            </div>
            <div className="caseItemText__button">
                <button>
                    <img src={arrowCaseIcon} alt="arrow" />
                </button>
            </div>
        </div>
        <div className="caseItemText__info">
            <p>
                {text}
            </p>
        </div>
       </div>
      </div>
    );
  }
  
  export default ProjectCaseItem;