const InstaGallery = () => {
  return(
    <ul className="insta-posts-holder">
      {images.map(image => (
        <li className="insta-posts-list" key={image.key}>
          <img src={image.src} />
        </li>
      ))}
    </ul>
  )
}

const images = [
  {
    key: 1,
    src: '/images/insta-post-1.webp',
  },
  {
    key: 2,
    src: '/images/insta-post-2.webp',
  },
  {
    key: 3,
    src: '/images/insta-post-3.webp',
  },
  {
    key: 4,
    src: '/images/insta-post-4.webp',
  },
  {
    key: 5,
    src: '/images/insta-post-5.webp',
  },
  {
    key: 6,
    src: '/images/insta-post-6.webp',
  },
  {
    key: 7,
    src: '/images/insta-post-7.webp',
  },
  {
    key: 8,
    src: '/images/insta-post-8.webp',
  },
  {
    key: 9,
    src: '/images/insta-post-9.webp',
  },
]

export default InstaGallery;