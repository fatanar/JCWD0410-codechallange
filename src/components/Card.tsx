import { Avatar, Box,Heading,Image, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";

interface CardProps {
    title: string;
    description: string;
    imageUrl: string;
    author: string;
    variant?: "left" | "right";
  }
  
  const Card = ({ title, description, imageUrl, author, variant = "left" }: CardProps) => {
    const bgColor = "white";
    const textColor = "gray.700";
    const descColor = "gray.500";
  
    return (
      <Link href={`/${title.toLowerCase().replace(/ /g, '-')}`} passHref>
        <Box
          w="full"
          bg={bgColor}
          boxShadow="2xl"
          rounded="md"
          p={6}
          display="flex"
          flexDirection={variant === "left" ? "column" : "row"}
          alignItems={variant === "left" ? "center" : "flex-start"}
          mb={4}
        >
          {variant === "left" && (
            <Box mb={4} w="full">
              <Image
                src={imageUrl}
                alt={title}
                width="100%"
                height="auto"
                objectFit="cover"
                borderRadius="md"
              />
            </Box>
          )}
          {variant === "right" && (
            <Box flexShrink={0} mr={4}>
              <Image
                src={imageUrl}
                alt={title}
                width="150px"
                height="150px"
                objectFit="cover"
                borderRadius="md"
              />
            </Box>
          )}
          <Box flex="1">
            <Stack spacing={2}>
              <Text
                color="green.500"
                textTransform="uppercase"
                fontWeight={800}
                fontSize="sm"
                letterSpacing={1.1}
              >
                Blog
              </Text>
              <Heading
                color={textColor}
                fontSize="md"
                fontFamily="body"
              >
                {title}
              </Heading>
              <Text color={descColor}>{description}</Text>
            </Stack>
            <Stack mt={2} direction="row" spacing={2} align="center">
              <Avatar src="https://avatars0.githubusercontent.com/u/1164541?v=4" size="sm"  />
              <Stack direction="column" spacing={0} fontSize="xs">
                <Text fontWeight={600}>{author}</Text>
                <Text color="gray.500">Feb 08, 2021 · 6min read</Text>
              </Stack>
            </Stack>
          </Box>
        </Box>
      </Link>
    );
  };

  export default Card