import { Box, Text, Button } from '@chakra-ui/react'
import Image from 'next/image'
import image from '../../public/images/illustration.png'

export default function Home() {
  return (
    <Box
      height='80vh'
      width='100%'
      maxWidth='1000px'
      display='flex'
      justifyContent='space-between'
      alignItems='center'
      margin='0 auto'
    >
      <Box
        maxWidth='600px'
      >
        <Text
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          bgClip="text"
          fontSize="6xl"
          fontWeight="extrabold"
          lineHeight='4rem'
        >
          Receive questions from people
        </Text>
        <Text
          mt='4'
        >
          Contrary to popular belief, Lorem Ipsum is not simply random text.
          It has roots in a piece of classical Latin literature from 45 BC,
          making it over 2000 years old. Richard McClintock,
          a Latin professor at Hampden-Sydney College in Virginia
        </Text>
        <Button
          mt='8'
          bgGradient="linear(to-r, #7928CA, #FF0080)"
          color='#fff'
          size='lg'
          _hover={{
            bgGradient: "linear(to-r, #7928CA, #FF0080)",
          }}
        >
          Connect wallet
        </Button>
      </Box>
      <Image src={image} alt="Dan Abramov" />
    </Box>
  )
}
