import { Grid } from '@material-ui/core'
import useStyles from './styles/LoginFormConainer.styles.js'

export default function LoginFormContainer({ children }) {
    const classes = useStyles()
    return (
        <Grid xs={6} className={classes.root}>
            {children}
        </Grid>
    )
}