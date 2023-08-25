import TegItem from '../UI/TegItem/TegItem';
import './ModelDevelopment.scss';

function ModelDevelopment() {

    const modelItemText = [
        'Revit', 'Aveva', 'ArchiCAD', 'Model Studio', 'Renga',
    ]

    return (
      <div className="modelDevelopment">
        <h2 className='modelDevelopment__title'>
            Разрабатываем модели, соответствующие лучшим мировым практикам BIM проектирования
        </h2>
        <div className="modelDevelopment__teg">
            {modelItemText.map(item => 
                <TegItem key={item} text={item}/>
            )}
        </div>
      </div>
    );
  }
  
  export default ModelDevelopment;