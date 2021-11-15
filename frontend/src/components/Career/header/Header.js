import React from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { makeStyles } from '@material-ui/core/styles';
import './header.css'

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    button: {
        fontSize: '1.6rem!important',
        backgroundColor: '#313962!important'
    },
    employ: {
        alignSelf: 'center',
        backgroundColor: '#101010',
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: '#313962'
        }
    }
    
}));

export default function Header() {
    const classes = useStyles();

    return (
        <header className="career">
            <div className="career__inner-header">
                <h1>start your career with <strong>locataire</strong></h1>
                <br />
                <p>
                    Locataire, everyone matters. We are committed to creating and sustaining an inclusive and diverse work
                    environment where all employees are treated with dignity and respect.
                </p>
                <br />
                <Button variant="contained" className={classes.button}>contact locataire</Button>
            </div>
        </header>
    )
}
