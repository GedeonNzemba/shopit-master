import React from 'react'
import Card from '@mui/material/Card';
import List from '@mui/material/List';
import Link from 'react-scroll/modules/components/Link'
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { useTranslation, Trans } from 'react-i18next';
import Slide from './Slide'
import hatch from '../../images/chick.jpg'
import './vacchatch.css'

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export const Vacchatch = () => {

    const { t  } = useTranslation();

    const Vaccine = () => (
        <Box id="vaccine">
            <Stack className='vaccine__wrapper' direction="column" spacing={2}>
                <div className='__slides'>
                    <Slide />
                </div>

                <div className='__content'>
                    <Stack direction="column" spacing={2}>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" style={{textTransform: 'uppercase'}}>
                                {t('farm.header.day_old.title')}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" id="__text">
                                {t('farm.header.day_old.text')}
                                {/* Fertile eggs come from a dozen local and foreign
                                breeders, with whom we have partnered. Baby chicks
                                are <strong>guaranteed</strong> to arrive <strong>healthy</strong> and can be vaccinated from
                                our facility for a <strong>small fee.</strong> */}
                            </Typography>
                        </CardContent>

                        <CardActions sx={{justifyContent: 'center'}}>
                        <Link to="contactFormWrapper">
                            <Button variant="contained" color="success" className="btn-contact">
                                {t('farm.header.vegetables_delivery_banner.delivery.contact_us')}
                            </Button>
                            </Link>
                        </CardActions>
                    </Stack>
                </div>
            </Stack>
        </Box>
    )

    const Hatching = () => (
        <Box sx={{ width: '100%' }}>
            <Stack direction="column" spacing={2}>
                <Box id="__img">
                <CardMedia
                    component="img"
                    height="240"
                    image={hatch}
                    alt="hatch egg banner"
                    id="hatch_img"
                />
                </Box>

                <Box aria-label="secondary mailbox folders">
                    <Stack direction="column" spacing={2}>
                        <Box>
                        <Typography gutterBottom variant="h5" component="div">
                            {t('farm.header.hatching.title')}
                            <pre>{t('farm.header.hatching.subtitle')}</pre>
                        </Typography>
                        </Box>

                        <Box id="__container_list">
                            <List className="hatching__list">
                                <ListItem disablePadding className="__list-item">
                                    <ListItemButton>
                                        <ListItemText className="__list-text" primary="Cobb" />
                                    </ListItemButton>
                                </ListItem>
                                <ListItem disablePadding className="__list-item">
                                    <ListItemButton >
                                        <ListItemText  className="__list-text"primary="Hy-line" />
                                    </ListItemButton>
                                </ListItem>
                                <ListItem disablePadding className="__list-item">
                                    <ListItemButton >
                                        <ListItemText  className="__list-text"primary="Novo" />
                                    </ListItemButton>
                                </ListItem>
                                <ListItem disablePadding className="__list-item">
                                    <ListItemButton >
                                        <ListItemText  className="__list-text"primary="Lohmann" />
                                    </ListItemButton>
                                </ListItem>
                                <ListItem disablePadding className="__list-item">
                                    <ListItemButton >
                                        <ListItemText  className="__list-text"primary="Delkab" />
                                    </ListItemButton>
                                </ListItem>
                                <ListItem disablePadding className="__list-item">
                                    <ListItemButton >
                                        <ListItemText  className="__list-text"primary="Isa Brown" />
                                    </ListItemButton>
                                </ListItem>
                            </List>
                        </Box>
                    </Stack>
                </Box>
            </Stack>

            <Link to="contactFormWrapper">
            <Button variant="contained" color="success"  sx={{mt: 2, mb: 1}} className="btn-contact">
            {t('farm.header.vegetables_delivery_banner.delivery.contact_us')}
            </Button>

            </Link>
        </Box>
    )

    return (
        <Typography component="p">
       ` <Box sx={{ flexGrow: 1 }}  id="vacc_wrapper">
            <Grid container spacing={2} id="vacchatch__grid-container">
                <Grid item xs={8} className="vacchatch__inner-item">
                    <Item>
                        <Vaccine />
                    </Item>
                </Grid>

                <Grid item xs={4} className="vacchatch__inner-item">
                    <Item>
                        <Hatching />
                    </Item>
                </Grid>
            </Grid>
        </Box>`

        </Typography>
    )
}

export default Vacchatch