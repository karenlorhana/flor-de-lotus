import Navbar from '../components/navbar'
import Catalogo from '../components/Catalogo'
import Product from './[id]'
import Link from 'next/link'
import { createTheme, ThemeProvider } from '@material-ui/core'
import { Icon, makeStyles } from '@material-ui/core'

const theme = createTheme({
  palette: {
    primary: {
      main: '#fefefe',
    },
  },
})
export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      {/* <Router> */}
      <Navbar />
      <Catalogo />
    </ThemeProvider>
  )
}
