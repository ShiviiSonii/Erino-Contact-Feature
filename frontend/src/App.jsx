import Navbar from './components/Navbar'
import { Box, Toolbar } from '@mui/material';
import ContactTable from './components/ContactTable';

function App() {
  return (
      <>
      <Navbar/>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: 'background.default',
          p: 3,
        }}
      >
        <Toolbar />
        <ContactTable />
      </Box>
      </>
  )
}

export default App
