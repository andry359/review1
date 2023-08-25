import './ItemLi.scss';

function ItemLi({children, href}) {
    return (
      <div className="itemLi">
        <a href={href} target='_blank'>
            {children}
        </a>
      </div>
    );
  }
  
  export default ItemLi;