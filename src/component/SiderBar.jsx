import React from 'react'
import { Link } from 'react-router-dom'
import { Stack } from '@mui/material'
import { categories,channel } from '../utils/constants'

function SiderBar({selectedCategory, setSelectedCategory}) {

  return (
    <>
    
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        height: { sx: "20px", md: "95%" },
        width:"100%",
        flexDirection: { md: "column" },
        mr:"40px",
      }}
      className='root-tag'
    >

      {categories.map((category) => (
        <button className="tag text-white flex p-2 rounded-2xl mb-2"
        onClick={() => setSelectedCategory(category.name)}
          style={{ background: category.name === selectedCategory ? "#696b6a" : "" }}
          key={category.name}
        >

          <span style={{color : category.name === selectedCategory ? "#fff" : "red"}}>{category.icon}</span>
          <span style={{opacity: category.name === selectedCategory ? "2" : "0.5"}} className='ml-4'>{category.name}</span>

        </button>
      ))}

      <div className='channel text-white flex justify-center mt-6'>Channels</div>

      {channel.map((category) => (
        <Link to={`/channel/${category.name}`} className="channelTag text-white p-2 rounded-2xl mb-2 w-full"
          style={{ background: category.name === selectedCategory ? "#696b6a" : "" }}
          key={category.name}
        >
          <span style={{opacity: category.name === selectedCategory ? "2" : "0.5"}}>{category.name}</span>

        </Link>
      ))}

    </Stack>

    </>
  )
}

export default SiderBar