import React from 'react'
import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import ReactPlayer from 'react-player'
import { Typography, Box, Stack } from '@mui/material'
import CheckCircle from '@mui/icons-material/CheckCircle'

import { Videos } from './'
import { fetchFromAPI } from '../utils/fetchFromApi'

export function VedioDetail() {
  const [videoDetail, setVideoDetail] = useState([])
  const [videos, setVideos] = useState([])
  const { id } = useParams()

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
      .then((data) => setVideoDetail(data[0]))

    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
      .then((data) => setVideos(data))
  }, [id]);
  const { snippet } = videoDetail;
  const { statistics } = videoDetail;

  // console.log(title);
  return (
    <div minHeight="95vh" className='videodetial flex justify-between demo-video'>
      <Stack direction={{ xs: "column", md: "row" }}>
        <div  className='vedioContent m-[50px]'>
          <Box className="videodetial-video" sx={{ width: "100%", position: "sticky", top: "86px" }}>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="react-player flex-1" controls />
            <Typography color="#FFF" variant='h5' fontWeight="bold" p={2}>
              {snippet?.title}
            </Typography>
            <Stack direction="row" justifyContent="space-between" sx={{ color: "#fff" }} py={1} px={2}>
              <Link to={`/channel/${snippet?.channelTitle}`}>
                <Typography variant={{ sm: "subtitle1", md: "h6" }} color="#FFF">
                  {snippet?.channelTitle}
                  <CheckCircle sx={{ fontSize: "12px", color: "gray", ml: '5px' }} />
                </Typography>
                <button className='bg-red-700 text-white px-3 py-2 ml-[14vw] rounded-lg'>subscribe</button>
              </Link>
            </Stack>
            <div className='flex flex-row ml-[20px] text-white mb-3 gap-5 font-bold' >
              <Typography variant='div' sx={{ opacity: 0.7 }} fontSize="15px">
                {parseInt(statistics?.viewCount).toLocaleString()} Views
              </Typography>
              <Typography variant='div' sx={{ opacity: 0.7 }} fontSize="15px">
                {parseInt(statistics?.likeCount).toLocaleString()} Likes
              </Typography>
            </div>
          </Box>
        </div>
      </Stack>
      <Box py={{ md: 1, xs: 5 }} justifyContent="start" alignItems="center">
        <Videos videos={videos} />
      </Box>
    </div>
  )
}

