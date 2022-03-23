import { useState } from 'react';
import TopBar from '../components/Navbar/TopBar';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import SectionInfo from '../components/SectionInfo';
import { aboutObj, galleryObj } from '../data';
import NailServices from '../components/SectionInfo/NailServices'
// import Footer from '../components/Footer'

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [displayMenu, setDisplayMenu] = useState(true);

  const toggleBar = () => {
    setIsOpen(!isOpen);
  };

  const displayNavMenu = () => {
    setDisplayMenu(!displayMenu);
  };

  return (
    <>
      <TopBar isOpen={isOpen} toggleBar={toggleBar} />
      <Navbar toggleBar={toggleBar} displayNavMenu={displayNavMenu} />
      <Hero />
      <SectionInfo {...aboutObj} />
      <NailServices />
      {/* <SectionInfo {...servicesObj} /> */}
      <SectionInfo {...galleryObj} />
      {/* <Footer /> */}
    </>
  );
};

export default Home;
