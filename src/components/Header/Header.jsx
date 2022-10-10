import React from 'react'
import { Autocomplete } from '@react-google-maps/api'
import { AppBar, Toolbar, Typography, InputBase, Box } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import { palette } from '@mui/system'
import useStyles from './styles'
import './../../style.css'
const Header = () => {
  const classes = useStyles()
  return (
    <AppBar position="static" style={{ background: '#5D6D7E' }}>
      <div></div>
      <Toolbar className={classes.toolbar}>
        <Typography variant="h5" className={classes.title}>
          Travel Advisor
        </Typography>
        <Box display="flex" flexDirection="row" className="Box">
          <Typography variant="h6" className={classes.title}>
            Explore new places
          </Typography>
          <div className={classes.search}></div>
          <InputBase
            placeholder="Search..."
            classes={{ root: classes.inputRoot, input: classes.inputInput }}
            className="searchBar"
            style={{ background: "rgba(225, 229, 225,0.5)",color:"rgba(0, 0, 0,1)",fontWeight:"bold"}}
          />
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Header
