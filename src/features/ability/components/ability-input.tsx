import { Card, CardBody, CardHeader, Divider, Heading, HStack, Spacer, Text, VStack } from '@chakra-ui/react'
import { NumberInput, SelectInput } from 'components/input'
import { capitalize } from 'lodash'
import { getModifier, signed } from '../helpers'
import { useAbilityInput, useAbilityInputOptions } from '../hooks'
import { type Ability } from '../types'

interface AbilityInputProps {
  name: Ability
  mode: 'points' | 'roll'
}

export function AbilityInput({ name, mode }: AbilityInputProps) {
  const { raceBonus, total, hasValue } = useAbilityInput(name)
  const options = useAbilityInputOptions()

  function renderInput() {
    switch (mode) {
      case 'points':
        return <NumberInput name={`abilities.${name}`} min={8} max={15} flex={1} />
      case 'roll':
        return <SelectInput name={`abilities.${name}`} options={options} parse={Number} flex={1} />
      default:
        throw new Error(`Ability input mode not handled: ${String(mode)}`)
    }
  }

  return (
    <Card>
      <CardHeader display="flex" width="full">
        <Heading size="lg">{capitalize(name)}</Heading>
        <Spacer />
        <Heading size="lg">{hasValue ? getModifier(total) : '-'}</Heading>
      </CardHeader>

      <CardBody>
        <VStack align="start" spacing={4}>
          <Divider />
          <HStack width="full">
            <Text flex={1}>Valeur de base</Text>
            {renderInput()}
          </HStack>
          <HStack width="full">
            <Text>Bonus de race</Text>
            <Spacer />
            <Text fontSize="xl">{signed(raceBonus)}</Text>
          </HStack>
          <HStack width="full">
            <Text fontWeight="semibold">Total</Text>
            <Spacer />
            <Text fontSize="xl" fontWeight="semibold">
              {hasValue ? total : '-'}
            </Text>
          </HStack>
        </VStack>
      </CardBody>
    </Card>
  )
}
