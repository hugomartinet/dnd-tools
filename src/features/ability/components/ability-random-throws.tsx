import { HStack, Text, VStack } from '@chakra-ui/react'
import { NumberInput } from 'components/input'

export function AbilityRandomThrows() {
  return (
    <VStack width="full" align="start" height={20}>
      <Text>Lancez 6 fois 4d6. Pour chaque jet, notez la somme des 3 dés les plus élevés.</Text>
      <HStack width="full">
        {[0, 1, 2, 3, 4, 5].map(index => (
          <NumberInput key={`throw-${index}`} name={`throws[${index}]`} min={3} max={18} />
        ))}
      </HStack>
    </VStack>
  )
}
