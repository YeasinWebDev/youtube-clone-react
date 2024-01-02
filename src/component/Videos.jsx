import React from "react";
import { Stack, Box } from "@mui/material";

import { ChannelCard ,VedioCard } from "./index";

const Videos = ({ videos, directions }) => {
  // console.log(videos);
  
  return (
    <Stack direction={"row"} flex="flex" flexWrap="wrap" justifyContent="start" alignItems="center" gap={2} ml="20px" mt='10px'>
      {videos.map((item, idx) => (
        <Box key={idx}>
          {< VedioCard video={item} /> }
        </Box>
      ))}
    </Stack>
  );
}

export default Videos;