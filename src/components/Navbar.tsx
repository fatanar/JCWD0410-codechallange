// src/components/Navbar.tsx
"use client";

import { useState, useEffect } from 'react';
import { Box, Flex, Link, IconButton, Image } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import Sidebar from './Sidebar';

const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [bgColor, setBgColor] = useState('transparent');

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    if (scrollPosition > window.innerHeight) {
      setBgColor('black');
    } else {
      setBgColor('transparent');
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollPosition]);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleCloseSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <Box
      position="fixed"
      top="0"
      left="0"
      width="100%"
      bg={bgColor}
      zIndex="1000"
      boxShadow="md"
      transition="background-color 0.3s ease"
    >
      <Flex
        alignItems="center"
        justifyContent="space-between"
        px="4"  // Reduced padding
        py="2"  // Reduced padding
        color={bgColor === 'transparent' ? 'white' : 'black'}
      >
        <Image src="/riotgame-removebg-preview.png" alt="Logo" boxSize="60px" />
        <IconButton
          icon={<HamburgerIcon />}
          aria-label="Open Sidebar"
          onClick={handleSidebarToggle}
          color={bgColor === 'transparent' ? 'white' : 'black'}
          variant="ghost"
        />
      </Flex>
      <Sidebar isOpen={isSidebarOpen} onClose={handleCloseSidebar} />
    </Box>
  );
};

export default Navbar;
