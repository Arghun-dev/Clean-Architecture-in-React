import { makeStyles } from '@material-ui/styles'

export default makeStyles((theme) => ({
    root: {
        backgroundColor: '#7B68EE',
        outline: 'none',
        border: 'none',
        color: 'white',
        padding: '0.5rem 1.2rem',
        cursor: 'pointer',
        borderRadius: '.2rem',
        transition: 'all .2s',
        boxShadow: '0 0 6px #7B68EE',
        '&:hover': {
            backgroundColor: '#5C4DBC'
        }
    }
}))