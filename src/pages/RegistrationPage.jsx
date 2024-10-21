import React, { useState } from 'react';
import {
  Container, TextField, Button, Stepper, Step, StepLabel, Typography, Box, Card, CardContent
} from '@mui/material';

const steps = ['Personal Info', 'Farm/Vendor Info', 'Review & Submit'];

const RegistrationPage = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    farmSize: '',
    produceType: '',
    vendorType: '',
  });

  const handleNext = () => {
    setActiveStep(prevStep => prevStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevStep => prevStep - 1);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    // Submit form data (e.g., to a backend)
    console.log(formData);
  };

  const renderForm = () => {
    switch (activeStep) {
      case 0:
        return (
          <Box>
            <TextField
              label="Name"
              name="name"
              fullWidth
              margin="normal"
              variant="outlined"
              value={formData.name}
              onChange={handleChange}
            />
            <TextField
              label="Email"
              name="email"
              fullWidth
              margin="normal"
              variant="outlined"
              value={formData.email}
              onChange={handleChange}
            />
          </Box>
        );
      case 1:
        return (
          <Box>
            <TextField
              label="Farm Size (if Farmer)"
              name="farmSize"
              fullWidth
              margin="normal"
              variant="outlined"
              value={formData.farmSize}
              onChange={handleChange}
            />
            <TextField
              label="Type of Produce or Vendor Type"
              name="produceType"
              fullWidth
              margin="normal"
              variant="outlined"
              value={formData.produceType}
              onChange={handleChange}
            />
          </Box>
        );
      case 2:
        return (
          <Box>
            <Typography>Review your details</Typography>
            <Typography>Name: {formData.name}</Typography>
            <Typography>Email: {formData.email}</Typography>
            <Typography>Farm Size: {formData.farmSize}</Typography>
            <Typography>Produce/Vendor Type: {formData.produceType}</Typography>
          </Box>
        );
      default:
        return <Typography>Error</Typography>;
    }
  };

  return (
    <Container maxWidth="sm" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Card style={{ width: '100%', padding: '20px' }}>
        <CardContent>
          <Stepper activeStep={activeStep} style={{ marginBottom: '20px' }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>

          {renderForm()}

          <Box mt={4}>
            {activeStep !== 0 && (
              <Button onClick={handleBack} variant="contained" color="secondary" style={{ marginRight: 10 }}>
                Back
              </Button>
            )}
            {activeStep !== steps.length - 1 ? (
              <Button onClick={handleNext} variant="contained" color="primary">
                Next
              </Button>
            ) : (
              <Button onClick={handleSubmit} variant="contained" color="primary">
                Submit
              </Button>
            )}
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};

export default RegistrationPage;
