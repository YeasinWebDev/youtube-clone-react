import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {Box} from '@mui/material'

import {Navbar, Feed, VedioDetail, ChannelDetail, SearchFeed} from './component'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Box className='bg-black'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Feed />} />
          <Route path='/video/:id' element={<VedioDetail />} />
          <Route path='/channel/:id' element={<ChannelDetail />} />
          <Route path='/search/:searchItem' element={<SearchFeed />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}


export default App
