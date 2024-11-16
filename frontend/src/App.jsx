import Navbar from './components/Navbar'
import { Box, Toolbar } from '@mui/material';
import ContactTable from './components/ContactTable';

function App() {
  return (
      <>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: 'background.default',
          p: 3,
        }}
      >
        <Navbar/>
        <Toolbar />
        <ContactTable />
        {/* <EnhancedTable/> */}
      </Box>
      </>
  )
}

export default App
