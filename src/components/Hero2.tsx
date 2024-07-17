// src/components/Hero.tsx
"use client";

import { useState } from 'react';
import { Box, Flex, Container } from "@chakra-ui/react";

const Hero2 = () => {
  const [activeImage, setActiveImage] = useState(0);

  const images = [
    '/Valoranthd.jpg', 
    '/wildrift.jpg', 
    '/runterra.jpg', 
  ];

  const handleImageChange = () => {
    setActiveImage((prev) => (prev + 1) % images.length);
  };

  return (
    <Box
      as="section"
      height="100vh"
      position="relative"
      display="flex"
      alignItems="center"
      justifyContent="center"
      color="white"
      overflow="hidden"
    >
      <Container maxW="container.xl" height="100%" position="relative" display="flex" alignItems="center" justifyContent="center">
        {images.map((image, index) => (
          <Box
            key={index}
            backgroundImage={`url(${image})`}
            backgroundPosition="center"
            backgroundSize="cover"
            backgroundRepeat="no-repeat"
            position="absolute"
            top="50%"
            left="50%"
            width="100%"
            height="100%"
            transform="translate(-50%, -50%)"
            zIndex={activeImage === index ? 0 : -1}
            opacity={activeImage === index ? 1 : 0}
            transition="opacity 0.5s ease"
          />
        ))}
      </Container>

      <Flex
        position="absolute"
        bottom="10px"
        left="50%"
        transform="translateX(-50%)"
        alignItems="center"
        justifyContent="center"
        onClick={handleImageChange}
      >
        {images.map((_, index) => (
          <Box
            key={index}
            width="10px"
            height="10px"
            borderRadius="50%"
            bg={activeImage === index ? 'teal' : 'gray'}
            mx="2"
            transition="background-color 0.3s ease"
            cursor="pointer"
          />
        ))}
      </Flex>
    </Box>
  );
};

export default Hero2;
