import { capitalize } from 'lodash'
import { type Option } from './types'

export function disableSelectedOptions(options: Option[], selectedValues: (number | null)[]) {
  const disabledOptions = [...options]
  selectedValues.forEach(value => {
    const index = disabledOptions.findIndex(option => option.disabled !== true && option.value === value?.toString())
    disabledOptions[index] = { ...disabledOptions[index], disabled: true }
  })
  return disabledOptions
}

export function asOption(value: string): Option {
  return { value, label: capitalize(value) }
}
