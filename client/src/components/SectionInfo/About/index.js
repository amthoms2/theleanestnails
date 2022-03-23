import {AboutWrapper, Image} from './AboutElements'
import {MainBackground} from '../../Hero/HeroElements'
import img from '../../../media/thankyou.jpg'

function About() {
  return (
    <>
    <AboutWrapper>
      <MainBackground>
       <Image src={img}></Image>
      </MainBackground>
      heyughi
    </AboutWrapper>
    </>
  )
}

export default About
