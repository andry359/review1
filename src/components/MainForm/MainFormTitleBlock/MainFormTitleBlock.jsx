import './MainFormTitleBlock.scss';

function MainFormTitleBlock({children}) {

    return (
        <div className="mainForm__head mainFormHead">
            {children}
        </div>
    );
  }
  
  export default MainFormTitleBlock;