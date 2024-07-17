// src/components/Sidebar.tsx
"use client";

import { Box, Link, Button, VStack,Text } from '@chakra-ui/react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  return (
    <Box
      position="fixed"
      top="0"
      left={isOpen ? "0" : "-100%"}
      width="250px"
      height="100vh"
      bg="white"
      color="black"
      zIndex="1000"
      transition="left 0.3s ease"
      p="4"
    >
      <Button onClick={onClose} mb="8" colorScheme="teal">Close</Button>
      <VStack align="start">
        <Link href="/" mb="2"><Text cursor="pointer" _hover={{color: "blue"}}> Home</Text></Link>
        <Link href="/about" mb="2"><Text cursor="pointer" _hover={{color: "blue"}}> About</Text></Link>
        <Link href="/product" mb="2"><Text cursor="pointer" _hover={{color: "blue"}}> Product</Text></Link>
        <Link href="/team" mb="2"><Text cursor="pointer" _hover={{color: "blue"}}> Team</Text></Link>
      </VStack>
    </Box>
  );
};

export default Sidebar;
