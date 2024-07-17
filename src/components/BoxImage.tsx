"use client"

import { Box, Text, Image } from '@chakra-ui/react';

const PageAbout = () => {
    return (
        <Box 
            // bg="white"
            // color="black"
            p={6}
            borderRadius="md"
            boxShadow="md"
            maxWidth="auto"
            mx="auto"
            textAlign="center"
            position="relative"
        >
            <Box 
                display="flex"
                justifyContent="center"
                alignItems="center"
                position="relative"
            >
                <Text fontSize="4xl" fontWeight="bold">
                    Nilai Kami
                </Text>
                <Image 
                    src="/mnt/data/image.png" 
                    alt="Character Image"
                    position="absolute"
                    right={0}
                    bottom={0}
                    height="200px" // Adjust height as needed
                />
            </Box>
        </Box>
    );
};

export default PageAbout;
