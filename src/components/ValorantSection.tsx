// components/ValorantSection.tsx
import { Box, Flex, Text, Image } from "@chakra-ui/react";

const ValorantSection = () => {
  return (
    <Box bg="#e7e6e3" color="black" py={10}>
      <Flex
        direction={["column", "row"]}
        align="center"
        maxW="container.xl"
        mx="auto"
        px={5}
      >
        <Box flex="1">
          <Image
            src="/Valoranthd.jpg" // Update with the correct path to your image
            alt="Valorant"
            objectFit="cover"
            width="100%"
            height="auto"
          />
        </Box>
        <Box flex="1" ml={[0, 10]} mt={[10, 0]} p={5}>
          <Text fontSize="2xl" fontWeight="bold" mb={4}>
            Valorant
          </Text>
          <Text mb={4}>
            Valorant is a free-to-play first-person tactical shooter developed
            and published by Riot Games. First teased under the codename Project
            A in October 2019, the game was officially released on June 2, 2020.
            Valorant combines precise gunplay with unique character abilities to
            create an intense and strategic gaming experience.
          </Text>
          <Text mb={4}>
            Players take on the role of "agents," who come from different parts
            of the world and possess unique abilities. The game emphasizes
            team-based strategies and requires players to work together to
            achieve their objectives. Whether planting or defusing a bomb,
            securing an area, or eliminating opponents, teamwork and skill are
            essential for victory.
          </Text>
          <Text mb={4}>
            Valorant has gained a massive following and has become a prominent
            title in the competitive gaming scene, with frequent updates, new
            content, and a vibrant esports community. Its blend of tactical
            gameplay and character-driven mechanics sets it apart in the genre
            and continues to attract players worldwide.
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default ValorantSection;
