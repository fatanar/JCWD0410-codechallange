"use client"
import React from 'react';
import { Box, Container, Grid, GridItem, Heading, VStack, Flex, Text } from "@chakra-ui/react";

interface Game {
  title: string;
  thumbnail: string;
  author: string;
  category: string;
  description: string;
}

const GamesSection = ({ title,  thumbnail, author, category, description }: Game) => (
    <Box 
      bgImage={`url(${thumbnail})`}
      backgroundSize="cover"
      backgroundPosition="center"
      h="auto"
      w="auto"
      position="relative"
      overflow="hidden"
      p="1.5em"
      zIndex={1}
      display="flex"
      flexDirection="column"
      justifyContent="end"
      className="group"
    >
      <Box
        position="absolute"
        top={0}
        left={0}
        h="full"
        w="full"
        bgGradient="linear(to-t, blackAlpha.600, transparent)"
      />
      <VStack color="black" zIndex={2} position="relative" spacing="0.5em" w="full">
        <Box w="full">
          <Heading fontWeight="bold" fontSize="1.5em" color="white">
            {title}
          </Heading>
          <Text color="white" fontWeight="semibold" fontSize="1xl">
            by {author}
          </Text>
        </Box>

        <Flex justifyContent="flex-end" alignItems="center" gap="0.5em" w="full">
          <Box
            bgColor="white"
            px="0.5em"
            py="0.05em"
            cursor="pointer"
            transition="all 0.3s"
            _hover={{ bg: "#222222", color: "white" }}
            fontSize="14px"
            fontWeight="normal"
          >
            {category}
          </Box>
        </Flex>
      </VStack>
      <Text
        color="white"
        fontWeight="light"
        position="relative"
        h="0em"
        _groupHover={{ h: "7em" }}
        transition="height 0.5s"
        overflow="hidden"
      >
        {description}
      </Text>
    </Box>
);


export default GamesSection;
