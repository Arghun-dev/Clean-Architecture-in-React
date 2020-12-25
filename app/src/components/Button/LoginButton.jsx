import React from 'react'
import useStyles from './LoginButton.styles'

export default function LoginButton(props) {
    const classes = useStyles()
    return (
        <button className={classes.root} onClick={props.onClick}>
            {props.children}
        </button>
    )
}