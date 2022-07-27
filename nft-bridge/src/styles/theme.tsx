import { background, extendTheme } from "@chakra-ui/react"
import '@fontsource/rajdhani'
import "@fontsource/roboto"

const theme = extendTheme({
    fonts: {
        heading: "Rajdhani",
        body: "Rajdhani",
    }
})
export default theme