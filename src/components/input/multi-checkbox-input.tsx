import { Checkbox, VStack } from '@chakra-ui/react'
import { useField } from 'formik'
import { useCallback } from 'react'
import { useDeepCompareEffect } from 'react-use'
import { type Option } from './types'

interface MultiCheckboxInputProps {
  name: string
  options: Option[]
  forcedValues?: string[]
  limit?: number
}

export function MultiCheckboxInput({ name, options, forcedValues = [], limit }: MultiCheckboxInputProps) {
  const [, { value: values }, { setValue: setValues }] = useField<string[] | undefined>({ name })

  useDeepCompareEffect(() => {
    setValues(forcedValues)
  }, [forcedValues])

  const onCheck = useCallback(
    (checkedValue: string) => {
      if (values?.includes(checkedValue) === true) setValues(values.filter(value => value !== checkedValue))
      else setValues([...(values ?? []), checkedValue])
    },
    [values, setValues]
  )

  return (
    <VStack align="start">
      {options.map(option => (
        <Checkbox
          key={option.value}
          isChecked={values?.includes(option.value)}
          onChange={() => onCheck(option.value)}
          isDisabled={
            forcedValues.includes(option.value) ||
            (values?.length === limit && values?.includes(option.value) === false)
          }
        >
          {option.label}
        </Checkbox>
      ))}
    </VStack>
  )
}
