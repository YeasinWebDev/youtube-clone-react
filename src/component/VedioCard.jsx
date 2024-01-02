import React from 'react'
import { Link } from 'react-router-dom'
import { CheckCircle, Margin } from '@mui/icons-material'
import { Typography, Card, CardContent, CardMedia } from '@mui/material'
import { demoThumbnailUrl, demoVideoTitle, demoVideoUrl, demoChannelTitle, demoChannelUrl } from '../utils/constants'

function VedioCard({ video: { id: { videoId }, snippet } }) {
  // console.log(videoId);
  return (
    <Card sx={{ width: { md: "320px", xs: "80%" }, boxShadow: "none", borderRadius: "10px", border:"none" }}>
     <Link to={videoId ? `/video/${videoId}` : demoChannelUrl }>
        <CardMedia
          image={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
          sx={{ width: 358, height: 180, backgroundSize: "cover", backgroundPosition: "center",objectFit:"cover" }}
        />
        <CardContent sx={{ backgroundColor: "#080a08", height: "110px", width: "358px", color: "#fff" }}>

          <Typography variant="subtitle1" component="div">
            {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </Typography>


          <Link
            to={
              snippet?.channelId
                ? `/channel/${snippet?.channelId}`
                : demoChannelUrl
            }
          >
            <Typography variant="subtitle2" fontWeight="bold" color="#DDD"
              sx={{ fontSize: 15, color: "#999999" }}
            >
              {snippet?.channelTitle || demoChannelTitle} 
              <CheckCircle sx={{ fontSize: 12, color: "#DDD", ml: "5px", }} /> 
            </Typography>
          </Link>

        </CardContent>
      </Link>
    </Card>
  )
}

export default VedioCard