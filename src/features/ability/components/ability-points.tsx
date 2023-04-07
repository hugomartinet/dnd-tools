import { Box, Stat, StatLabel, StatNumber } from '@chakra-ui/react'
import { useAbilityPointsLeft } from '../hooks'

export function AbilityPoints() {
  const pointsLeft = useAbilityPointsLeft()
  return (
    <Box height={20}>
      <Stat>
        <StatLabel>Points restants</StatLabel>
        <StatNumber fontSize="3xl" color={pointsLeft < 0 ? 'red.500' : 'black'}>
          {pointsLeft} / 27
        </StatNumber>
      </Stat>
    </Box>
  )
}
