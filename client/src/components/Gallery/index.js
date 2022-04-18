import { GalleryContainer, Pictures, Image } from './GalleryElements';
import img from "../../media/LeanestNails-Web.png"
import img1 from "../../media/about.png"
import img2 from "../../media/leana.png"
import img3 from "../../media/gallery.png"
import img4 from "../../media/lighting.jpg"
import img5 from "../../media/nailflower.jpg"

const Gallery = () => {
  let data = [
    {
      id: 1,
      img: img
    },
    {
      id: 2,
      img: img1
    },
    {
      id: 3,
      img: img2
    },
    {
      id: 4,
      img: img3
    },
    {
      id: 5,
      img: img4
    },
    {
      id: 6,
      img: img5
    }
  ]

  return(
    <>
    <GalleryContainer>
      {data.map((image, index)=>{
        return(
          <Pictures key={index}>
            <Image src={image.img} />
          </Pictures>
        )
      })}
    </GalleryContainer>
    </>
  )
};

export default Gallery;
