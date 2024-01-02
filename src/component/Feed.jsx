import { useState, useEffect } from 'react'
import { Stack, Box, Typography } from "@mui/material"
import { SideBar, Videos } from './'
import { fetchFromAPI } from '../utils/fetchFromApi'


export function Feed() {

  const [selectedCategory, setSelectedCategory] = useState("New")
  const [videos, setVideos] = useState([])
  useEffect(() => {
    fetchFromAPI(`search?part=id%2Csnippet&type=chennal&video&q=${selectedCategory}`)
      .then(data => setVideos(data))
  }, [selectedCategory])
  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box sx={{ height: { sx: "0px", md: "92vh" }, borderRight: "1px solid #3d3d3d", px: { sx: 2, md: 2 } }}>

          <SideBar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>

        <Typography className='flex justify-center' sx={{ mt: 1.5, color: "#fff", whiteSpace: "nowrap", fontSize: "10px" }}>
          Copyrignt 2023 Media
        </Typography>
      </Box>

      <Box>
        <Typography className='text-white px-2 font-bold' variant='h4'>
          {selectedCategory} <span className='text-red-600'>Videos</span>
        </Typography>

        <Videos videos={videos} />
      </Box>

    </Stack>

  )
}

