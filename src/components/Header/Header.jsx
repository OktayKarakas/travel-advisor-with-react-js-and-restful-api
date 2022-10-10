import React,{useState} from 'react'
import { Autocomplete } from '@react-google-maps/api'
import { AppBar, Toolbar, Typography, InputBase, Box } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import { palette } from '@mui/system'
import useStyles from './styles'
import './../../style.css'
const Header = ({setCoordinates}) => {
  const classes = useStyles()
  const [autoComplete,setAutocomplete] = useState("")
  const onLoad = (autoC) => setAutocomplete(autoC) 
  const onPlaceChanged = () => {
    const lat = autocomplete.getPlace().geometry.location.lat()
    const lng = autocomplete.getPlace().geometry.location.lng()
    setCoordinates({lat,lng})
  }
  return (
    <AppBar position="flex" style={{ background: '#5D6D7E' }}>
      <Toolbar className={classes.toolbar}>
        <Typography variant="h5" className={classes.title}>
          <p>Travel Advisor</p>
        </Typography>
        <Box display="flex" flexDirection="row" className="Box">
          <Typography variant="h6" className={classes.title}>
            Explore new places
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Header
