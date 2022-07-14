import '../styles/globals.css'
import type { AppProps } from 'next/app'
import footer from '../layout/Footer'
import Header from '../layout/Header'
import { ChakraProvider, CSSReset } from '@chakra-ui/react'
import { Navigate, Route, Routes } from 'react-router-dom';
import Bridge from '../routes/Bridge'
import theme from '../styles/theme'
import Title from '../components/Title'
import "@fontsource/rajdhani"
import { Box } from '@chakra-ui/layout'

const MyApp = () => {
  return (
    <ChakraProvider theme={theme}>
      <Box width={'100%'} overflowX="hidden" backgroundColor={"rgb(25, 34, 53)"}>
        <Header />
        <Title />
        <Bridge />
      </Box>
    </ChakraProvider>
  )
}

export default MyApp
