import React from 'react'
import Button from '@mui/material/Button';
import { makeStyles } from '@material-ui/core/styles';
import './header.css'
import isFrench from '../../../language/locales/en.json'
import { useTranslation } from 'react-i18next';

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
    const { i18n } = useTranslation();
    

    return (
        <header className="career" style={{zIndex: '1'}}>
            <div className="career__inner-header">
                <h1>{i18n.resolvedLanguage === 'fr' ? isFrench.career_page.header.title : "start your career with"} <strong>locataire</strong></h1>
                <br />
                {i18n.resolvedLanguage === 'fr' ? (
                    <p>
                        {isFrench.career_page.header.subtitle}
                    </p>
                ) : (
                    <p>
                    Locataire, everyone matters. We are committed to creating and sustaining an inclusive and diverse work
                    environment where all employees are treated with dignity and respect.
                </p>
                )}
               
                <br />
                <Button variant="contained" className={classes.button}>{i18n.resolvedLanguage === 'fr' ? isFrench.career_page.header.btn : "contact locataire"}</Button>
            </div>
        </header>
    )
}
