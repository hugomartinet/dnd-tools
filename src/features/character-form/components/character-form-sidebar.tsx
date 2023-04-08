import { Button, Icon, VStack } from '@chakra-ui/react'
import { type IconType } from 'react-icons'
import { TbBook, TbBow, TbDice6, TbHammer, TbSwords, TbUser } from 'react-icons/tb'
import { steps, useCharacterFormContext, type Step } from '../context'

const stepIcons: Record<Step, IconType> = {
  Race: TbUser,
  Classe: TbSwords,
  Historique: TbBook,
  Caractéristiques: TbDice6,
  Maîtrises: TbHammer,
  Equipement: TbBow,
}

export function CharacterFormSidebar() {
  const { currentStep, goToStep } = useCharacterFormContext()

  return (
    <VStack width="320px" height="full" paddingY={8} paddingX={6} backgroundColor="white" boxShadow="base">
      {steps.map(step => (
        <Button
          key={step}
          width="full"
          justifyContent="start"
          paddingX={4}
          variant="ghost"
          aria-selected={currentStep === step}
          _selected={{ backgroundColor: 'gray.100' }}
          leftIcon={<Icon as={stepIcons[step]} color="gray.500" boxSize={6} marginRight={3} />}
          onClick={() => goToStep(step)}
        >
          {step}
        </Button>
      ))}
    </VStack>
  )
}
