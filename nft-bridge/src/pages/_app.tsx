import '../styles/globals.css'
import type { AppProps } from 'next/app'
import footer from '../layout/Footer'
import Header from '../layout/Header/Header'
import { ChakraProvider, CSSReset } from '@chakra-ui/react'
import { Navigate, Route, Routes } from 'react-router-dom';
import theme from '../styles/theme'
import Title from '../components/Title/Title'
import "@fontsource/rajdhani"
import "@fontsource/roboto"
import { Box } from '@chakra-ui/layout'
import Bridge from '../routes/Bridge/Bridge'

const MyApp = () => {
  return (
    <ChakraProvider>
      <Box width={'100%'} overflowX="hidden" backgroundColor={"rgb(25, 34, 53)"}>
        <Header />
        <Title />
        <Bridge />
      </Box>
    </ChakraProvider >
  )
}

export default MyApp
