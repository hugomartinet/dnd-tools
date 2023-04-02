import { Center, Flex, Spinner } from '@chakra-ui/react'
import { Header } from 'components/header'
import React from 'react'
import { Outlet } from 'react-router-dom'

function Loader() {
  return (
    <Center height="100vh" width="100vw">
      <Spinner thickness="4px" color="blue.500" size="xl" />
    </Center>
  )
}

export function Layout() {
  return (
    <React.Suspense fallback={<Loader />}>
      <Flex flexDir="column" width="100vw" height="100vh">
        <Header />
        <Outlet />
      </Flex>
    </React.Suspense>
  )
}
