import Navbar from './components/Navbar'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  
  return (
    <ThemeProvider theme={darkTheme}>
      <Navbar/>
    </ThemeProvider>
  )
}

export default App
