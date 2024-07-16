import React from 'react';

interface ImageSlideProps {
  imageUrl: string;
  altText: string;
}

const ImageSlide: React.FC<ImageSlideProps> = ({ imageUrl, altText }) => (
  <div className="image-container cursor-pointer">
    <a href="#" className="imgHead">
      <img src={imageUrl} alt={altText} className="sliderImg" />
    </a>
  </div>
);

export default ImageSlide;
