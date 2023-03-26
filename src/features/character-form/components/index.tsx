import { Flex } from '@chakra-ui/react'
import { Formik } from 'formik'
import { CharacterFormContextProvider } from '../context'
import { CharacterFormPanel } from './character-form-panel'
import { CharacterFormSidebar } from './character-form-sidebar'

function CharacterForm() {
  return (
    <CharacterFormContextProvider>
      <Formik initialValues={{}} onSubmit={console.log}>
        {() => (
          <form style={{ flex: 1, overflow: 'hidden' }}>
            <Flex width="full" height="full" backgroundColor="gray.50">
              <CharacterFormSidebar />
              <CharacterFormPanel />
            </Flex>
          </form>
        )}
      </Formik>
    </CharacterFormContextProvider>
  )
}

export default CharacterForm
