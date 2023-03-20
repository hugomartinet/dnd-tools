import { Center, Spinner } from '@chakra-ui/react'
import React from 'react'

function Loader() {
  return (
    <Center height="100vh" width="100vw">
      <Spinner thickness="4px" color="blue.500" size="xl" />
    </Center>
  )
}

interface LazyPageProps {
  component: JSX.Element
}

export function LazyPage(props: LazyPageProps) {
  return <React.Suspense fallback={<Loader />}>{props.component}</React.Suspense>
}
