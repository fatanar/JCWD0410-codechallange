// src/components/Hero.tsx
"use client";

import { useState } from 'react';
import { Box,Flex } from "@chakra-ui/react";

const Hero = () => {
  const [activeVideo, setActiveVideo] = useState(0);

  const videos = [
    '/VALORANT.mp4',
    '/League of Legends.mp4',
  ];

  const handleVideoChange = () => {
    setActiveVideo((prev) => (prev + 1) % videos.length);
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
      {videos.map((video, index) => (
        <video
          key={index}
          src={video}
          autoPlay
          loop
          muted
          playsInline
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transform: 'translate(-50%, -50%)',
            zIndex: activeVideo === index ? 0 : -1,
            opacity: activeVideo === index ? 1 : 0,
            transition: 'opacity 0.5s ease',
          }}
        />
      ))}

      <Flex
        position="absolute"
        bottom="10px"
        left="50%"
        transform="translateX(-50%)"
        alignItems="center"
        justifyContent="center"
        onClick={handleVideoChange}
      >

        {videos.map((_, index) => (
          <Box
            key={index}
            width="10px"
            height="10px"
            borderRadius="50%"
            bg={activeVideo === index ? 'teal' : 'gray'}
            mx="2"
            transition="background-color 0.3s ease"
          />
        ))}
      </Flex>
    </Box>
  );
};

export default Hero;
