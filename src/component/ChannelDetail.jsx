import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Stack, Box } from "@mui/material";


import { Videos, ChannelCard } from "./";
import { fetchFromAPI } from '../utils/fetchFromApi';

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState([]);
  const [videos, setVideos] = useState([]);
  const { id } = useParams();
  useEffect(() => {

    fetchFromAPI(`search?part=id%2Csnippet&type=chennnal&q=${id}`)
      .then(data => setChannelDetail(data))


    fetchFromAPI(`search?part=id%2Csnippet&type=video&q=${id}`)
      .then(data => setVideos(data))


  }, [id]);

  return (
    <Box minHeight="95vh">
      <Box>
        <div style={{
          height: '300px',
          background: 'linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)',
          zIndex: 10,
        }} />
        <ChannelCard channelDetail={channelDetail} marginTop="-93px" />
      </Box>
      <Box display="flex" p="2">
        <Box sx={{ mr: { sm: "140px" } }} />
        <Videos videos={videos} />
      </Box>
    </Box>
  );
};

export default ChannelDetail;