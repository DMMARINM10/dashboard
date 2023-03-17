import React from 'react'
import PropTypes from 'prop-types'
import { Card, CardMedia } from '@mui/material'

const ImageCard = ({
    url = 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Stan_Lee_by_Gage_Skidmore_3.jpg/640px-Stan_Lee_by_Gage_Skidmore_3.jpg',
    title = 'Title'
}) => {
  return (
    <Card sx={{ 
        maxWidth: 150, 
        borderRadius: '20px', 
        border: '1px solid lightgray',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        textAlign: 'center'
    }}>
      <CardMedia
        component="img"
        alt={title}
        height="100"
        image={url}
      />
      <h4 style={{
        margin: '5px'
      }}>{title}</h4>
    </Card>
  )
}

ImageCard.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}

export default ImageCard