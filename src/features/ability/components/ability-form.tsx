import { CardBody, Heading, SimpleGrid, VStack } from '@chakra-ui/react'
import SelectableCard from 'components/selectable-card'
import { useAbilityFormMode } from '../hooks'
import { AbilityInput } from './ability-input'
import { AbilityPoints } from './ability-points'
import { AbilityRandomThrows } from './ability-random-throws'

const abilities = ['force', 'dextérité', 'constitution', 'intelligence', 'sagesse', 'charisme'] as const

export function AbilityForm() {
  const { mode, changeMode } = useAbilityFormMode()

  return (
    <VStack spacing={8}>
      <SimpleGrid columns={2} width="full">
        <SelectableCard selected={mode === 'roll'} onSelect={() => changeMode('roll')}>
          <CardBody>
            <Heading size="md">Lancer de dés</Heading>
          </CardBody>
        </SelectableCard>
        <SelectableCard selected={mode === 'points'} onSelect={() => changeMode('points')}>
          <CardBody>
            <Heading size="md">Répartition de points</Heading>
          </CardBody>
        </SelectableCard>
      </SimpleGrid>

      {mode === 'points' ? <AbilityPoints /> : <AbilityRandomThrows />}

      <SimpleGrid width="full" columns={3} spacing={4}>
        {abilities.map(ability => (
          <AbilityInput key={ability} name={ability} mode={mode} />
        ))}
      </SimpleGrid>
    </VStack>
  )
}
