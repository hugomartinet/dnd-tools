import { extendTheme } from '@chakra-ui/react'
import colors from './ colors'
import Button from './components/Button'
import Heading from './components/Heading'
import fonts from './fonts'
import styles from './styles'

const theme = extendTheme({
  fonts,
  colors,
  styles,
  components: { Button, Heading },
})

export default theme
