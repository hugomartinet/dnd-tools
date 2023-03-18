import { ChakraProvider } from '@chakra-ui/react'
import Home from './routes/home'
import theme from './theme'

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Home />
    </ChakraProvider>
  )
}

export default App
