import { extendTheme } from '@chakra-ui/react'
import colors from './colors'
import Heading from './components/heading'
import fonts from './fonts'
import styles from './styles'

const theme = extendTheme({
  fonts,
  colors,
  styles,
  components: { Heading },
})

export default theme
