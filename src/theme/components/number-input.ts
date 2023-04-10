import { numberInputAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(numberInputAnatomy.keys)

const NumberInput = defineMultiStyleConfig({
  baseStyle: definePartsStyle({
    root: {
      backgroundColor: 'white',
    },
  }),
})

export default NumberInput
