import React from 'react'
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { useForm } from "react-hook-form";
import { useTranslation, Trans } from 'react-i18next';
import Form from '../ct/steps/layout/index'

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            fontSize: '1.6rem!important'
        },
    },
    input: {
        width: '100%',
        fontSize: '1.6rem'
    },
    email: {
        width: '50%'
    },
    stack: {
        marginBottom: '2rem'
    }
}));

export default function StepperUI() {
    const { t, i18n } = useTranslation();
    const { register, handleSubmit, formState: { errors } } = useForm();

    const stepTitles = ['Personal', 'Business', 'Message']

    const [activeStep, setActiveStep] = React.useState(0)


    const onSubmit = (data) => {
        console.log(data);
    }

    console.log(errors);

    const nextStep = () => {
        if (activeStep < 2)
            setActiveStep((prevState) => prevState + 1)
    }

    const prevStep = () => {
        if (activeStep !== -1)
            setActiveStep((prevState) => prevState - 1)
    }

    register('firstName', { required: "First name is required", min: 8 });

    const classes = useStyles();

    return (
        <div>
            <Stepper activeStep={activeStep}>
                <Step>
                    <StepLabel><h3 style={{ color: '#000000', fontFamily: 'Roboto' }}>{stepTitles[0]}</h3></StepLabel>
                </Step>

                <Step>
                    <StepLabel><h3 style={{ color: '#000000', fontFamily: 'Roboto' }}>{stepTitles[1]}</h3></StepLabel>
                </Step>

                <Step>
                    <StepLabel><h3 style={{ color: '#000000', fontFamily: 'Roboto' }}>{stepTitles[2]}</h3></StepLabel>
                </Step>
            </Stepper>

            <Form />

            {/* <Box
                component="form"
                style={{  }}
                noValidate
                autoComplete="off"
                onSubmit={handleSubmit(onSubmit)}
                id="contact_form"
            >
                {activeStep === 0 && (
                    <section id="personal">
                        <Stack direction="row" spacing={2} className={classes.stack}>
                            <TextField
                                id="name_field"
                                htmlFor="name_field"
                                label={t('farm.dashboard.products.all_products.products_modification.table.name')}
                                variant="standard"
                                className={classes.input + ' inputField'  + classes.root + classes.root}
                                name="firstName"
                                type="text"
                                
                            />
                            <TextField
                                id="name_field"
                                label={t('last__name')}
                                variant="standard"
                                className={classes.input + ' inputField'  + classes.root}
                                name="lastName"
                                {...register('lastName', {
                                    required: 'Last Name is required',
                                    maxLength: 12,
                                })}
                                error={Boolean(errors.name)}
                                helperText={errors.name?.message
                                }
                            />
                        </Stack>

                        <Stack direction="row" spacing={2} className={classes.stack}>
                            <TextField
                               id="name_field"
                               htmlFor="name_field"
                               label={t('farm.dashboard.total_users.email')}
                               variant="standard"
                               className={classes.input + ' inputField'  + classes.root}
                               name="email"
                               type="email"
                               {...register('email', {
                                   required: 'Email is required',
                                   maxLength: 12,
                               })}
                               error={Boolean(errors.name)}
                               helperText={errors.name?.message
                               }

                            />
                        </Stack>
                    </section>
                )}

                {activeStep === 1 && (
                    <h1>THIS IS STEP 2</h1>
                )}

                {activeStep === 2 && (
                    <h1>THIS IS STEP 3</h1>
                )}

                <Stack direction='row' spacing={2}>
                    <Button onClick={() => prevStep()} variant="outlined" >Prev Step</Button>
                    <Button onClick={() => nextStep()} variant="outlined" type='submit'>Next Step</Button>
                </Stack>
                <input type="submit"/>
            </Box> */}
        </div>
    )
}
