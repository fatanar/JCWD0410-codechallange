// components/TextImageSection.tsx
import { Box, Flex, Text, Image, Button } from "@chakra-ui/react";

const TextImageSection3 = () => {
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
            src="/astra-wallpapers-purple.png" // Update with the correct path to your image
            alt="Community Event"
            objectFit="cover"
            width="100%"
            height="auto"
          />
        </Box>
        <Box flex="1" ml={[0, 10]} mt={[10, 0]} p={5}>
          <Text fontSize="2xl" fontWeight="bold" mb={4}>
            Keragaman & Inklusi
          </Text>
          <Text mb={4}>
            "Kami berfokus untuk menjadikan Riot rumah yang nyaman bagi
            orang-orang yang suka membuat game dan menetapkan standar tinggi
            untuk keragaman dan inklusi".
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default TextImageSection3;
