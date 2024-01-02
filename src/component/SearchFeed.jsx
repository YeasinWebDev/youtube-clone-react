import { useState, useEffect } from 'react'
import { Box, Typography } from "@mui/material"
import { useParams } from 'react-router-dom'
import { Videos } from './'
import { fetchFromAPI } from '../utils/fetchFromApi'


export function SearchFeed() {
  const [videos, setVideos] = useState([])
  const { searchItem } = useParams()
  useEffect(() => {
    fetchFromAPI(`search?part=id%2Csnippet&type=chennal&video&q=${searchItem}`)
      .then(data => setVideos(data))
  }, [searchItem])
  return (
    < Box>
      <Typography className='searchText text-white px-2 font-bold' variant='h4'>
        <div className='searchText'>search result for<span className='text-red-600'> {searchItem} </span>videos</div>  
      </Typography>
      <div className="searchvideo pl-8">
        <Videos videos={videos} />
      </div>
    </Box >

  )
}

