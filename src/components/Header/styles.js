import { alpha, makeStyles } from '@material-ui/core/styles'
import { palette } from '@mui/system'

export default makeStyles((theme) => ({
  title: {
    display: 'block',
    fontSize: "1rem",
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    alignItems: 'center',
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    marginRight: theme.spacing(3),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(2),
      width: 'auto',
    },
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    borderRadius: theme.shape.borderRadius,
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
}))
