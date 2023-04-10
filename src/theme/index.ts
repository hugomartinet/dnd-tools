import { extendTheme } from '@chakra-ui/react'
import colors from './colors'
import Checkbox from './components/checkbox'
import Heading from './components/heading'
import NumberInput from './components/number-input'
import Select from './components/select'
import fonts from './fonts'
import styles from './styles'

const theme = extendTheme({
  fonts,
  colors,
  styles,
  components: { Checkbox, Heading, NumberInput, Select },
})

export default theme
