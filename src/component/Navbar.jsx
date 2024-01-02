import React from 'react';
import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import { logo } from '../utils/constants.jsx';
import {SearchBar} from './index.js'
 
export function Navbar() {
  return (
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      sx={{ position: "sticky", background: "#000", justifyContent: 'space-between' }}
    >
      <Link to="/" className='flex align-middle' sx={{ textDecoration: 'none', color: 'inherit' }}>
        <img src={logo} alt="logo" className='h-10 flex justify-center' />
      </Link>

      <SearchBar/>
    </Stack>
  );
}
