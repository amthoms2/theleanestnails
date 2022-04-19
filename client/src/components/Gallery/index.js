import { useState } from 'react';
import {
  GalleryContainer,
  Pictures,
  Image,
  Model,
  ModelImg,
  CloseButton,
} from './GalleryElements';
import img from '../../media/LeanestNails-Web.png';
import img1 from '../../media/about.png';
import img2 from '../../media/leana.png';
import img3 from '../../media/gallery.png';
import img4 from '../../media/lighting.jpg';
import img5 from '../../media/nailflower.jpg';

const Gallery = () => {
  let data = [
    {
      id: 1,
      img: img,
    },
    {
      id: 2,
      img: img1,
    },
    {
      id: 3,
      img: img2,
    },
    {
      id: 4,
      img: img3,
    },
    {
      id: 5,
      img: img4,
    },
    {
      id: 6,
      img: img5,
    },
  ];

  const [model, setModel] = useState(false);
  const [tempImg, setTempImg] = useState('');

  const getImg = (img) => {
    setTempImg(img);
    setModel(true);
  };

  return (
    <>
      <Model mod={model ? 'model open' : 'model'}>
        <ModelImg src={tempImg} alt="nail pictures" />
        <CloseButton onClick={() => setModel(false)} />
      </Model>
      <GalleryContainer>
        {data.map((image, index) => {
          return (
            <Pictures key={index} onClick={() => getImg(image.img)}>
              <Image src={image.img} />
            </Pictures>
          );
        })}
      </GalleryContainer>
    </>
  );
};

export default Gallery;
