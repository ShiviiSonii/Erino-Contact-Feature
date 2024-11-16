import Navbar from './components/Navbar'
import { Box, Toolbar } from '@mui/material';
import ContactTable from './components/ContactTable';
import EnhancedTable from './components/Table';

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
        {/* <EnhancedTable/> */}
      </Box>
      </>
  )
}

export default App
