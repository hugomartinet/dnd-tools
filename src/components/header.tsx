import { Button, Heading, HStack } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

export function Header() {
  const navigate = useNavigate()
  return (
    <HStack paddingX={8} paddingY={2} backgroundColor="blue.600" color="white" boxShadow="base" zIndex="sticky">
      <Heading as="h1" size="xl" variant="brand">
        dnd tools
      </Heading>
      <HStack paddingLeft={8}>
        <Button variant="ghost" _hover={{ backgroundColor: 'blue.500' }} onClick={() => navigate('/create-character')}>
          Créer un personnage
        </Button>
      </HStack>
    </HStack>
  )
}
