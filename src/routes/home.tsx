import { ArrowForwardIcon } from '@chakra-ui/icons'
import { Button, Center, Heading, HStack, VStack } from '@chakra-ui/react'

function Home() {
  return (
    <Center height="100vh" width="100vw">
      <VStack>
        <Heading as="h1" size="3xl" mb={20}>
          <VStack>
            <span>Outils pour</span>
            <span>Donjons & Dragons</span>
          </VStack>
        </Heading>
        <HStack>
          <Button size="xl" colorScheme="teal" rightIcon={<ArrowForwardIcon />}>
            C'est parti
          </Button>
        </HStack>
      </VStack>
    </Center>
  )
}

export default Home
