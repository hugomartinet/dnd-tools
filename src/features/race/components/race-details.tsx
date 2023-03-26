import {
  Box,
  Heading,
  IconButton,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  SimpleGrid,
  Text,
  useDisclosure,
  VStack,
} from '@chakra-ui/react'
import { type PropsWithChildren } from 'react'
import { TbHelp } from 'react-icons/tb'
import { modifiersAsText } from '../../ability/helpers'
import { type Race } from '../types'
import { RaceImage } from './race-image'

interface RaceDetailsProps {
  race: Race
}

export function RaceDetails({ race }: RaceDetailsProps) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { name, modifiers, size, speed } = race

  return (
    <>
      <IconButton
        aria-label="details"
        variant="ghost"
        colorScheme="blue"
        icon={<TbHelp size={24} />}
        onClick={onOpen}
      />

      <Modal size="4xl" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalHeader display="inline-flex" alignItems="center">
            <RaceImage race={race} />
            <Heading marginLeft={6}>{name}</Heading>
          </ModalHeader>
          <ModalBody paddingY={10}>
            <VStack align="start" spacing={10}>
              <SimpleGrid columns={2} spacing={6}>
                <Box>
                  <FieldHeading>Augmentation de caractéristiques</FieldHeading>
                  <Text>{modifiersAsText(modifiers)}</Text>
                </Box>

                <Box>
                  <FieldHeading>Taille</FieldHeading>
                  <Text>{size}</Text>
                </Box>

                <Box>
                  <FieldHeading>Vitesse</FieldHeading>
                  <Text>{speed}m / round</Text>
                </Box>

                <Box>
                  <FieldHeading>Langues</FieldHeading>
                  <Text>Commun</Text>
                </Box>
              </SimpleGrid>

              <FieldHeading>Traits</FieldHeading>
              <Text>TO DO</Text>
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

function FieldHeading({ children }: PropsWithChildren) {
  return (
    <Heading as="h4" size="md" marginBottom={2}>
      {children}
    </Heading>
  )
}
