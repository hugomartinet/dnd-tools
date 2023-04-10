import { checkboxAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(checkboxAnatomy.keys)

const Checkbox = defineMultiStyleConfig({
  baseStyle: definePartsStyle({
    control: {
      backgroundColor: 'white',
    },
    label: {
      _checked: { opacity: 1 },
    },
  }),
})

export default Checkbox
