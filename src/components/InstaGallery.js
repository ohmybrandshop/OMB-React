const InstaGallery = () => {
  return(
    <ul className="insta-posts-holder">
      {images.map(image => (
        <li className="insta-posts-list">
          <img src={image} />
        </li>
      ))}
    </ul>
  )
}

const images = [
  '/images/insta-post-1.webp',
  '/images/insta-post-2.webp',
  '/images/insta-post-3.webp',
  '/images/insta-post-4.webp',
  '/images/insta-post-5.webp',
  '/images/insta-post-6.webp',
  '/images/insta-post-7.webp',
  '/images/insta-post-8.webp',
  '/images/insta-post-9.webp',
]

export default InstaGallery;