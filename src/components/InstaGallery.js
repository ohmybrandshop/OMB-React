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
    '/images/insta-post-1.png',
    '/images/insta-post-2.png',
    '/images/insta-post-3.png',
    '/images/insta-post-4.png',
    '/images/insta-post-5.png',
    '/images/insta-post-6.png',
    '/images/insta-post-7.png',
    '/images/insta-post-8.png',
    '/images/insta-post-9.png',
]

export default InstaGallery;