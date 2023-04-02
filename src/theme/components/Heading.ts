import { defineStyleConfig } from '@chakra-ui/react'

const Heading = defineStyleConfig({
  variants: {
    brand: {
      fontFamily: 'Tiamat',
    },
  },
  baseStyle: {
    fontWeight: 'semibold',
  },
})

export default Heading
