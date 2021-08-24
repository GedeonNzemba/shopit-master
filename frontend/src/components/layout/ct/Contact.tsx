import React, { useState } from "react";
import "./style.css";

import {
  Grid,
  Stepper,
  Step,
  StepLabel,
  Box,
  Card,
  CardContent,
  Button,
  CircularProgress,
  Typography,
  StylesProvider
} from "@material-ui/core";
import { Field, Form, Formik, FormikConfig, FormikValues } from "formik";
import { CheckboxWithLabel, TextField } from "formik-material-ui";
// import { mixed, number, object } from "yup";
 import * as Yup from 'yup';


let initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  
};

const sleep = (time: number) => new Promise(acc => setTimeout(acc, time));

const SignupSchema = Yup.object().shape({
   firstName: Yup.string()
     .min(2, 'Too Short!')
     .max(50, 'Too Long!')
     .required('Required'),
   lastName: Yup.string()
     .min(2, 'Too Short!')
     .max(50, 'Too Long!')
     .required('Required'),
   email: Yup.string().email('Invalid email').required('Required'),
 });

export default function App() {
  return (
    <Card>
      <CardContent>
  
        <FormikStepper
          initialValues={initialValues}
          onSubmit={async values => {
            await sleep(3000);
            console.log("values", values);
          }}

        >
         
          <FormikStep label="Personal Info">
            <Box paddingBottom={2}>
              <Field
                fullWidth
                name="firstName"
                component={TextField}
                label="First Name"
              />
            </Box>
            <Box paddingBottom={2}>
              <Field
                fullWidth
                name="lastName"
                component={TextField}
                label="Last Name"
              />
            </Box>
            <Box paddingBottom={2}>
              <Field
                fullWidth
                name="email"
                component={TextField}
                label="Email"
              />
            </Box>
          </FormikStep>
          
          
  
          <FormikStep label="More Info">
            <Box paddingBottom={2}>
              <Field
                fullWidth
                name="description"
                component={TextField}
                label="Description"
              />
            </Box>
          </FormikStep>
        </FormikStepper>
    
      </CardContent>
    </Card>
  );
}

export interface FormikStepProps
  extends Pick<FormikConfig<FormikValues>, "children" | "validationSchema"> {
  label: string;
}

export function FormikStep({ children }: FormikStepProps) {
  return <>{children}</>;
}

export function FormikStepper({
  children,
  ...props
}: FormikConfig<FormikValues>) {
  const childrenArray = React.Children.toArray(children) as React.ReactElement<
    FormikStepProps
  >[];
  const [step, setStep] = useState(0);
  const currentChild = childrenArray[step] as React.ReactElement<
    FormikStepProps
  >;
  const [completed, setCompleted] = useState(false);

  function isLastStep() {
    return step === childrenArray.length - 1;
  }
  return (
    <Formik
      {...props}
      validationSchema={SignupSchema}
      onSubmit={async (values, helpers) => {
        if (isLastStep()) {
          values.money = 200;
          await props.onSubmit(values, helpers);
          setCompleted(true);
        } else {
          setStep(s => s + 1);
        }
      }}
      enableReinitialize={true}
    >
      {({ resetForm, isSubmitting }) => (
        <Form autoComplete="off">
          <Stepper alternativeLabel activeStep={step}>
            {childrenArray.map((child, index) => (
              <Step
                key={child.props.label}
                completed={step > index || completed}
              >
                <StepLabel>{child.props.label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {currentChild}
          <Grid container spacing={2}>
            <Grid item>
              {step > 0 ? (
                <Button
                  onClick={() => setStep(s => s - 1)}
                  variant="contained"
                  color="primary"
                  disabled={isSubmitting}
                >
                  Back
                </Button>
              ) : null}
            </Grid>
            <Grid item>
              <Button
                startIcon={
                  isSubmitting ? <CircularProgress size="1rem" /> : null
                }
                disabled={isSubmitting}
                variant="contained"
                color="primary"
                type="submit"
              >
                {isSubmitting
                  ? "Submitting"
                  : isLastStep()
                  ? " Submit"
                  : "Next"}
              </Button>
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  );
}

//currentChild.props.validationSchema