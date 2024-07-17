"use client"
import {
    Heading,
    Avatar,
    Box,
    Center,
    Image,
    Flex,
    Text,
    Stack,
    useColorModeValue,
  } from '@chakra-ui/react'
  
  interface TestimonialCardProps {
    name: string;
    title: string;
    avatar: string;
    testimonial: string;
  }
  
  const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, title, avatar, testimonial }) => {
    return (
      <Center py={6}>
        <Box
          maxW={'270px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'2xl'}
          rounded={'md'}
          overflow={'hidden'}>
          <Image
            h={'120px'}
            w={'full'}
            src={
              'https://images.unsplash.com/photo-1612865547334-09cb8cb455da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
            }
            objectFit="cover"
            alt="gambar"
          />
          <Flex justify={'center'} mt={-12}>
            <Avatar
              size={'xl'}
              src={avatar}
              css={{
                border: '2px solid white',
              }}
            />
          </Flex>
  
          <Box p={6}>
            <Stack spacing={0} align={'center'} mb={5}>
              <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
                {name}
              </Heading>
              <Text color={'gray.500'}>{title}</Text>
            </Stack>
  
            <Text textAlign={'center'} color={useColorModeValue('gray.700', 'gray.400')} px={3}>
              {testimonial}
            </Text>
          </Box>
        </Box>
      </Center>
    )
  }
  
  export default TestimonialCard;
