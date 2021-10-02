import { Box, Avatar, Text, Input, Button, Stack, HStack } from '@chakra-ui/react';

export default function Profile() {
  return (
    <Box
      width='100%'
      display='flex'
      alignItems='center'
      justifyContent='center'
      pt='8'
      flexDirection='column'
    >
      <Avatar
        size='2xl'
        src='https://github.com/helderavila.png'
      />
      <Text mt='4'>0x98984234768474242</Text>
      <HStack
        width='100%'
        maxWidth='500px'
        mt='4'
      >
        <Input
          placeholder='Ask somenthing here'
        />
        <Button colorScheme='purple'>
          Send
        </Button>
      </HStack>
      <Stack
        mt='6'
        spacing='4'
      >
        <Box
          boxShadow='base'
          width='100%'
          minWidth='500px'
          padding='4'
          borderRadius='4'
        >
          <Text>Qual o sentido da vida?</Text>
          <Text fontSize='xs' color='gray.400'>Sent by 0x2134213...3132213948</Text>
        </Box>
        <Box
          boxShadow='base'
          width='100%'
          minWidth='500px'
          padding='4'
          borderRadius='4'
        >
          <Text>Qual o sentido da vida?</Text>
          <Text fontSize='xs' color='gray.400'>Sent by 0x2134213...3132213948</Text>
        </Box>
      </Stack>
    </Box>
  )
}