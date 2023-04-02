import { CardBody, CardHeader, Heading, SimpleGrid, Text } from '@chakra-ui/react'
import SelectableCard from 'components/selectable-card'
import { modifiersAsText } from 'features/ability/helpers'
import { useField } from 'formik'
import { useRaces } from '../api-hooks'
import { RaceDetails } from './race-details'
import { RaceImage } from './race-image'

export function RaceForm() {
  const { data: races } = useRaces()
  const [, { value }, { setValue }] = useField({ name: 'race', type: 'select' })

  if (races === undefined) return null

  return (
    <SimpleGrid columns={3}>
      {races.map(race => (
        <SelectableCard key={race.id} selected={race.id === value} onSelect={() => setValue(race.id)}>
          <CardHeader display="inline-flex" alignItems="center">
            <RaceImage race={race} />
            <Heading size="md" marginLeft={4}>
              {race.name}
            </Heading>
          </CardHeader>

          <CardBody display="inline-flex" alignItems="center" paddingTop={0}>
            <Text flex={1} fontSize="sm" noOfLines={1}>
              {modifiersAsText(race.modifiers)}
            </Text>
            <RaceDetails race={race} />
          </CardBody>
        </SelectableCard>
      ))}
    </SimpleGrid>
  )
}
