import { useState } from 'react'
import { ChakraProvider} from '@chakra-ui/react'
import { Grilla } from './Components/Grilla/Grilla'
import { Menu } from './Components/Menu/Menu'

function App() {
  

  return (
    <ChakraProvider>
      <Menu/>
      <Grilla/>
    </ChakraProvider>
  )
}

export default App
