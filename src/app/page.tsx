import { Box, Container, Grid, Heading, Text, Flex, SimpleGrid } from '@chakra-ui/react';
import Hero from "../components/Hero";
import GamesSection from '@/components/GamesSection';
import { getEntries } from '@/libs/contentful';
import TestimonialCard from '@/components/Testimone';

const testimonials = [
  {
    name: 'John Doe',
    title: 'Valorant',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
    testimonial: 'Permainan yang sangat menarik,dan mudah dimainkan merupakan sebuah permainan FPS yang sangat menarik sekali',
  },
  {
    name: 'Jane Smith',
    title: 'Wild Rift',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjE3Nzg0fQ&auto=format&fit=crop&w=200&q=80',
    testimonial: 'Merupakan sebuah permainan moba yang sangat seru sekali',
  },
  {
    name: 'Emily Johnson',
    title: 'Legends of Runterra',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
    testimonial: 'permainan ini dibutuhkan sebuah taktik yang sangat bagus demi membalik keadaan',
  },
]

const ProfilePage = async () => {
  const games = await getEntries();

  return (
    <>
        <Hero />
        <Flex
          backgroundColor= "#d9d8d4" // Semi-transparent background
          color="black"
          p="4"
          justifyContent="space-around"
          mb={6}
        >
          <Box textAlign="center">
            <Text as="a" href="#sejarah" fontSize="lg" fontWeight="bold">Overview</Text>
          </Box>
          <Box textAlign="center">
            <Text as="a" href="#games" fontSize="lg" fontWeight="bold">Game</Text>
          </Box>
          <Box textAlign="center">
            <Text as="a" href="#testimoni" fontSize="lg" fontWeight="bold">Testimoni</Text>
          </Box>
        </Flex>

      <Container maxW="container.xl" py={10} id="sejarah">
        <Box fontFamily="Poppins, sans-serif" textAlign="center">
          <Heading as={"h1"} size="xl" mb={6} textAlign="center">Empowering Players, Inspiring Developers</Heading>
          
          <Box mb={6}>
            <Heading as="h2" size="lg" mb={4}>Sejarah</Heading>
            <Text>
              Riot Games didirikan pada 2006 untuk menciptakan game dan pengalaman yang lebih baik bagi pemain.
              Pada 2009, kami meluncurkan judul debut, League of Legends, yang kemudian menjadi salah satu game PC yang paling banyak dimainkan di dunia. 
              Bertahun-tahun setelahnya, kami merilis VALORANT, Teamfight Tactics, Legends of Runeterra, dan League of Legends: Wild Rift.
              Judul-judul kami dimainkan di beberapa esports paling terkenal di dunia, yang berpuncak pada event seperti League of Legends World Championship serta VALORANT Champions, dan ditonton oleh jutaan penggemar setiap tahunnya. 
              Kami juga mengembangkan IP melalui beragam proyek di bidang musik, buku komik, permainan papan, dan Arcane, serial animasi peraih Emmy.
            </Text>
          </Box>

          <Box mb={6}>
            <Heading as="h2" size="lg" mb={4}>Visi & Misi</Heading>
            <Text>
              Riot Games bertujuan untuk menjadi perusahaan hiburan yang paling berfokus pada pemain di dunia. Mereka berkomitmen untuk menciptakan pengalaman bermain yang luar biasa dan mendalam yang dapat dinikmati oleh para pemain di seluruh dunia.
            </Text>
          </Box>
        </Box>

        <Container maxW="container.xl" py={10} id="games">
          <Heading as="h2" size="xl" mb={6} color="white">Games</Heading>
        </Container>
        <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={6}>
          {games?.map((game, index) =>{
            return (
              <GamesSection
                key={index} 
                title={game.title}  
                thumbnail={game.image.fields.file.url} 
                author={game.author} 
                category={game.category} 
                description={game.description}
              />
            )
          })}
        </Grid>
      </Container>

      <Box 
        minH="100vh"
        backgroundColor="white"
        color="black"
        py={10}
        display="flex"
        flexDirection="column"
        alignItems="center"
        id="testimoni"
      >
        <Container maxW="container.xl" py={10}>
          <Heading as="h2" size="xl" mb={6} color="color">Testimoni</Heading>
        </Container>

        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </SimpleGrid>
      </Box>
    </>
  );
};

export default ProfilePage;
