import { Flex, Image, Text, Menu, Link, MenuItem, MenuList, Select } from '@chakra-ui/react'
import { ThemeProvider } from '@emotion/react'
import NextLink from "next/link";
import React, { useState } from 'react'
import MenuButton from '../components/MenuButton'
import { ChevronDownIcon } from '@chakra-ui/icons'
const Header = () => {
  const [network, setNetwork] = useState('Testnet')
  return (
    <Flex color='#FFF' width={'100vw'} height='80px' justifyContent={'center'} alignItems='center' boxShadow={'1px 1px 2px 0 rgb(0 0 0 / 10%)'} paddingX={"10px"}>
      <Image src='https://assets-global.website-files.com/62535c6262b90afd768b9b26/6296b76dfbf3dcef2847733b_immutableX-logo-horiz.svg?fbclid=IwAR25vEMAOcSBL8ZX-UMY4sdxm1vwMUdHjCapqDIvxztyUDLLAelR1oy1EBI' height={'48px'} position='absolute' />
      <Flex
        w={{ md: "100%", lg: "90%" }}
        maxWidth="2000px"
        px={{ md: 4, lg: 0 }}
        minWidth="800px"
        direction="row"
        align="center"
        justify="space-between"
      >
        <Flex direction="row" ml={8} fontSize="sm" align="center"></Flex>
        <MenuButton
          menus={[
            {
              href: "",
              children: (
                <NextLink href="/" passHref>
                  <Link _hover={{ textDecoration: "none" }} href="/" w="full" onClick={(e) => setNetwork("Mainnet")}>
                    Mainnet
                  </Link>
                </NextLink>
              ),
            },
            {
              href: "",
              children: (
                <NextLink href="/" passHref >
                  <Link _hover={{ textDecoration: "none" }} href="/" w="full" onClick={(e) => setNetwork("Testnet")} >
                    Testnet
                  </Link>
                </NextLink>
              ),
            },
          ]}
          icon={<ChevronDownIcon />}
          text={network}
          mainGroupTitle="Choose the network"
        />

      </Flex>
    </Flex >

  )
}

export default Header