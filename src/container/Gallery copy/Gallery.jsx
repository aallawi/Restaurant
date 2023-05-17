import React  from 'react';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';


import './Gallery.css';
import SubHeading from '../../components/SubHeading/SubHeading';
import { images } from '../../constants';

const Gallery = () => {

  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === 'left') {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

  return (
    <div className="gallery flex_center bg_black_photo section_padding">
      <div className="gallery_info">
        <SubHeading parag={"Instagram"} title={"Photo Gallery"} posion={"Flex start"} />
        <p className="text_white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.
        </p>
        <div style={{ marginTop: "20px" }}>
          <button type="button" className="custom_button">View More</button>
        </div>
      </div>
      <div className="gallery_images">

        <div className="gallery_images_container" ref={scrollRef}>
          {[images.gallery01, images.gallery02, images.gallery03, images.gallery04].map((image, index) => (
            <div className="gallery_images_card flex_center" key={`gallery_image_${index + 1}`}>
              <img src={image} alt="gallery_image" />
              <BsInstagram className="gallery_image_icon" />
            </div>
          ))}
        </div>

        <div className="gallery_images_arrows">
          <BsArrowLeftShort className="gallery_arrow_icon" onClick={() => scroll('left')} />
          <BsArrowRightShort className="gallery_arrow_icon" onClick={() => scroll('right')} />
        </div>

      </div>
    </div>
  );
}

export default Gallery;

