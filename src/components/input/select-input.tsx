import { Select, type SelectProps } from '@chakra-ui/react'
import { useField } from 'formik'
import { type Option } from './types'

interface SelectInputProps extends SelectProps {
  name: string
  options: Option[]
  parse?: (value: string | number) => string | number
}

export function SelectInput({ name, options, parse = _ => _, ...props }: SelectInputProps) {
  const [, { value }, { setValue }] = useField({ name, type: 'select' })
  return (
    <Select {...props} value={value} onChange={event => setValue(parse(event.target.value))} placeholder="-">
      {options.map((option, index) => (
        <option key={`${option.value}-${index}`} value={option.value} disabled={option.disabled}>
          {option.label}
        </option>
      ))}
    </Select>
  )
}
