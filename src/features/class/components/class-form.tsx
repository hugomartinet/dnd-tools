import { CardHeader, Heading, SimpleGrid } from '@chakra-ui/react'
import SelectableCard from 'components/selectable-card'
import { useField } from 'formik'
import { useClasses } from '../api-hooks'
import { ClassImage } from './class-image'

export function ClassForm() {
  const { data: classes } = useClasses()
  const [, { value }, { setValue }] = useField({ name: 'class', type: 'select' })

  if (classes === undefined) return null

  return (
    <SimpleGrid columns={3} width="full">
      {classes.map(_class => (
        <SelectableCard key={_class.id} selected={_class.id === value} onSelect={() => setValue(_class.id)}>
          <CardHeader display="inline-flex" alignItems="center">
            <ClassImage _class={_class} />
            <Heading size="md" marginLeft={4}>
              {_class.name}
            </Heading>
          </CardHeader>
        </SelectableCard>
      ))}
    </SimpleGrid>
  )
}
