import { disableSelectedOptions } from './helpers'
import { type Option } from './types'

describe('disableSelectedOptions()', () => {
  const options: Option[] = [
    { value: 12, label: '12', disabled: false },
    { value: 12, label: '12', disabled: false },
    { value: 13, label: '13', disabled: false },
    { value: 14, label: '14', disabled: false },
    { value: 14, label: '14', disabled: false },
  ]

  it.each`
    selectedValues  | disabledStatuses
    ${[]}           | ${[false, false, false, false, false]}
    ${[12]}         | ${[true, false, false, false, false]}
    ${[12, 13]}     | ${[true, false, true, false, false]}
    ${[12, 12]}     | ${[true, true, false, false, false]}
    ${[12, 12, 14]} | ${[true, true, false, true, false]}
  `('disable options properly when selected values are $selectedValues', ({ selectedValues, disabledStatuses }) => {
    const disabledOptions = disableSelectedOptions(options, selectedValues)

    expect(disabledOptions.map(_ => _.disabled)).toEqual(disabledStatuses)
  })
})
