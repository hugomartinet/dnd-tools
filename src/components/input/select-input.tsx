import { Select, type SelectProps } from '@chakra-ui/react'
import { useField } from 'formik'
import { groupBy, uniq } from 'lodash'
import { useEffect } from 'react'
import { type Option } from './types'

interface SelectInputProps extends SelectProps {
  name: string
  options: Option[]
  parse?: (value: string) => string | number
  forcedValue?: string
}

export function SelectInput({ name, options, parse = _ => _, forcedValue, ...props }: SelectInputProps) {
  const [, { value }, { setValue }] = useField({ name, type: 'select' })

  useEffect(() => {
    setValue(forcedValue)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [forcedValue])

  const hasOptionGroups = uniq(options.map(option => option.optionGroup)).length > 1

  return (
    <Select
      {...props}
      value={value}
      onChange={event => setValue(parse(event.target.value))}
      placeholder="-"
      isDisabled={forcedValue !== undefined && forcedValue === value}
    >
      {hasOptionGroups ? renderGroupedOptions(options) : renderOptions(options)}
    </Select>
  )
}

function renderGroupedOptions(options: Option[]) {
  const groupedOptions = groupBy(options, option => option.optionGroup)
  return (
    <>
      {Object.entries(groupedOptions).map(([groupName, groupOptions]) => (
        <optgroup key={groupName} label={groupName}>
          {renderOptions(groupOptions)}
        </optgroup>
      ))}
    </>
  )
}

function renderOptions(options: Option[]) {
  return (
    <>
      {options.map((option, index) => (
        <option key={`${option.value}-${index}`} value={option.value} disabled={option.disabled}>
          {option.label}
        </option>
      ))}
    </>
  )
}
