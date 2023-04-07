import { disableSelectedOptions } from 'components/input/helpers'
import { type Option } from 'components/input/types'
import { type CharacterFormValues } from 'features/character-form/types'
import { useRaces } from 'features/race/api-hooks'
import { useFormikContext } from 'formik'
import { sortBy } from 'lodash'
import { useCallback, useMemo, useState } from 'react'
import { type Ability } from './types'

const modes = ['points', 'roll'] as const
type Mode = (typeof modes)[number]

export function useAbilityFormMode() {
  const { setFieldValue } = useFormikContext<CharacterFormValues>()
  const [mode, setMode] = useState<Mode>('roll')
  const changeMode = useCallback(
    (newMode: Mode) => {
      if (mode !== newMode) {
        setFieldValue('abilities', {})
        setMode(newMode)
      }
    },
    [mode, setFieldValue]
  )

  return { mode, changeMode }
}

const costs: Record<number, number> = { 8: 0, 9: -1, 10: -2, 11: -3, 12: -4, 13: -5, 14: -7, 15: -9 }

export function useAbilityPointsLeft() {
  const { values } = useFormikContext<CharacterFormValues>()
  if (values.abilities === undefined) return 27

  return Object.values(values.abilities).reduce<number>(
    (points, value) => (value === null ? points : points + (costs[value] ?? 0)),
    27
  )
}

export function useAbilityInput(name: Ability) {
  const { data: races } = useRaces()
  const { values } = useFormikContext<CharacterFormValues>()

  const abilityValue = values.abilities?.[name]
  const race = races?.find(({ id }) => id === values.race)
  const raceBonus = race?.modifiers[name] ?? 0

  return {
    raceBonus,
    total: abilityValue ?? 0 + raceBonus,
    hasValue: Boolean(abilityValue),
  }
}

export function useAbilityInputOptions(): Option[] {
  const {
    values: { abilities, throws },
  } = useFormikContext<CharacterFormValues>()

  const options = useMemo(
    () =>
      throws
        ?.filter(_throw => typeof _throw === 'number')
        .map(_throw => ({ value: _throw!, label: _throw!.toString() })) ?? [],
    [throws]
  )
  const selectedOptions = useMemo(() => Object.values(abilities ?? {}), [abilities])

  return disableSelectedOptions(
    sortBy(options, option => option.value),
    selectedOptions
  )
}
