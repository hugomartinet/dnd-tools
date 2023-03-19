import { AddIcon } from '@chakra-ui/icons'
import { Button, Center, Heading, HStack, VStack } from '@chakra-ui/react'

function CharacterList() {
  return (
    <Center height="100vh" width="100vw">
      <VStack>
        <Heading as="h1" size="3xl" mb={20}>
          Vos personnages
        </Heading>
        <HStack>
          <Button size="xl" leftIcon={<AddIcon />}>
            Ajouter un personnage
          </Button>
        </HStack>
      </VStack>
    </Center>
  )
}

export default CharacterList
