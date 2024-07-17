import { Box, Flex, Text, Image } from "@chakra-ui/react";

const Teamimage = () => {
  return (
    <Box bg="#e7e6e3" py={10} color="black">
      <Flex
        direction={["column", "row"]}
        align="center"
        maxW="container.xl"
        mx="auto"
        px={5}
      >
        <Box flex="1" p={5} mr={[0, 10]} mt={[10, 0]}>
          <Image
            src="/sosisal.png" // Update with the correct path to your image
            alt="Team"
            objectFit="cover"
            width="100%"
            height="auto"
          />
        </Box>
        <Box flex="1" p={5} ml={[0, 10]}>
          <Text fontSize="2xl" fontWeight="bold" mb={4}>
            Our Team
          </Text>
          <Text mb={4}>
            "Our team is comprised of dedicated professionals who are passionate
            about sustainability and environmental issues. At Riot, we believe
            in working together to create a better world. By collaborating with
            impactful partners and sharing best practices within the gaming
            industry, we are committed to making continuous progress towards a
            healthier planet."
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default Teamimage;
