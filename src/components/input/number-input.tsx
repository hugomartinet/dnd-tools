import {
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput as ChakraNumberInput,
  NumberInputField,
  NumberInputStepper,
  type NumberInputProps as ChakraNumberInputProps,
} from '@chakra-ui/react'
import { useField } from 'formik'
import { useState } from 'react'
import { useDebounce } from 'react-use'

interface NumberInputProps extends ChakraNumberInputProps {
  name: string
}

export function NumberInput({ name, ...props }: NumberInputProps) {
  const [, { value }, { setValue }] = useField({ name, type: 'number' })
  const [debouncedValue, setDebouncedValue] = useState(value ?? '')

  useDebounce(
    () => {
      if (debouncedValue === '') setValue(null)
      else setValue(Number(debouncedValue))
    },
    100,
    [debouncedValue]
  )

  return (
    <ChakraNumberInput {...props} value={debouncedValue} onChange={setDebouncedValue}>
      <NumberInputField />
      <NumberInputStepper>
        <NumberIncrementStepper />
        <NumberDecrementStepper />
      </NumberInputStepper>
    </ChakraNumberInput>
  )
}
