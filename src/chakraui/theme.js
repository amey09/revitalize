import { extendTheme } from '@chakra-ui/react'
import '@fontsource/poppins/400.css';
import '@fontsource/inter/700.css'
import '@fontsource/jost'
import '@fontsource/dm-sans'

const theme = extendTheme({
    fonts: {
        pop: `Poppins`,
        jost: 'Jost',
        dmsans: 'DM Sans',
        heading: 'Arial Black',
        inter: 'Inter',
        hero: 'Nunito Sans',
    },
})

export default theme