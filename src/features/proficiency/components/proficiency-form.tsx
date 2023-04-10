import { HStack } from '@chakra-ui/react'
import { OtherProficiencyForm } from './other-proficiency-form'
import { SkillProficiencyForm } from './skill-proficiency-form'

export function ProficiencyForm() {
  return (
    <HStack spacing={40} width="full" align="start">
      <SkillProficiencyForm />
      <OtherProficiencyForm />
    </HStack>
  )
}
