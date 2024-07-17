"use client"

import { Box, Container, Text } from '@chakra-ui/react';

const PageAbout = () => {
    return (
        <Box 
            bg="white"
            color="black"
            p={6}
            borderRadius="md"
            boxShadow="md"
            maxWidth="auto"
            mx="auto"
            textAlign="center" // Added this line to center text
        >
            <Container>
            <Text fontSize="4xl" fontWeight="bold" mb={4}>
                Kami bercita-cita menjadi perusahaan game yang paling berfokus pada pemain di seluruh dunia
            </Text>
            <Text>
                <strong>Riot Games</strong> didirikan pada 2006 untuk menciptakan game dan pengalaman yang lebih baik bagi pemain. Pada 2009, kami meluncurkan judul debut, <em>League of Legends</em>, yang kemudian menjadi salah satu game PC yang paling banyak dimainkan di dunia. Bertahun-tahun setelahnya, kami merilis <em>VALORANT</em>, <em>Teamfight Tactics</em>, <em>Legends of Runeterra</em>, dan <em>League of Legends: Wild Rift</em>. Judul-judul kami dimainkan di beberapa esports paling terkenal di dunia, yang berpuncak pada event seperti <em>League of Legends World Championship</em> serta <em>VALORANT Champions</em>, dan ditonton oleh jutaan penggemar setiap tahunnya. Kami juga mengembangkan IP melalui beragam proyek di bidang musik, buku komik, permainan papan, dan <em>Arcane</em> serial animasi peraih Emmy.
            </Text>
            </Container>
        </Box>
    );
};

export default PageAbout;
