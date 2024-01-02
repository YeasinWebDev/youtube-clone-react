import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Paper, IconButton, colors } from "@mui/material"
import { Search } from '@mui/icons-material'
function SearchBar() {
  const [searchTrem, setSearchTrem] = useState("")
  const navigate = useNavigate()
  const handleSubmit = (e) => {
      e.preventDefault()
      if(searchTrem){
        navigate(`/search/${searchTrem}`)
        setSearchTrem("")
      }
  }
  return (
    <Paper
      component="form"
      onSubmit={handleSubmit}
      className='rounder-lg border-2 border-[#e3e3e3] px-2  outline-none'
    >
      <input
        className="search-bar outline-none"
        placeholder='Search...'
        value={searchTrem}
        onChange={(e) => setSearchTrem(e.target.value)}
      />

      <IconButton
        type='submit'
        style={{ color: '#b50b05', padding: '0.5rem'}}
        className='rounder-lg'
      >
        <Search />
      </IconButton>
    </Paper>
  )
}

export default SearchBar