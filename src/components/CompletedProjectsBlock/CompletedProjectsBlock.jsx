import { useEffect, useState } from 'react';
import { PROJECT_CASES } from '../../data/projectCases';
import Carousel from '../UI/Carousel/Carousel';
import ProjectCaseItem from '../UI/ProjectCaseItem/ProjectCaseItem';
import Subtitle from '../UI/Subtitle/Subtitle';
import './CompletedProjectsBlock.scss';

function CompletedProjectsBlock() {

    let widthWondow = window.innerWidth;
    const [sliderToItem, setSliderToItem] = useState(4);
    useEffect(() => {
        setSliderToItem(widthWondow <= 1280 ? 2 : 4);
    }, [widthWondow]);

  return (
    <div className="completedProjectsBlock">
        <div className="completedProjectsBlock__title">
            <Subtitle>
                {'Реализованные проекты'}
            </Subtitle>    
        </div>
        <div className="completedProjectsBlock__carouselProjects carouselProjects">
            <Carousel slidesToShow={sliderToItem} slidesToScroll={sliderToItem}>
                {PROJECT_CASES.map(item => <ProjectCaseItem key={item.title} title={item.title} text={item.text} img={item.img}/>)}
            </Carousel>   
        </div>
    </div>
  );
}

export default CompletedProjectsBlock;