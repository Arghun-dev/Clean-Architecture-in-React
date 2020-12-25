import React from 'react'
import { Grid } from '@material-ui/core'
import useStyles from './index.style'
import LoginForm from './components/LoginForm'

export default function Login() {
    const classes = useStyles()
    return (
        <Grid className={classes.root}>
            <LoginForm />
        </Grid>   
    )
}