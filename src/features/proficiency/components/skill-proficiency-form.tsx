import { Heading, VStack } from '@chakra-ui/react'
import { MultiCheckboxInput } from 'components/input'
import { useSkillProficienciesForm } from '../hooks'

export function SkillProficiencyForm() {
  const { options, forcedSkills, limit } = useSkillProficienciesForm()

  return (
    <VStack spacing={6} align="start">
      <Heading size="lg">Compétences</Heading>
      <MultiCheckboxInput name="skills" options={options} forcedValues={forcedSkills} limit={limit} />
    </VStack>
  )
}
