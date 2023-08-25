import './ButtonDafault.scss';

function ButtonDafault({name, onClick}) {

    return (
      <div className="buttonDafault" onClick={() => onClick()}>
        <button>
            {name}
        </button>
      </div>
    );
  }
  
  export default ButtonDafault;