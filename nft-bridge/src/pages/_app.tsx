import '../styles/globals.css'
import type { AppProps } from 'next/app'
import footer from '../layout/Footer'
import Header from '../layout/Header'
import { ChakraProvider, CSSReset } from '@chakra-ui/react'
import { Navigate, Route, Routes } from 'react-router-dom';
import { Login } from '../routes/Login'

const MyApp = () => {
  return (
    <ChakraProvider>
      <Header />
      <Login />
    </ChakraProvider>
  )
}

export default MyApp
