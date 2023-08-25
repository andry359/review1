import './FormTitle.scss';

function FormTitle({children}) {

  return (
    <div className="mainFormHead__title">
        <h2>
            {children}
        </h2>
    </div>
  );
}

export default FormTitle;