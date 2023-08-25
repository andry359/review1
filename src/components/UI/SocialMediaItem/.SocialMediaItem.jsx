import './SocialMediaItem.scss';

function SocialMediaItem({item}) {

  return (
    <div className={`socialMediaItem ${item.name ? 'socialMedia'+item.name : ''}`}>
      <a href={item.href} target='_blank' rel='nofollow'>
        <img src={item.img} alt={item.name} />
      </a>
    </div>
  );
}

export default SocialMediaItem;