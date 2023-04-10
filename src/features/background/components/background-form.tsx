import { CardHeader, Heading, SimpleGrid } from '@chakra-ui/react'
import { SelectableCard } from 'components/selectable-card'
import { useField } from 'formik'
import { useBackgrounds } from '../api-hooks'

export function BackgroundForm() {
  const { data: backgrounds } = useBackgrounds()
  const [, { value }, { setValue }] = useField({ name: 'background', type: 'select' })

  if (backgrounds === undefined) return null

  return (
    <SimpleGrid columns={3} width="full">
      {backgrounds.map(background => (
        <SelectableCard key={background.id} selected={background.id === value} onSelect={() => setValue(background.id)}>
          <CardHeader>
            <Heading size="md">{background.name}</Heading>
          </CardHeader>
        </SelectableCard>
      ))}
    </SimpleGrid>
  )
}
