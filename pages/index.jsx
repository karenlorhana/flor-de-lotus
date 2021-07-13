import Navbar from './navbar'
import Catalogo from './Catalogo'
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
