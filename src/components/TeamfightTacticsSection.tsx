// components/TeamfightTacticsSection.tsx
import { Box, Flex, Text, Image } from '@chakra-ui/react';

const TeamfightTacticsSection = () => {
  return (
    <Box bg="#e7e6e3" py={10} color="black">
      <Flex direction={['column', 'row']} align="center" maxW="container.xl" mx="auto" px={5}>
        <Box flex="1">
          <Image
            src="/teamfight.jpg" // Update with the correct path to your image
            alt="Teamfight Tactics"
            objectFit="cover"
            width="100%"
            height="auto"
          />
        </Box>
        <Box flex="1" ml={[0, 10]} mt={[10, 0]} p={5}>
          <Text fontSize="2xl" fontWeight="bold" mb={4}>
            Teamfight Tactics
          </Text>
          <Text mb={4}>
            Teamfight Tactics (TFT) is an auto battler game developed and published by Riot Games. Released in June 2019, TFT is set in the world of League of Legends and features characters and items from the popular MOBA.
          </Text>
          <Text mb={4}>
            In Teamfight Tactics, players compete against seven others in a free-for-all race to build the most powerful team. Players collect gold, purchase and upgrade units, and strategically place them on the battlefield. Each round, teams automatically fight each other, and players are eliminated when their health reaches zero.
          </Text>
          <Text mb={4}>
            TFT requires strategic planning, adaptability, and a bit of luck to succeed. Players must consider unit synergies, item combinations, and the ever-changing player economy to outlast their opponents.
          </Text>
          <Text mb={4}>
            The game features a seasonal model with regular updates, including new sets of champions, items, and mechanics, keeping the gameplay fresh and exciting. TFT has also carved out a niche in the competitive gaming scene with its own tournaments and a growing player base.
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default TeamfightTacticsSection;
