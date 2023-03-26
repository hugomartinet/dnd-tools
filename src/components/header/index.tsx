import { Button, Heading, HStack } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

export function Header() {
  const navigate = useNavigate()
  return (
    <HStack paddingX={8} paddingY={4} backgroundColor="blue.600" color="white" boxShadow="base" zIndex="sticky">
      <Heading size="lg">dnd tools</Heading>
      <HStack paddingLeft={8}>
        <Button variant="ghost" _hover={{ backgroundColor: 'blue.500' }} onClick={() => navigate('/create-character')}>
          Créer un personnage
        </Button>
      </HStack>
    </HStack>
  )
}
