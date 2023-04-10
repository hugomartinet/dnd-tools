import { Heading, SimpleGrid, VStack } from '@chakra-ui/react'
import { SelectInput } from 'components/input'
import { Fragment } from 'react'
import { useOtherProficienciesForm } from '../hooks'

export function OtherProficiencyForm() {
  const groupedInputsProps = useOtherProficienciesForm()

  return (
    <VStack spacing={6} width="full" align="start">
      {Object.keys(groupedInputsProps).map(category => (
        <Fragment key={category}>
          <Heading size="lg">{labels[category]}</Heading>
          <SimpleGrid columns={3} spacing={4} width="full">
            {groupedInputsProps[category].map(({ name, options, forcedValue }) => (
              <SelectInput
                key={name}
                name={name}
                options={options.map(option => ({ ...option, optionGroup: labels[option.optionGroup ?? ''] }))}
                forcedValue={forcedValue}
              />
            ))}
          </SimpleGrid>
        </Fragment>
      ))}
    </VStack>
  )
}

const labels: Record<string, string> = {
  artisan: "Outils d'artisan",
  instrument: 'Instruments de musique',
  jeu: 'Jeux',
  kit: 'Kits',
  langue: 'Langues',
  outil: 'Outils',
  véhicule: 'Véhicules',
  autre: 'Autres',
}
