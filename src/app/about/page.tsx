
import Hero from '../../components/Hero';
import PageAbout from '@/components/PageAbout';
import BoxImage from '@/components/BoxImage';
import TextImageSection from '@/components/TextImageSection';
import TextImageSection2 from '@/components/TextImageSection2';
import TextImageSection3 from '@/components/TextImageSection3';
import RandomUserCard from '@/components/RandomUserCard';

const ProfilePage = () => {
  return (
    <>
      <Hero />
      <PageAbout />
      <BoxImage />
      {/* <Container maxW="container.xl" py={10}> */}
        <TextImageSection />
        <TextImageSection2/>
        <TextImageSection3/>
        <RandomUserCard/>
      {/* </Container> */}
    </>
  );
};

export default ProfilePage;
