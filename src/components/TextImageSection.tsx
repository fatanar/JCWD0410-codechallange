// components/TextImageSection.tsx
import { Box, Flex, Text, Image, Button } from '@chakra-ui/react';

const TextImageSection = () => {
  return (
    <Box bg="#e7e6e3" color={"black"} py={10}>
      <Flex direction={['column', 'row']} align="center" maxW="container.xl" mx="auto" px={5}>
        <Box flex="1">
          <Image
            src="/sosisal.png" // Update with the correct path to your image
            alt="Community Event"
            objectFit="cover"
            width="100%"
            height="auto"
          />
        </Box>
        <Box flex="1" ml={[0, 10]} mt={[10, 0]} p={5}>
          <Text fontSize="2xl" fontWeight="bold" mb={4}>
            Dampak Sosial
          </Text>
          <Text mb={4}>
            Kami percaya bahwa siapa pun yang memiliki semangat, visi, dan ketekunan dapat memberikan dampak positif. Sebagai bagian dari etos tersebut, kami juga percaya bahwa ada cara untuk kami, sebagai perusahaan, untuk dapat memberikan manfaat jangka panjang dan dampak positif kepada para pemain, mitra, Rioter, dan komunitas yang kami layani.
          </Text>
          <Text mb={4}>
            Melalui tanggung jawab sosial perusahaan, kami berharap dapat membantu membangun dunia yang lebih positif bagi para pemain dan komunitas kami. Untuk melakukannya, kami berfokus pada penciptaan akses yang setara ke pendidikan, pengembangan keterampilan, dan promosi sikap kewarganegaraan yang positif di seluruh dunia.
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default TextImageSection;
