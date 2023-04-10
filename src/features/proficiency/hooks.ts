import { asOption } from 'components/input/helpers'
import { useBackground } from 'features/background'
import { type CharacterFormValues } from 'features/character-form/types'
import { useClass } from 'features/class'
import { useRace } from 'features/race'
import { useFormikContext } from 'formik'
import { chain } from 'lodash'
import { useProficiencies } from './api-hooks'
import { getInputPropsFromInstruction } from './helpers'

export function useSkillProficienciesForm() {
  const { values } = useFormikContext<CharacterFormValues>()
  const race = useRace(values.race)
  const _class = useClass(values.class)
  const background = useBackground(values.background)

  const instructions = chain([
    ...(race?.proficiencies ?? []),
    ...(_class?.proficiencies ?? []),
    ...(background?.proficiencies ?? []),
  ])
    .filter(instruction => instruction.startsWith('compétence:'))
    .map(instruction => instruction.split(':')[1])
    .value()

  const limit = instructions.length
  const forcedSkills = instructions.filter(instruction => instruction !== 'au-choix')

  const classSkills = _class?.skills ?? []
  const options = chain([...classSkills, ...forcedSkills])
    .uniq()
    .sort()
    .map(asOption)
    .value()

  return { options, forcedSkills, limit }
}

const orderedCategories = ['outil', 'artisan', 'kit', 'instrument', 'jeu', 'véhicule', 'langue', 'autre']

export function useOtherProficienciesForm() {
  const { data: proficiencies } = useProficiencies()

  const { values } = useFormikContext<CharacterFormValues>()
  const race = useRace(values.race)
  const _class = useClass(values.class)
  const background = useBackground(values.background)

  return chain([...(race?.proficiencies ?? []), ...(_class?.proficiencies ?? []), ...(background?.proficiencies ?? [])])
    .map((instruction, index) => ({
      ...getInputPropsFromInstruction(instruction, proficiencies ?? []),
      name: `proficiencies[${index}]`,
    }))
    .map(props => ({
      ...props,
      options: props.options.map(option => ({ ...option, disabled: values.proficiencies?.includes(option.value) })),
    }))
    .filter(props => props.options.length > 0)
    .sortBy(props => orderedCategories.findIndex(category => category === props.category))
    .groupBy(props => props.category)
    .value()
}
