import React from 'react'
import GoogleMapReact from 'google-map-react'
import { Paper, Typography, useMediaQuery } from '@material-ui/core'
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined'
import useStyles from './styles'

const Map = ({ setCoordinates, setBounds, coordinates }) => {
  const classes = useStyles()
  const isMobile = useMediaQuery('(min-width:600px)')
  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyDNdG3HugsR3Y814e_EzkN3OJlaVe_PYlU' }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={''}
        onChange={(e) => {
          setCoordinates({ lat: e.center.lat, lng: e.center.lng }) //User kordinat belirlemeye yarayan kod budur.
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw })
        }}
        onChildClick={''}
      ></GoogleMapReact>
    </div>
  )
}

export default Map
