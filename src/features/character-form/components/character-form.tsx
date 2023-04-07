import { Flex } from '@chakra-ui/react'
import { Formik } from 'formik'
import { CharacterFormContextProvider } from '../context'
import { type CharacterFormValues } from '../types'
import { CharacterFormPanel } from './character-form-panel'
import { CharacterFormSidebar } from './character-form-sidebar'

export function CharacterForm() {
  return (
    <CharacterFormContextProvider>
      <Formik<CharacterFormValues> initialValues={{}} onSubmit={console.log}>
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
