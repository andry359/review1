import './FormImage.scss';

function FormImage({src}) {

  return (
    <div className="mainFormHead__image">
        <img src={src} alt={`${src}`} />
    </div>
  );
}

export default FormImage;