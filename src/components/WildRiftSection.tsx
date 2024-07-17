// components/WildRiftSection.tsx
import { Box, Flex, Text, Image } from "@chakra-ui/react";

const WildRiftSection = () => {
  return (
    <Box bg="#e7e6e3" color={"black"} py={10}>
      <Flex
        direction={["column", "row"]}
        align="center"
        maxW="container.xl"
        mx="auto"
        px={5}
      >
        <Box flex="1">
          <Image
            src="/wildrift.jpg" // Update with the correct path to your image
            alt="Wild Rift"
            objectFit="cover"
            width="100%"
            height="auto"
          />
        </Box>
        <Box flex="1" ml={[0, 10]} mt={[10, 0]} p={5}>
          <Text fontSize="2xl" fontWeight="bold" mb={4}>
            League of Legends: Wild Rift
          </Text>
          <Text mb={4}>
            League of Legends: Wild Rift is a mobile version of the popular PC
            game League of Legends, developed and published by Riot Games.
            Released in October 2020, Wild Rift brings the fast-paced, strategic
            gameplay of League of Legends to mobile and console platforms,
            offering a fresh yet familiar experience to both new and veteran
            players.
          </Text>
          <Text mb={4}>
            In Wild Rift, players take on the role of champions with unique
            abilities and battle against a team of other players or
            computer-controlled champions. The objective is to destroy the
            opposing team's Nexus, a structure located within their base, while
            navigating through various lanes and engaging in combat with enemy
            champions and turrets.
          </Text>
          <Text mb={4}>
            Wild Rift features a revamped control scheme optimized for mobile
            and console play, with shorter match times compared to its PC
            counterpart, making it accessible for gaming on the go. The game
            retains the core elements that made League of Legends a global
            sensation, including strategic depth, teamwork, and skillful play.
          </Text>
          <Text mb={4}>
            With regular updates, new champions, and various in-game events,
            Wild Rift continues to grow its community and establish itself as a
            significant title in the mobile esports scene. Riot Games'
            commitment to maintaining a balanced and competitive environment
            ensures that Wild Rift remains engaging for players of all skill
            levels.
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default WildRiftSection;
