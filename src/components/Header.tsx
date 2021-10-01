import { Box, Text } from '@chakra-ui/react'

export default function Header() {
  return (
    <Box
      width='100%'
      display='flex'
      justifyContent='center'
      alignItems='center'
      margin='1rem auto'
    >
      <Text
        bgGradient="linear(to-l, #7928CA, #FF0080)"
        bgClip="text"
        fontWeight='bold'
        fontSize='lg'
      >
        curiouskitten.
      </Text>
    </Box>
  )
}