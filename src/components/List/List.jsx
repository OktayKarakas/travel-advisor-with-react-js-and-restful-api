import React, { useState } from 'react'
import {
  CircularProgress,
  Grid,
  Typography,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from '@material-ui/core'
import useStyles from './styles'
const List = () => {
  const classes = useStyles()
  return (
    <div className={classes.container}>
      <Typography variant="h4">
        Restaurants,Hotels & Attractions around you
      </Typography>
      <FormControl className={classes.formControl}>
        <InputLabel>Type</InputLabel>
        <Select value={} onChange={}>
          <MenuItem value="restaurants">Restaurants</MenuItem>
          <MenuItem value="hotels">Hotels</MenuItem>
          <MenuItem value="attractions">Attractions</MenuItem>
        </Select>
      </FormControl>
    </div>
  )
}

export default List
