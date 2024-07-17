// components/TextImageSection.tsx
import { Box, Flex, Text, Image, Button } from "@chakra-ui/react";

const TextImageSection2 = () => {
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
            Keberlanjutan
          </Text>
          <Text mb={4}>
            "Keberlanjutan lingkungan adalah masalah penting bagi para pemain,
            Riot, dan seluruh dunia. Meskipun keberlanjutan selalu menjadi
            sesuatu yang kami perjuangkan, sudah waktunya untuk memperjelas
            komitmen kami. Dengan bekerja keras, berkolaborasi dengan mitra yang
            memiliki dampak besar, dan berbagi praktik terbaik dengan industri
            game lainnya, kami dapat, dan harus, terus maju demi dunia yang
            lebih sehat".
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
            src="/ivern.png" // Update with the correct path to your image
            alt="Keberlanjutan"
            objectFit="cover"
            width="100%"
            height="auto"
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default TextImageSection2;
