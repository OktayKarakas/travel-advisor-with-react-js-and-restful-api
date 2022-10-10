import React from 'react'
import {
  Box,
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Chip,
} from '@material-ui/core'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import PhoneIcon from '@material-ui/icons/Phone'
import Rating from '@material-ui/lab/Rating'

import useStyles from './styles'

const PlaceDetails = (props) => {
  const classes = useStyles()
  if(props.selected) props.refProp?.current?.scrollIntoView({behavior: "smooth" , block: "start"})
  return (
    <Card elevation={6}>
      {props.place.name && <CardMedia
        style={{ height: 350 }}
        image={
          props.place.photo
            ? props.place.photo.images.large.url
            : ''
        }
        title={props.place.name}
      />}
      <CardContent>
        <Typography gutterBottom variant="h5">
          {props.place.name}
        </Typography>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="subtitle1">Price</Typography>
          <Typography gutterBottom variant="subtitle1">
            {props.place.price_level}
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="subtitle1">Ranking</Typography>
          <Typography gutterBottom variant="subtitle1">
            {props.place.ranking}
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography gutterBottom variant="subtitle1">
            {props.place.cuisine && <>Cuisine : {props.place.cuisine.map((item) =>{
              return <p className="cuisine">{item.name}</p>
            })}</>}
          </Typography>
          </Box>
          <Box display="flex" justifyContent="space-between">
          <Typography gutterBottom variant="subtitle1">
            {props.place.address && <>Address :  <span className="address">{props.place.address} </span>.</>}
          </Typography>
          </Box>
          <Box display="flex" justifyContent="space-between">
          <Typography gutterBottom variant="subtitle1">
            {props.place.phone && <>Phone :  <span className="address">{props.place.phone} </span></>}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  )
}

export default PlaceDetails
