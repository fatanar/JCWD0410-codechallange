"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Box,
  Avatar,
  Heading,
  Text,
  Stack,
  Badge,
  Spinner,
  Flex,
  useColorModeValue,
} from "@chakra-ui/react";

interface User {
  name: {
    first: string;
    last: string;
  };
  picture: {
    large: string;
  };
  email: string;
  location: {
    city: string;
    country: string;
  };
}

const RandomUserCard: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const bg = useColorModeValue("white", "gray.900");
  const bg1 = useColorModeValue("gray.700", "gray.400");
  const bg2 = useColorModeValue("gray.50", "gray.800");
  const bg3 = useColorModeValue("gray.50", "gray.800");
  const bg4 = useColorModeValue("gray.50", "gray.800");

  useEffect(() => {
    axios
      .get("https://randomuser.me/api/?results=10")
      .then((response) => {
        setUsers(response.data.results);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching random users:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Spinner size="xl" />;
  }

  return (
    <Box
      minH="100vh"
      backgroundImage="url('/brickwall.jpg')"
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      color="black"
      py={10}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Heading as="h2" size="lg" mb={6} color="white">
        Tim Pengembang
      </Heading>
      <Flex wrap="wrap" justifyContent="center" gap={6}>
        {users.map((user, index) => (
          <Box
            key={index}
            maxW={"320px"}
            w={"full"}
            bg={bg}
            boxShadow={"2xl"}
            rounded={"lg"}
            p={6}
            textAlign={"center"}
            display="flex"
            flexDirection="column"
            alignItems="center"
            _hover={{ boxShadow: "lg" }}
          >
            <Avatar
              size={"xl"}
              src={user.picture.large}
              mb={4}
              pos={"relative"}
              _after={{
                content: '""',
                w: 4,
                h: 4,
                bg: "green.300",
                border: "2px solid white",
                rounded: "full",
                pos: "absolute",
                bottom: 0,
                right: 3,
              }}
            />
            <Heading fontSize={"2xl"} fontFamily={"body"}>
              {user.name.first} {user.name.last}
            </Heading>
            <Text fontWeight={600} color={"gray.500"} mb={4}>
              @{user.name.first.toLowerCase()}_{user.name.last.toLowerCase()}
            </Text>
            <Text
              textAlign={"center"}
              color={bg1}
              px={3}
            >
              {user.email}
              <Text color={"blue.400"}>
                {user.location.city}, {user.location.country}
              </Text>
            </Text>

            <Stack align={"center"} justify={"center"} direction={"row"} mt={6}>
              <Badge
                px={2}
                py={1}
                bg={bg2}
                fontWeight={"400"}
              >
                #golf
              </Badge>
              <Badge
                px={2}
                py={1}
                bg={bg3}
                fontWeight={"400"}
              >
                #programmer
              </Badge>
              <Badge
                px={2}
                py={1}
                bg={bg4}
                fontWeight={"400"}
              >
                #gamer
              </Badge>
            </Stack>
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default RandomUserCard;
