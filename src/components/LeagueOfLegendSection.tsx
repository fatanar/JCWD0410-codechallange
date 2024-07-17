// components/LeagueOfLegendsSection.tsx
import { Box, Flex, Text, Image } from "@chakra-ui/react";

const LeagueOfLegendsSection = () => {
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
            League of Legends
          </Text>
          <Text mb={4}>
            League of Legends, often abbreviated as LoL, is a multiplayer online
            battle arena (MOBA) game developed and published by Riot Games.
            Released on October 27, 2009, it has become one of the most popular
            and influential games in the world.
          </Text>
          <Text mb={4}>
            In League of Legends, players assume the role of a "champion" with
            unique abilities and battle against a team of other players or
            computer-controlled champions. The goal is to destroy the opposing
            team's Nexus, a structure located within their base, after bypassing
            a series of defensive structures known as turrets.
          </Text>
          <Text mb={4}>
            League of Legends features a variety of game modes, including the
            classic 5v5 Summoner's Rift, the faster-paced 3v3 Twisted Treeline,
            and rotating game modes that offer unique challenges. The game is
            known for its strategic depth, requiring teamwork, coordination, and
            individual skill to achieve victory.
          </Text>
          <Text mb={4}>
            The game's success has spawned a massive esports scene, with
            professional leagues and tournaments held worldwide. The annual
            World Championship is one of the most prestigious events in the
            esports calendar, drawing millions of viewers.
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
            src="/League_of_Legends.jpg" // Update with the correct path to your image
            alt="League of Legends"
            objectFit="cover"
            width="100%"
            height="auto"
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default LeagueOfLegendsSection;
