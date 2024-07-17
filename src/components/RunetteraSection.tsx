// components/RuneterraSection.tsx
import { Box, Flex, Text, Image } from "@chakra-ui/react";

const RuneterraSection = () => {
  return (
    <Box bg="#e7e6e3" py={10} color="black">
      <Flex
        direction={["column", "row"]}
        align="center"
        maxW="container.xl"
        mx="auto"
        px={5}
      >
        <Box flex="1" p={5}>
          <Text fontSize="2xl" fontWeight="bold" mb={4}>
            Legends of Runeterra
          </Text>
          <Text mb={4}>
            Legends of Runeterra is a free-to-play digital collectible card game
            developed and published by Riot Games. It was released on April 29,
            2020, and is set in the world of Runeterra, which is the same
            universe as Riot's popular game, League of Legends.
          </Text>
          <Text mb={4}>
            In Legends of Runeterra, players build decks using cards from
            various regions of Runeterra, each with its own unique playstyle and
            strategy. The game features a dynamic, alternating turn structure
            where players can react to their opponent's moves, creating a highly
            strategic and engaging gameplay experience.
          </Text>
          <Text mb={4}>
            Players can acquire cards through gameplay and in-game rewards,
            ensuring that everyone has the opportunity to build competitive
            decks without spending money. The game also features regular
            updates, new card releases, and various events to keep the gameplay
            fresh and exciting.
          </Text>
          <Text mb={4}>
            Legends of Runeterra has been praised for its innovative mechanics,
            generous free-to-play model, and deep strategic gameplay. It offers
            a rich and immersive experience for fans of collectible card games
            and the lore of the League of Legends universe.
          </Text>
        </Box>
        <Box
          flex="1"
          p={5}
          ml={[0, 10]}
          mt={[10, 0]}
          style={{ marginRight: "-20px" }}
        >
          <Image
            src="/runterra.jpg" // Update with the correct path to your image
            alt="Legends of Runeterra"
            objectFit="cover"
            width="100%"
            height="auto"
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default RuneterraSection;
