import Stepper from "./Stepper";
import { CssBaseline, Container, Paper, Box } from "@material-ui/core";

function Contact() {
  return (
    <>
      <CssBaseline />
      <Container component={Box} p={4}>
        <Paper component={Box} p={3}>
          <Stepper />
        </Paper>
      </Container>
    </>
  );
}

export default Contact;