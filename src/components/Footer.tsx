"use client"
import { Box, Container, Stack, Text, Link, HStack, Icon, Divider } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <Box bg="gray.900" color="white" py={6}>
      <Container maxW="container.lg">
        <Stack direction="column" spacing={6} align="center">
          <HStack spacing={6} justify="center" wrap="wrap">
            <Link href="#" _hover={{ textDecoration: "none" }}>
              PRESS
            </Link>
            <Link href="#" _hover={{ textDecoration: "none" }}>
              SECURITY
            </Link>
            <Link href="#" _hover={{ textDecoration: "none" }}>
              LEGAL
            </Link>
            <Link href="#" _hover={{ textDecoration: "none" }}>
              LEADERSHIP
            </Link>
            <Link href="#" _hover={{ textDecoration: "none" }}>
              CANDIDATE PRIVACY
            </Link>
            <Link href="#" _hover={{ textDecoration: "none" }}>
              TERMS OF SERVICE
            </Link>
            <Link href="#" _hover={{ textDecoration: "none" }}>
              PRIVACY NOTICE
            </Link>
            <Link href="#" _hover={{ textDecoration: "none" }}>
              PLAYER SUPPORT
            </Link>
            <Link href="#" _hover={{ textDecoration: "none" }}>
              E-VERIFY
            </Link>
            <Link href="#" _hover={{ textDecoration: "none" }}>
              ACCESSIBILITY
            </Link>
          </HStack>
          <HStack spacing={6} justify="center">
            <Link href="https://www.facebook.com" isExternal>
              <Icon as={FaFacebook} boxSize={6} />
            </Link>
            <Link href="https://www.twitter.com" isExternal>
              <Icon as={FaTwitter} boxSize={6} />
            </Link>
            <Link href="https://www.linkedin.com" isExternal>
              <Icon as={FaLinkedin} boxSize={6} />
            </Link>
            <Link href="https://www.youtube.com" isExternal>
              <Icon as={FaYoutube} boxSize={6} />
            </Link>
          </HStack>
          <Divider borderColor="gray.700" />
          <HStack spacing={6} justify="center">
            <Text>Cookie Preferences</Text>
            <Text>© 2024 Riot Games, Inc. All Rights Reserved.</Text>
          </HStack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
