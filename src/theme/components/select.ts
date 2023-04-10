import { selectAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(selectAnatomy.keys)

const Select = defineMultiStyleConfig({
  baseStyle: definePartsStyle({
    field: {
      backgroundColor: 'white',
      _disabled: {
        opacity: 1,
      },
    },
    icon: {
      _disabled: {
        display: 'none',
      },
    },
  }),
})

export default Select
