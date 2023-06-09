import { Button, Heading, HStack, Spacer, VStack } from '@chakra-ui/react'
import { AbilityForm } from 'features/ability'
import { BackgroundForm } from 'features/background'
import { ClassForm } from 'features/class'
import { ProficiencyForm } from 'features/proficiency'
import { RaceForm } from 'features/race'
import { useCharacterFormContext } from '../context'

export function CharacterFormPanel() {
  const { currentStep, goToPreviousStep, goToNextStep, canGoPrevious, canGoNext } = useCharacterFormContext()

  function renderFormStep() {
    switch (currentStep) {
      case 'Race':
        return <RaceForm />
      case 'Classe':
        return <ClassForm />
      case 'Historique':
        return <BackgroundForm />
      case 'Caractéristiques':
        return <AbilityForm />
      case 'Maîtrises':
        return <ProficiencyForm />
      default:
        return null
    }
  }

  return (
    <VStack flex={1} align="start" spacing={10} paddingY={10} paddingX={24} overflow="scroll">
      <HStack width="full" spacing={4}>
        <Heading size="2xl" variant="brand">
          {currentStep}
        </Heading>
        <Spacer />
        {canGoPrevious && (
          <Button size="lg" onClick={goToPreviousStep}>
            Retour
          </Button>
        )}
        {canGoNext && (
          <Button size="lg" colorScheme="blue" onClick={goToNextStep}>
            Suivant
          </Button>
        )}
      </HStack>
      {renderFormStep()}
    </VStack>
  )
}
