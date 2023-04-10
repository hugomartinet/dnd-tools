import { type Option } from 'components/input/types'
import { uniq } from 'lodash'
import { type Proficiency } from './types'

export function getInputPropsFromInstruction(instruction: string, proficiencies: Proficiency[]) {
  const subInstructions = instruction.split('|')
  const categories = uniq(subInstructions.map(getCategoryFromInstruction))
  const category = categories.length === 1 ? categories[0] : 'autre'
  const options = subInstructions.flatMap(instruction => getOptionsFromInstruction(instruction, proficiencies))
  return { category, options, forcedValue: options.length === 1 ? options[0].value : undefined }
}

function getCategoryFromInstruction(instruction: string) {
  return instruction.split(':')[0]
}

function getOptionsFromInstruction(instruction: string, proficiencies: Proficiency[]): Option[] {
  const [category, value] = instruction.split(':')
  const filteredProficiencies =
    value === 'au-choix'
      ? proficiencies.filter(proficiency => proficiency.category === category)
      : proficiencies.filter(proficiency => proficiency.id === instruction)
  return filteredProficiencies.map(proficiency => ({
    value: proficiency.id,
    label: proficiency.name,
    optionGroup: category,
  }))
}
